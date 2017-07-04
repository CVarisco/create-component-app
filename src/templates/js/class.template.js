import generateImports from './common.template'
import defaultOptions from './config.json'

function generateClassComponent(COMPONENT_NAME, { cssExtension } = defaultOptions) {
  return `${generateImports(COMPONENT_NAME, { cssExtension })}

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
