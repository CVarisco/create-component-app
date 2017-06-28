import React, { Component } from 'react'
import PropTypes from 'prop-types'

class COMPONENT_NAME extends Component {
  constructor(props) {
      super(props)
  }

  componentWillMount() {
    this.props.bootstrap()
  }

  render() {
      return (
          <div className="COMPONENT_NAME"></div>
      );
  }
}

COMPONENT_NAME.propTypes = {}

COMPONENT_NAME.defaultProps = {}

export default COMPONENT_NAME
