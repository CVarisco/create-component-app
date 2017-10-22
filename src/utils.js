import inquirer from 'inquirer'
import fs from 'fs-extra'
import path from 'path'

import questionsList from './questions'
import Logger from './logger'
import { getDirectories } from './files'

/**
 * If the user want to use custom templates, return filtered questions
 * for only custom configuration
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
 *
 *
 * @param {any} customPath
 */
function getTemplatesList(customPath = null) {
  const predefined = getDirectories('./templates').reduce(
    (prev, dir) => ({
      ...prev,
      [dir.split('/').pop()]: dir,
    }),
    {}
  )
  try {
    const custom = customPath
      ? getDirectories(customPath).reduce(
          (prev, dir) => ({
            ...prev,
            [dir.split('/').pop()]: dir,
          }),
          {}
        )
      : []

    return { ...predefined, ...custom }
  } catch (error) {
    Logger.warn('The custom templates path that you supply is unreachable')
    Logger.warn('falling back to defaults templates')
    return predefined
  }
}

// Dynamically import the config file if exist
function getConfig(configPath = '.ccarc') {
  const fullPath = path.join(process.cwd(), configPath)

  let config
  // Check if exist the default directory of configuration
  if (fs.existsSync(fullPath)) {
    try {
      config = JSON.parse(fs.readFileSync(fullPath, 'utf8'))
    } catch (error) {
      Logger.error('Bad config file, Please check config file syntax')
    }
  }
  return config
}

async function getTemplate(templatesList, templateName = null) {
  if (!templateName) {
    const templatesArray = Object.entries(templatesList).map(([name, value]) => ({ name, value }))
    const { template } = await inquirer.prompt(questionsList.template(templatesArray))
    return template
  }
  if (templateName in templatesList) {
    return templateName
  }
  throw Error(`The template '${templateName}' does't exists`)
}

export { generateQuestions, getTemplatesList, getConfig, getTemplate }
