import inquirer from 'inquirer'
import path from 'path'
import cosmiconfig from 'cosmiconfig'
import { homedir } from 'os'
import { templateQuestions } from './questions'
import Logger from './logger'
import { getDirectories } from './files'

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
 * If the user want to use custom templates, return filtered questions
 * for only custom configuration
 * @param {object} config
 * @param {object} questions
 */
function generateQuestionsCustom(config, questions) {
  const mandatoryQuestions = [questions.name, questions.path]

  return mandatoryQuestions.filter((question) => {
    if (config[question.name]) {
      return false
    }
    return true
  })
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

  // If type is custom, filter question mandatory to work
  if (config.type === 'custom') {
    return generateQuestionsCustom(config, questions)
  }

  // filter questions from config object
  const filteredQuestions = []
  questionKeys.forEach((question) => {
    if (!(question in config)) {
      filteredQuestions.push(questions[question])
    }
  })

  return filteredQuestions
}

/**
 * Reduce callback to reduce the list of directories
 * @param {object} prev
 * @param {array} dir
 */
function createListOfDirectories(prev, dir) {
  return {
    ...prev,
    [dir.split('/').pop()]: dir,
  }
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
    Logger.warn('falling back to defaults templates')
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
    Logger.error('An error occured while parsing your config file. Using defaults...\n\n', error.message)
  }
  return {}
}

/**
 * List templates on terminal or get the template (templateName config) from the folder of templates
 * @param {array} templatesList to filter
 * @param {string} templateName
 */
async function getTemplate(templatesList, templateName = null) {
  if (!templateName) {
    const templatesArray = Object.entries(templatesList).map(([name, value]) => ({ name, value }))
    const { template } = await inquirer.prompt(templateQuestions.template(templatesArray))
    return template
  }
  if (templateName in templatesList) {
    return templatesList[templateName]
  }
  throw Error(`The template '${templateName}' does't exists`)
}

export { generateQuestions, getTemplatesList, getConfig, getTemplate }
