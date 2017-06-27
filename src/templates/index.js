import generateClassComponent from './js/class.template'
import generatePureComponent from './js/pure.template'
import generateFunctionalComponent from './js/functional.template'
import generateStyleFile from './css/style.template'

function generateComponentTemplate(type, name) {
  if (type === 'stateless') {
    return generateFunctionalComponent(name)
  }

  if (type === 'class') {
    return generateClassComponent(name)
  }

  if (type === 'pure component') {
    return generatePureComponent(name)
  }

  return null
}

export {
  generateComponentTemplate,
  generateStyleFile,
}
