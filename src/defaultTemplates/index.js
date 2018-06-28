import prettier from 'prettier'
import generateClassComponent from './js/class.template'
import generateFunctionalComponent from './js/functional.template'
import generateTestTemplate from './js/test.template'
import generateStorybookTemplate from './js/storybook.template'
import generateStyleFile from './css/style.template'
import generateIndexFile from './js/index.template'

const types = {
  stateless: generateFunctionalComponent,
  class: generateClassComponent,
  pure: generateClassComponent,
}

async function generateComponentTemplate(type, name, options = {}) {
  const template = types[type](name, type, options)

  if (options.prettierConfig) {
    const prettierConf = await prettier.resolveConfig(process.cwd())
    const formatted = prettier.format(template, { ...prettierConf, parser: 'babylon' })
    return formatted
  }

  return template
}

export {
  generateComponentTemplate,
  generateClassComponent,
  generateStyleFile,
  generateIndexFile,
  generateTestTemplate,
  generateStorybookTemplate,
}
