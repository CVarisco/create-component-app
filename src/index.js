#!/usr/bin/env node
import chalk from 'chalk'

import inquirer from 'inquirer'
import yargs from 'yargs'
import fs from 'fs-extra'
import { generateFiles, generateFilesFromTemplate, generateFilesFromCustom } from './files'
import { generateQuestions, chooseTemplate, getTemplatesList } from './utils'

import questions from './questions'

global.logError = msg => console.error(chalk.bold.red(msg))
global.logWarn = msg => console.warn(chalk.keyword('orange')(msg))

// Dynamically import the config file if exist
let config = null
const argsConfigPath = yargs.argv.config
const argsTemplate = yargs.argv.template
const directoryConfig = `${process.cwd()}/.ccarc`

// Check if exist the default directory of configuration
if (fs.existsSync(directoryConfig)) {
  config = JSON.parse(fs.readFileSync(directoryConfig, 'utf8'))
}

// Override the config object from the directory if exist --config
if (argsConfigPath) {
  config = require(`${process.cwd()}/${argsConfigPath}`)
}

async function getTemplate(templatesList, template = null) {
  if (!template) {
    return chooseTemplate(Object.keys(templatesList))
  }
  if (template in templatesList) {
    return template
  }
  throw Error(`The template '${template}' does't exists`)
}

async function startTemplateGenarator() {
  try {
    const templatesDirPath = config ? config.templatesDirPath : null
    const templates = getTemplatesList(templatesDirPath)
    const template = await getTemplate(templates, argsTemplate)
    const templatesPath = templates[template]

    const requiredAnswers = await inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the component ?',
        default: 'ComponentName',
      },
      {
        type: 'input',
        name: 'path',
        message: 'Where do you want create your component ?',
        default: './src/components',
      },
    ])

    const results = {
      ...config,
      ...requiredAnswers,
      templatesPath,
    }

    generateFilesFromTemplate(results)
    console.log('Your component is created!')
  } catch (error) {
    logError(error.message)
  }
}

/**
 * Start the process to generate component folder and files:
 * Filter question by config file
 * Get from the user the requirements to create the component folder and files
 * Generate files
 */
async function start() {
  try {
    if (argsTemplate) {
      return await startTemplateGenarator()
    }
    const { template } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'template',
        message: 'Do you wanna choose a template',
        default: false,
      },
    ])
    if (template) {
      return await startTemplateGenarator()
    }
    const filteredQuestions = generateQuestions(config, questions)
    const requirements = await inquirer.prompt(filteredQuestions)

    const results = {
      ...config,
      ...requirements,
    }

    if (results.type === 'custom') {
      await generateFilesFromCustom(results)
    } else {
      await generateFiles(results)
    }
    console.log('Your component is created!')
  } catch (e) {
    console.log(e)
  }
  return null
}

start()

export default { generateFiles, generateFilesFromCustom }
