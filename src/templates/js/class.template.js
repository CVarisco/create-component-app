function generateClassComponent(COMPONENT_NAME, { cssExtension }) {
  return `import React, { Component } from 'react'
import PropTypes from 'prop-types'
${cssExtension ? `import styles from './${COMPONENT_NAME}.${cssExtension}'` : ''}

class ${COMPONENT_NAME} extends Component {
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

export default generateClassComponent
