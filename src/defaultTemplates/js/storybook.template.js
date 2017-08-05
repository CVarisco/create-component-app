function generateStorybookTemplate(COMPONENT_NAME) {
  return `import React from 'react'
import { storiesOf } from '@storybook/react'

import ${COMPONENT_NAME} from './${COMPONENT_NAME}'

storiesOf('${COMPONENT_NAME}', module).add('Example 1', () =>
  <${COMPONENT_NAME} />
)`
}

export default generateStorybookTemplate
