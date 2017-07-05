import defaultOptions from './config.json'

const COMPONENT_TYPES = {
  pure: 'PureComponent',
  class: 'Component',
}

function generateReactImport(componentType) {
  return `import React${componentType !== 'stateless' ? `, { ${COMPONENT_TYPES[componentType]} }` : ''} from 'react'`
}

function generateImports(COMPONENT_NAME, componentType, { cssExtension } = defaultOptions) {
  return `${generateReactImport(componentType)}
import PropTypes from 'prop-types'
${cssExtension ? `import styles from './${COMPONENT_NAME}.${cssExtension}'` : ''}`
}

export function generateClassComponent(COMPONENT_NAME, componentType, { cssExtension } = defaultOptions) {
  return `${generateImports(COMPONENT_NAME, componentType, { cssExtension })}

class ${COMPONENT_NAME} extends ${COMPONENT_TYPES[componentType]} {
    constructor(props) {
        super(props)
    }
    
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

export default generateImports
