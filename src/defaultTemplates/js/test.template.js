function generateTestTemplate(COMPONENT_NAME) {
  return `import React from 'react'
import { shallow } from 'enzyme'

import ${COMPONENT_NAME} from './${COMPONENT_NAME}'

describe('${COMPONENT_NAME}', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<${COMPONENT_NAME} {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})`
}

export default generateTestTemplate
