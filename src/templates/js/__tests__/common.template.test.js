import template from '../common.template'

describe('Common Template', () => {
  it('should a string', () => {
    expect(typeof template()).toBe('string')
  })

  it('should import proptypes', () => {
    expect(template('Foo', 'stateless')).toContain(
      `import PropTypes from 'prop-types'`
    )
  })
  
  it('should import react when stateless', () => {
    expect(template('Foo', 'stateless')).toContain(
      `import React from 'react'`
    )
  })

  it('should add styles import when cssExtension is passed', () => {
    const cssExtension = 'css'
    expect(template('Foo', 'stateless', { cssExtension })).toContain(
      `import styles from './Foo.${cssExtension}`
    )
  })
})
