#!/usr/bin/env node

import inquirer from 'inquirer'
import yargs from 'yargs'

import { generateFiles, generateFilesFromCustom } from './files'
import questions from './questions'

// Dynamically import the config file if exist
let config = null
const argsConfigPath = yargs.argv.config
const directoryConfig = `${process.cwd()}/.ccarc`

// Check if exist the default directory of configuration
if (fs.existsSync(directoryConfig)) {
  config = JSON.parse(fs.readFileSync(directoryConfig, 'utf8'))
}

// Override the config object from the directory if exist --config
if (argsConfigPath) {
  config = require(`${process.cwd()}/${argsConfigPath}`)
}

/**
 * If the user want to use custom templates, return filtered questions
 * for only custom configuration
 */
function generateQuestionsCustom() {
  const mandatoryQuestions = [
    questions.name,
    questions.path,
  ]

  return mandatoryQuestions.filter((question) => {
    if (config[question.name]) {
      return false
    }
    return true
  })
}

/**
 * Generate questions filtered by the config file if exist
 */
function generateQuestions() {
  const questionKeys = Object.keys(questions)

  if (!config) {
    return questionKeys.map(question => questions[question])
  }

  // If type is custom, filter question mandatory to work
  if (config.type === 'custom') {
    return generateQuestionsCustom()
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
 * Start the process to generate component folder and files:
 * Filter question by config file
 * Get from the user the requirements to create the component folder and files
 * Generate files
 */
async function start() {
  try {
    const filteredQuestions = generateQuestions()
    const requirements = await inquirer.prompt(filteredQuestions)

    const results = {
      ...config,
      ...requirements,
    }

    if (results.type === 'custom') {
      generateFilesFromCustom(results)
    } else {
      generateFiles(results)
    }

    console.log('Your component is created!')
  } catch (e) {
    console.log(e)
  }
}

start()
