function generateFunctionalComponent(COMPONENT_NAME, { cssExtension }) {
  return `import React from 'react'
import PropTypes from 'prop-types'
${cssExtension ? `import styles from './${COMPONENT_NAME}.${cssExtension}'` : ''}

const ${COMPONENT_NAME} = ({}) => (
  <div className="${COMPONENT_NAME}"></div>
);

${COMPONENT_NAME}.propTypes = {}

${COMPONENT_NAME}.defaultProps = {}

export default ${COMPONENT_NAME}
`
}

export default generateFunctionalComponent
