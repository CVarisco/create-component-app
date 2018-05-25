import cosmiconfig from 'cosmiconfig'
import { lstatSync, readdirSync } from 'fs-extra'
import { homedir } from 'os'
import path, { join } from 'path'
import Logger from './logger'

function isIISNode(main) {
  return /\\iisnode\\/.test(main.filename)
}

function handleIISNode(main) {
  if (!main.children.length) {
    return main.filename
  }
  return main.children[0].filename
}

function getModulePath(_require = require) {
  const main = _require.main
  if (main && isIISNode(main)) {
    return handleIISNode(main)
  }
  return main ? main.filename : process.cwd()
}

function getDefaultPathTemplates() {
  return `${path.dirname(getModulePath())}/templates`
}

const DEFAULT_PATH_TEMPLATES = getDefaultPathTemplates()

/**
 * Fetch a list of dirs inside a dir
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
 * Reduce callback to reduce the list of directories
 * @param {object} prev
 * @param {array} dir
 */
function createListOfDirectories(prev, dir) {
  return {
    ...prev,
    [dir.split(path.sep).pop()]: dir,
  }
}

/**
 * Generate questions filtered by the config file if exist
 *
 * @param {object} config
 * @param {object} questions
 * @returns {array}
 */
function generateQuestions(config = {}, questions = {}) {
  const questionKeys = Object.keys(questions)

  if (!config) {
    return questionKeys.map(question => questions[question])
  }

  // filter questions from config object
  const filteredQuestions = questionKeys.reduce((acc, curr) => {
    if (!(curr in config)) {
      return [...acc, questions[curr]]
    }
    return acc
  }, [])

  return filteredQuestions
}

/**
 * Returns the list of templates available
 * @param {any} customPath
 */
function getTemplatesList(customPath = null) {
  const predefined = getDirectories(DEFAULT_PATH_TEMPLATES).reduce(createListOfDirectories, {})
  try {
    const custom = customPath ? getDirectories(customPath).reduce(createListOfDirectories, {}) : []

    return { ...predefined, ...custom }
  } catch (error) {
    Logger.warn('The custom templates path that you supply is unreachable')
    Logger.warn('Falling back to defaults templates')
    return predefined
  }
}

/**
 * Dynamically import a config file if exist
 *
 * @param {any} configPath
 * @param {any} [searchPath=process.cwd()]
 * @param {any} [stopDir=homedir()]
 * @returns {Object} config
 */
function getConfig(configPath, searchPath = process.cwd(), stopDir = homedir()) {
  const useCustomPath = !!configPath
  const explorer = cosmiconfig('cca', { sync: true, stopDir })

  try {
    const searchPathAbsolute = !useCustomPath && searchPath
    const configPathAbsolute = useCustomPath && path.join(process.cwd(), configPath)
    // search from the root of the process if the user didnt specify a config file,
    // or use the custom path if a file is passed.
    const result = explorer.load(searchPathAbsolute, configPathAbsolute)

    // dont throw if the explorer didnt find a configfile,
    // instead use default config
    const config = result ? result.config : {}
    const filepath = result ? result.filepath : {}
    if (!result) Logger.log('No config file detected, using defaults.')

    return { ...config, filepath }
  } catch (error) {
    Logger.error(
      'An error occured while parsing your config file. Using defaults...\n\n',
      error.message
    )
  }
  return {}
}

/**
 * Return the template name if exist on the list
 * @param {array} templatesList to filter
 * @param {string} templateName
 */
function getTemplate(templatesList, templateName = null) {
  if (templateName in templatesList) {
    return templatesList[templateName]
  }
  throw Error(`The template '${templateName}' does't exists`)
}

export { generateQuestions, getTemplatesList, getConfig, getTemplate }
