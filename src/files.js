import fs, { lstatSync, readdirSync, readFileSync } from 'fs-extra'
import { join } from 'path'
import glob from 'glob'
import Logger from './logger'
import {
  generateComponentTemplate,
  generateStyleFile,
  generateIndexFile,
  generateTestTemplate,
  generateStorybookTemplate,
} from './defaultTemplates'
import defaultOptions from './config.json'
import { getConfig } from './utils'

/**
 * fetch a list of dirs inside a dir
 *
 * @param {any} source path of a dir
 * @returns {array} list of the dirs inside
 */
function getDirectories(source) {
  const isDirectory = sourcePath => lstatSync(sourcePath).isDirectory()
  return readdirSync(source)
    .map(name => join(source, name))
    .filter(isDirectory)
}

/**
 * generate the file name
 * @param {string} newFileName
 * @param {string} templateFileName
 */
function replaceComponentName(content, stringToReplace) {
  return content.replace(/COMPONENT_NAME/g, stringToReplace)
}

/**
 * Generate component file from custom template.
 * Callback of generateFilesFromTemplate
 * @param {string} templateFileName name of the component
 */
function generateCustomFile(templateFileName) {
  try {
    const content = readFileSync(templatesPath, templateFileName)
    const replaced = replaceComponentName(content, templateFileName)
    const newFileName = replaceComponentName(name, templateFileName)
    fs.outputFile(`${outputPath}/${newFileName}`, replaced)
  } catch (e) {
    Logger.error(e.message)
  }
}

/**
 * Generate component files from custom templates folder
 * Get every single file in the folder
 * @param {string} the name of the component used to create folder and file
 * @param {string} where the component folder is created
 * @param {string} where the custom templates are
 */
function generateFilesFromCustomTemplate({ name, path, templatesPath }) {
  const files = glob.sync('**/*', { cwd: templatesPath, nodir: true })
  const config = getConfig(null, templatesPath, templatesPath)
  const outputPath = config.noMkdir ? `${path}` : `${path}/${name}`
  files.forEach(generateCustomFile)
}

/**
 * Return the default names replaced from user filenames merging the two objects
 * @param {object} fileNames object with the user selected filenames
 * @param {string} componentName
 * @return {object} with the correct filenames
 */
function getFileNames(fileNames = [], componentName) {
  const defaultFileNames = {
    testFileName: `${defaultOptions.testFileName}.${componentName}`,
    componentFileName: componentName,
    styleFileName: componentName,
  }

  const formattedFileNames = Object.keys(fileNames).reduce(
    (acc, curr) => {
      acc[curr] = fileNames[curr].replace(/COMPONENT_NAME/g, componentName)

      return acc
    },
    { ...defaultFileNames }
  )

  return formattedFileNames
}

/**
 * Generate component files
 *
 * @param {object} params object with:
 * @param {string} type: the type of component template
 * @param {object} fileNames: object that contains the filenames to replace
 * @param {string} name: the name of the component used to create folder and file
 * @param {string} path: where the component folder is created
 * @param {string} cssExtension: the extension of the css file
 * @param {string} jsExtension: the extension of the component file
 * @param {array} componentMethods: Array of strings of methods to include in a class component
 * @param {boolean} indexFile: include or not an index file
 * @param {boolean} connected: include or not the connect function of redux
 * @param {boolean} includeStories: include or not the storybook file
 * @param {boolean} includeTests: include or not the test file
 */
function generateFiles(params) {
  const {
    type,
    name,
    fileNames,
    path,
    indexFile,
    cssExtension,
    componentMethods,
    jsExtension,
    connected,
    includeStories,
    includeTests,
  } = params
  const destination = `${path}/${name}`

  const { testFileName, componentFileName, styleFileName } = getFileNames(
    fileNames,
    name
  )

  if (indexFile || connected) {
    fs.outputFile(
      `${destination}/index.js`,
      generateIndexFile(componentFileName, connected)
    )
  }

  if (includeStories) {
    fs.outputFile(
      `${destination}/${name}.stories.${jsExtension}`,
      generateStorybookTemplate(name)
    )
  }

  if (includeTests) {
    fs.outputFile(
      `${destination}/${testFileName}.${jsExtension}`,
      generateTestTemplate(name)
    )
  }

  // Create js file
  fs.outputFile(
    `${destination}/${componentFileName}.${jsExtension}`,
    generateComponentTemplate(type, componentFileName, {
      cssExtension,
      componentMethods,
      styleFileName,
    })
  )

  // Create css file
  if (cssExtension) {
    fs.outputFile(
      `${destination}/${styleFileName}.${cssExtension}`,
      generateStyleFile(styleFileName)
    )
  }
}

export { generateFiles, generateFilesFromCustomTemplate, getDirectories }
