#!/usr/bin/env node

import inquirer from 'inquirer'
import fs from 'fs-extra'
import generateTemplate from './templates'
import questions from './questions'

async function createFiles(file, generatedTemplate) {
  try {
    await fs.outputFile(file, generatedTemplate)
  } catch (e) {
    console.log(e)
  }
}

async function start() {
  try {
    const { type, path } = await inquirer.prompt([questions[0], questions[1]])
    const generatedTemplate = generateTemplate(type, 'Test')
    const file = `${path}/test.js`
    // Create file
    await createFiles(file, generatedTemplate)
  } catch (e) {
    console.log(e)
  }
}

start()
