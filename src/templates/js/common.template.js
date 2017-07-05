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

export default generateImports
