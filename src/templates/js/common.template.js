import defaultOptions from './config.json'

function generateImports(COMPONENT_NAME, { cssExtension } = defaultOptions) {
  return `import React from 'react'
import PropTypes from 'prop-types'
${cssExtension ? `import styles from './${COMPONENT_NAME}.${cssExtension}'` : ''}`
}

export default generateImports
