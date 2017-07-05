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

function generateComponentTemplate(type, name, options = {}) {
  return types[type](name, type, options)
}

export {
  generateComponentTemplate,
  generateClassComponent,
  generateStyleFile,
  generateIndexFile,
  generateTestTemplate,
  generateStorybookTemplate,
}
