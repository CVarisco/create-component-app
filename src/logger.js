import chalk from 'chalk'

const Logger = {
  log(msg) {
    /* eslint-disable no-console */
    return console.log(chalk.green(JSON.stringify(msg)))
    /* eslint-enable no-console */
  },
  error(msg) {
    /* eslint-disable no-console */
    return console.error(chalk.bold.red(JSON.stringify(msg)))
    /* eslint-enable no-console */
  },
  warn(msg) {
    /* eslint-disable no-console */
    return console.warn(chalk.keyword('orange')(JSON.stringify(msg)))
    /* eslint-enable no-console */
  },
}

export default Logger
