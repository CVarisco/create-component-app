import defaultOptions from '../../config.json'

const COMPONENT_TYPES = {
  pure: 'PureComponent',
  class: 'Component',
}

function generateReactImport(componentType) {
  return `import React${componentType !== 'stateless' ? `, { ${COMPONENT_TYPES[componentType]} }` : ''} from 'react'`
}

function generateComponentMethods(componentMethods) {
  if (componentMethods.length === 0) {
    return null
  }
  let methods = ''
  componentMethods.forEach((method) => {
    methods += `\n\xa0\xa0\xa0\xa0${method}(){}\n`
  })
  return methods
}

function generateImports(
  COMPONENT_NAME,
  componentType,
  { cssExtension, styleFileName } = defaultOptions
) {
  return `${generateReactImport(componentType)}
import PropTypes from 'prop-types'
${cssExtension ? `import styles from './${styleFileName}.${cssExtension}'` : ''}`
}

function generateClassComponent(
  COMPONENT_NAME,
  componentType,
  { cssExtension, componentMethods, styleFileName } = defaultOptions
) {
  return `${generateImports(COMPONENT_NAME, componentType, {
    cssExtension,
    styleFileName,
  })}

class ${COMPONENT_NAME} extends ${COMPONENT_TYPES[componentType]} {
    constructor(props) {
        super(props)
    }
    ${generateComponentMethods(componentMethods)}
    render() {
        return (
            <div className="${COMPONENT_NAME}"></div>
        );
    }
}

${COMPONENT_NAME}.propTypes = {}

${COMPONENT_NAME}.defaultProps = {}

export default ${COMPONENT_NAME}
`
}

export { generateClassComponent, generateImports }
