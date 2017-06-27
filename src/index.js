#!/usr/bin/env node

import inquirer from 'inquirer'
import fs from 'fs-extra'
import { generateComponentTemplate, generateStyleFile } from './templates'
import questions from './questions'

async function start() {
  try {
    const { type, name, path } = await inquirer.prompt(questions)

    // Create css file
    await fs.outputFile(`${path}/${name}.js`, generateComponentTemplate(type, name))

    // Create js file
    await fs.outputFile(`${path}/${name}.css`, generateStyleFile(name))
  } catch (e) {
    console.log(e)
  }
}

start()
