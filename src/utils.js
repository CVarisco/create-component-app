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
 * @param {any} [stopDir=homedir()]
 * @returns {Object} config
 */
function getConfig(configPath, stopDir = homedir()) {
  const explorer = cosmiconfig('cca', { stopDir })
  try {
    const result = explorer.searchSync(configPath)

    if (!result) Logger.log('No config file detected, using defaults.')

    const config = result ? result.config : {}
    return { ...config }
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
