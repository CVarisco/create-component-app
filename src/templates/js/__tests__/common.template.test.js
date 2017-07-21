import { generateImports, generateClassComponent } from '../common.template'

describe('Common Template', () => {
  it('should a string', () => {
    expect(typeof generateImports()).toBe('string')
  })

  it('should import proptypes', () => {
    expect(generateImports('Foo', 'stateless')).toContain(
      "import PropTypes from 'prop-types'"
    )
  })

  it('should import react when stateless', () => {
    expect(generateImports('Foo', 'stateless')).toContain(
      "import React from 'react'"
    )
  })

  it('should import react when class', () => {
    expect(generateImports('Foo', 'class')).toContain(
      "import React, { Component } from 'react'"
    )
  })

  it('should import react when pure', () => {
    expect(generateImports('Foo', 'pure')).toContain(
      "import React, { PureComponent } from 'react'"
    )
  })

  it('should import component methods', () => {
    const componentMethods = ['shouldComponentUpdate']
    expect(
      generateClassComponent('Foo', 'pure', { componentMethods })
    ).toContain('shouldComponentUpdate(){}')
  })

  it('should add styles import when cssExtension is passed', () => {
    const cssExtension = 'css'
    expect(generateImports('Foo', 'stateless', { cssExtension })).toContain(
      `import styles from './Foo.${cssExtension}`
    )
  })
})
