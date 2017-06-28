const questions = {
  type: {
    type: 'list',
    name: 'type',
    message: 'What kind of components do you want to create ?',
    choices: ['stateless', 'class', 'pure'],
  },
  name: {
    type: 'input',
    name: 'name',
    message: 'What is the name of the component ?',
    default: 'ComponentName',
  },
  connected: {
    type: 'confirm',
    name: 'connected',
    message: 'Do you want to connect the component to redux ?',
    default: false,
  },
  indexFile: {
    type: 'confirm',
    name: 'indexFile',
    message: 'Do you want an index file on your folder ?',
    default: false,
  },
  jsExtension: {
    type: 'list',
    name: 'jsExtension',
    message: 'What kind of extension do you use for js files ?',
    choices: ['js', 'jsx'],
  },
  cssExtension: {
    type: 'list',
    name: 'cssExtension',
    message: 'What kind of extension do you use for css files ?',
    choices: ['css', 'scss', 'sass'],
  },
  path: {
    type: 'input',
    name: 'path',
    message: 'Where do you want create your component ?',
    default: './src/components',
  },
}

export default questions
