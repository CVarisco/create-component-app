import defaultOptions from '../../config.json'

const COMPONENT_TYPES = {
  pure: 'PureComponent',
  class: 'Component',
}

function generateReactImport(componentType) {
  return `import React${
    componentType !== 'stateless' ? `, { ${COMPONENT_TYPES[componentType]} }` : ''
  } from 'react'`
}

/**
 * Create the concatenation of methods string that will be injected into class and pure components
 * @param {Array} componentMethods
 * @return {String} methods
 */
function generateComponentMethods(componentMethods) {
  if (componentMethods.length === 0) {
    return ''
  }

  return componentMethods.reduce((acc, method) => {
    const methods = `${acc}\n\xa0\xa0\xa0\xa0${method}(){}\n`

    return methods
  }, '')
}

function generateImports(
  COMPONENT_NAME,
  componentType,
  { cssExtension = defaultOptions.cssExtension, styleFileName }
) {
  return `${generateReactImport(componentType)}
import PropTypes from 'prop-types'
${cssExtension ? `import styles from './${styleFileName}.${cssExtension}'` : ''}`
}

function generateContentComponent(componentMethods, COMPONENT_NAME) {
  if (componentMethods.length) {
    return generateComponentMethods(componentMethods)
  }

  return `constructor(props) {
      super(props)
  }

  render() {
      return (
          <div className="${COMPONENT_NAME}"></div>
      );
  }
`
}

function generateClassComponent(
  COMPONENT_NAME,
  componentType,
  {
    cssExtension = defaultOptions.cssExtension,
    componentMethods = defaultOptions.componentMethods,
    styleFileName,
  }
) {
  return `${generateImports(COMPONENT_NAME, componentType, {
    cssExtension,
    styleFileName,
  })}

class ${COMPONENT_NAME} extends ${COMPONENT_TYPES[componentType]} {
  ${generateContentComponent(componentMethods, COMPONENT_NAME)}
}

${COMPONENT_NAME}.propTypes = {}

${COMPONENT_NAME}.defaultProps = {}

export default ${COMPONENT_NAME}
`
}

export { generateClassComponent, generateImports }
