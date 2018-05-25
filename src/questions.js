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
    message: 'What kind of extension do you use for style file ?',
    choices: ['css', 'scss', 'sass', 'less', "I don't want a style file"],
    filter: (input) => {
      if (input === "I don't want a style file") {
        return false
      }
      return input
    },
  },
  includeStories: {
    type: 'confirm',
    name: 'includeStories',
    message: 'Do you want a storybook file?',
    default: true,
  },
  includeTests: {
    type: 'confirm',
    name: 'includeTests',
    message: 'Do you want a test file?',
    default: true,
  },
  path: {
    type: 'input',
    name: 'path',
    message: 'Where do you want create your component ?',
    default: './src/components',
  },
}

const templateQuestions = {
  template: templates => ({
    type: 'list',
    name: 'template',
    message: 'Do you wanna choose a template',
    pageSize: 100,
    choices: ["-- No, I don't want --", ...templates],
    filter: (value) => {
      if (value === "-- No, I don't want --") {
        return false
      }

      return value
    },
  }),
}

export { questions, templateQuestions }
