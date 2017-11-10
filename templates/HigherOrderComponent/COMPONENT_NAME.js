import React, { Component } from 'react'

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

function COMPONENT_NAME(WrappedComponent) {
  class Wrapper extends Component {
    constructor(props) {
      super(props)
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
  Wrapper.displayName = `COMPONENT_NAME(${getDisplayName(WrappedComponent)})`
  return Wrapper
}

export default COMPONENT_NAME
