import fs from 'fs-extra'
import { generateComponentTemplate, generateStyleFile, generateIndexFile } from './templates'

/**
 * Get the extension from the filename
 */
function getExtension(fileName){
  const splittedFilename = fileName.split('.')
  return splittedFilename[splittedFilename.length - 1]
}

/**
 * readFile fs promise wrapped
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
 * Generate component files from custom templates folder
 * Get every single file in the
 * @param {name} the name of the component used to create folder and file
 * @param {path} where the component folder is created
 * @param {templatesPath} where the custom templates are
 */
async function generateFilesFromCustom({ name, path, templatesPath }) {
  try {
    const files = fs.readdirSync(templatesPath)

    files.map(async (file) => {
      // Get the template content
      const content = await readFile(templatesPath, file)
      const replaced = content.replace(/COMPONENT_NAME/g, name)
      const newFileName = `${name}.${getExtension(file)}`
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
 * @param {type} type of component template
 * @param {name} the name of the component used to create folder and file
 * @param {path} where the component folder is created
 * @param {cssExtension} the extension of the css file
 * @param {jsExtension} the extension of the css file
 */
function generateFiles({ type, name, path, indexFile, cssExtension, jsExtension, connected }) {
  const destination = `${path}/${name}`

  if (indexFile || connected) {
    fs.outputFile(`${destination}/index.js`, generateIndexFile(name, connected))
  }
    // Create js file
  fs.outputFile(`${destination}/${name}.${jsExtension}`, generateComponentTemplate(type, name))

    // Create css file
  fs.outputFile(`${destination}/${name}.${cssExtension}`, generateStyleFile(name))
}

export {
  generateFiles,
  generateFilesFromCustom,
}
