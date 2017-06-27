const questions = [
  {
    type: 'list',
    name: 'type',
    message: 'What kind of components do you want create:',
    choices: ['stateless', 'class', 'pure component'],
  },
  {
    type: 'input',
    name: 'path',
    message: 'Where do you want create your component?',
    default: './src/components',
  },
]

export default questions
