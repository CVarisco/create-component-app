import fs from 'fs-extra'
import {
  generateComponentTemplate,
  generateStyleFile,
  generateIndexFile,
  generateTestTemplate,
  generateStorybookTemplate,
} from './templates'

/**
 * Get the extension from the filename
 * @param {string} fileName
 */
function getExtension(fileName) {
  const splittedFilename = fileName.split('.')
  const length = splittedFilename.length

  if (splittedFilename[1] === 'tests') {
    return `${splittedFilename[length - 2]}.${splittedFilename[length - 1]}`
  }

  return splittedFilename[length - 1]
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
 * check if already exist in the folder the same file name
 * If already exist, use the name
 * @param {string} newFilePath
 * @param {string} newFileName
 * @param {string} fileName
 */
function generateFileName(newFilePath, newFileName, fileName) {
  // Suppose that the index file don't be renamed
  if (fileName.indexOf('index') !== -1) {
    return fileName
  }

  if (fs.existsSync(newFilePath)) {
    return fileName
  }
  return newFileName
}

/**
 * Generate component files from custom templates folder
 * Get every single file in the
 * @param {string} the name of the component used to create folder and file
 * @param {string} where the component folder is created
 * @param {string} where the custom templates are
 */
async function generateFilesFromCustom({ name, path, templatesPath }) {
  try {
    const files = fs.readdirSync(templatesPath)

    files.map(async (templateFileName) => {
      // Get the template content
      const content = await readFile(templatesPath, templateFileName)
      const replaced = content.replace(/COMPONENT_NAME/g, name)
      // Exist ?
      const newFileName = generateFileName(
        `${path}/${name}/`,
        `${name}.${getExtension(templateFileName)}`,
        templateFileName
      )
      // Write the new file with the new content
      fs.outputFile(`${path}/${name}/${newFileName}`, replaced)
    })
  } catch (e) {
    console.log(e)
  }
}

/**
 * Generate component files
 *
 * @param {string} type of component template
 * @param {string} the name of the component used to create folder and file
 * @param {string} where the component folder is created
 * @param {boolean} the extension of the css file
 * @param {boolean} the extension of the css file
 */
function generateFiles(params) {
  const {
    type,
    name,
    path,
    indexFile,
    cssExtension,
    jsExtension,
    connected,
    includeStories,
    includeTests,
  } = params
  const destination = `${path}/${name}`

  if (indexFile || connected) {
    fs.outputFile(
      `${destination}/index.js`,
      generateIndexFile(name, connected)
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
      `${destination}/${name}.tests.${jsExtension}`,
      generateTestTemplate(name)
    )
  }

  // Create js file
  fs.outputFile(
    `${destination}/${name}.${jsExtension}`,
    generateComponentTemplate(type, name)
  )

  // Create css file
  fs.outputFile(
    `${destination}/${name}.${cssExtension}`,
    generateStyleFile(name)
  )
}

export { generateFiles, generateFilesFromCustom }
