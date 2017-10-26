import fs, { lstatSync, readdirSync } from 'fs-extra'
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
 * readFile fs promise wrapped
 * @param {string} path
 * @param {string} fileName
 */
function readFile(path, fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(`${path}/${fileName}`, 'utf8', (err, content) => {
      if (err) {
        return reject(err)
      }

      return resolve(content)
    })
  })
}

/**
 * generate the file name
 * @param {string} newFilePath
 * @param {string} newFileName
 * @param {string} templateFileName
 */
function generateFileName(newFilePath, newFileName, templateFileName) {
  if (templateFileName.includes('COMPONENT_NAME')) {
    return templateFileName.replace(/COMPONENT_NAME/g, newFileName)
  }
  console.log(templateFileName)
  return templateFileName
}

/**
 * Generate component files from custom templates folder
 * Get every single file in the folder
 * @param {string} the name of the component used to create folder and file
 * @param {string} where the component folder is created
 * @param {string} where the custom templates are
 */
async function generateFilesFromTemplate({ name, path, templatesPath }) {
  try {
    const files = glob.sync('**/*', { cwd: templatesPath, nodir: true })

    files.map(async (templateFileName) => {
      // Get the template content
      const content = await readFile(templatesPath, templateFileName)
      const replaced = content.replace(/COMPONENT_NAME/g, name)
      // Exist ?
      const newFileName = generateFileName(
        `${path}/${name}/`,
        name,
        templateFileName
      )
      // Write the new file with the new content
      fs.outputFile(`${path}/${name}/${newFileName}`, replaced)
    })
  } catch (e) {
    Logger.error(e.message)
  }
}

/**
 * Return the default names replace from user filenames
 * @param {object} fileNames object with the user selected filenames
 * @param {string} componentName
 * @return {object} with the correct filenames
 */
function getFileNames(fileNames, componentName) {
  const defaultFileNames = {
    testFileName: defaultOptions.testFileName,
    testFileMatch: componentName,
    componentFileName: componentName,
    styleFileName: componentName,
  }

  return { ...defaultFileNames, ...fileNames }
}

/**
 * Generate component files
 *
 * @param {object} params object with:
 * @param {string} type: the type of component template
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

  const {
    testFileName,
    testFileMatch,
    componentFileName,
    styleFileName,
  } = getFileNames(fileNames, name)

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
      `${destination}/${testFileName}.${testFileMatch}.${jsExtension}`,
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

const generateFilesFromCustom = generateFilesFromTemplate
export {
  generateFiles,
  generateFilesFromTemplate,
  generateFilesFromCustom,
  getDirectories,
}
