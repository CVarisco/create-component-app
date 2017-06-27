// @flow

function generateClassComponent(COMPONENT_NAME: string): string {
  return `
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ${COMPONENT_NAME} extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div></div>
        );
    }
}

${COMPONENT_NAME}.propTypes = {};

${COMPONENT_NAME}.defaultProps = {};

export default ${COMPONENT_NAME};
`
}

export default generateClassComponent
