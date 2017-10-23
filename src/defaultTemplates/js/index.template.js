function generateReduxConnect(COMPONENT_NAME) {
  return `import ${COMPONENT_NAME} from './${COMPONENT_NAME}'
import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}

const mapStateToProps = (state, ownProps) => {
    return {};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(${COMPONENT_NAME})
`
}

function generateIndexFile(COMPONENT_NAME, connected) {
  if (connected) {
    return generateReduxConnect(COMPONENT_NAME)
  }

  return `import ${COMPONENT_NAME} from './${COMPONENT_NAME}'

export default ${COMPONENT_NAME}
`
}

export default generateIndexFile
