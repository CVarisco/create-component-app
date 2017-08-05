import inquirer from 'inquirer'
import { getDirectories } from './files'

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
  const filteredQuestions = []
  questionKeys.forEach((question) => {
    if (!config.hasOwnProperty(question)) {
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
