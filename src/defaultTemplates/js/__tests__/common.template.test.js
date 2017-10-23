import { generateImports, generateClassComponent } from '../common.template'

const options = {
  cssExtension: '',
  styleFileName: 'Foo',
}

describe('Common Template', () => {
  it('should a string', () => {
    expect(typeof generateImports('Foo', 'stateless', options)).toBe('string')
  })

  it('should import proptypes', () => {
    expect(generateImports('Foo', 'stateless', options)).toContain(
      "import PropTypes from 'prop-types'"
    )
  })

  it('should import react when stateless', () => {
    expect(generateImports('Foo', 'stateless', options)).toContain(
      "import React from 'react'"
    )
  })

  it('should import react when class', () => {
    expect(generateImports('Foo', 'class', options)).toContain(
      "import React, { Component } from 'react'"
    )
  })

  it('should import react when pure', () => {
    expect(generateImports('Foo', 'pure', options)).toContain(
      "import React, { PureComponent } from 'react'"
    )
  })

  it('should import component methods', () => {
    const componentMethods = ['shouldComponentUpdate']
    expect(
      generateClassComponent('Foo', 'pure', { componentMethods })
    ).toContain('shouldComponentUpdate(){}')
  })

  it('should add styles import with styleFileName and cssExtension', () => {
    const cssExtension = 'css'
    const styleFileName = 'styles'
    expect(
      generateImports('Foo', 'stateless', { cssExtension, styleFileName })
    ).toContain(`import styles from './${styleFileName}.${cssExtension}`)
  })
})
