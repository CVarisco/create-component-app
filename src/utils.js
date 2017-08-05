import inquirer from 'inquirer'
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
    logWarn('The custom templates path that you supply is unreachable')
    logWarn('falling back to defaults templates')
    return predefined
  }
}

/**
 * Ask the user to choose a template from a list
 *
 * @param {array} templates
 * @returns the choosen template
 */
async function chooseTemplate(templates) {
  const { template } = await inquirer.prompt([
    {
      type: 'list',
      name: 'template',
      message: 'Choose a template',
      choices: templates,
    },
  ])
  return template
}

export { generateQuestions, chooseTemplate, getTemplatesList }
