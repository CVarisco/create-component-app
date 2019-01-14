#!/usr/bin/env node
import 'babel-polyfill'
import inquirer from 'inquirer'
import yargs from 'yargs'
import { generateFiles, generateFilesFromCustomTemplate } from './files'
import Logger from './logger'
import { questions, templateQuestions } from './questions'
import { generateQuestions, getConfig, getTemplate, getTemplatesList } from './utils'

const args = yargs.argv
const config = {
  ...getConfig(args.config),
  ...args,
}

/**
 * Get the template option if selected and return the path
 * @returns {String} path of the template selected by the user
 */
async function getTemplateOption() {
  const { templatesDirPath } = config
  const templates = getTemplatesList(templatesDirPath)
  const templateList = Object.entries(templates).map(([name, value]) => ({ name, value }))
  const templateArg = config.t || config.template || config.templateName

  if (templateArg) {
    return getTemplate(templates, templateArg)
  }

  const { template } = await inquirer.prompt(templateQuestions.template(templateList))

  if (!template) {
    return null
  }

  return template
}

async function startTemplateGenerator(templatesPath) {
  try {
    const { path } = config
    const requiredAnswers = await inquirer.prompt(
      [questions.name, path ? undefined : questions.path].filter(question => question)
    )
    const results = {
      ...config,
      ...requiredAnswers,
      templatesPath,
    }

    generateFilesFromCustomTemplate(results)
    Logger.log('Your component is created!')
  } catch (error) {
    Logger.error(error.message)
  }
}

/**
 * Start the process to generate component folder and files:
 * Ask if the user want use a template:
 * - if yes, generate from template,
 * - if no:
 * Filter question by config file
 * Get from the user the requirements to create the component folder and files
 * Generate files
 */
(async function start() {
  try {
    const template = await getTemplateOption()

    if (template) {
      return await startTemplateGenerator(template)
    }

    const filteredQuestions = generateQuestions(config, questions)
    const requirements = await inquirer.prompt(filteredQuestions)
    const results = {
      ...config,
      ...requirements,
    }

    await generateFiles(results)
    Logger.log('Your component is created!')
  } catch (e) {
    Logger.error(e.message)
  }
  return null
}())

export default { generateFiles, generateFilesFromCustomTemplate }
