#!/usr/bin/env node

import inquirer from 'inquirer'
import fs from 'fs-extra'
import yargs from 'yargs'
import { generateComponentTemplate, generateStyleFile, generateIndexFile } from './templates'
import questions from './questions'

// Dynamically import the config file if exist
let config = null
const argsConfigPath = yargs.argv.config
const directoryConfig = `${process.cwd()}/.ccarc`
    
    if (fs.existsSync(directoryConfig)) {
        config = JSON.parse(fs.readFileSync(directoryConfig, "utf8"))
    }
    
    if (argsConfigPath){
        config = require(`${process.cwd()}/${argsConfigPath}`)
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

/**
 * Generate questions filtered by the config file if exist
 */
function generateQuestions() {
  const questionKeys = Object.keys(questions)
  
  if (!config) {
    return questionKeys.map(question => questions[question])
  }

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

    generateFiles(results)

    console.log('Your component is created!')
  } catch (e) {
    console.log(e)
  }
}

start()
