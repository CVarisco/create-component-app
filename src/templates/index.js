import generateClassComponent from './js/class.template'
import generatePureComponent from './js/pure.template'
import generateFunctionalComponent from './js/functional.template'

function generateTemplate(type, name) {
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

export default generateTemplate
