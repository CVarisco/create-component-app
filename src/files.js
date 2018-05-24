import fs, { readFileSync } from 'fs-extra'
import glob from 'glob'
import defaultOptions from './config.json'
import {
  generateComponentTemplate,
  generateIndexFile,
  generateStorybookTemplate,
  generateStyleFile,
  generateTestTemplate,
} from './defaultTemplates'
import Logger from './logger'
import { getConfig } from './utils'

/**
 * Generate the file name
 * @param {string} newFileName
 * @param {string} templateFileName
 */
function replaceComponentName(content, stringToReplace) {
  return content.replace(/COMPONENT_NAME/g, stringToReplace)
}

/**
 * Generate component file from custom template.
 * Callback of generateFilesFromTemplate
 * @param {string} name the name of the component used to create folder and file
 * @param {string} outputPath where the component folder will be create
 * @param {string} templatesPaths where the template is located
 * @param {string} templateFileName name of the component
 */
function generateCustomFile(name, outputPath, templatesPath, templateFileName) {
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
  files.forEach(templateFileName =>
    generateCustomFile(name, outputPath, templatesPath, templateFileName)
  )
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
    (acc, curr) => (acc[curr] = replaceComponentName(fileNames[curr], componentName)),
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

  const { testFileName, componentFileName, styleFileName } = getFileNames(fileNames, name)

  if (indexFile || connected) {
    fs.outputFile(`${destination}/index.js`, generateIndexFile(componentFileName, connected))
  }

  if (includeStories) {
    fs.outputFile(`${destination}/${name}.stories.${jsExtension}`, generateStorybookTemplate(name))
  }

  if (includeTests) {
    fs.outputFile(`${destination}/${testFileName}.${jsExtension}`, generateTestTemplate(name))
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

export { generateFiles, generateFilesFromCustomTemplate }
