import generateClassComponent from './js/class.template'
import generatePureComponent from './js/pure.template'
import generateFunctionalComponent from './js/functional.template'
import generateStyleFile from './css/style.template'
import generateIndexFile from './js/index.template'

const types = {
  stateless: generateFunctionalComponent,
  class: generateClassComponent,
  pure: generatePureComponent,
}

function generateComponentTemplate(type, name) {
  return types[type](name)
}

export { generateComponentTemplate, generateStyleFile, generateIndexFile }
