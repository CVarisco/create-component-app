import template from '../common.template'

describe('Common Template', () => {
  it('should a string', () => {
    expect(typeof template()).toBe('string')
  })

  it('should create imports with react and proptypes', () => {
    expect(template('Foo')).toContain(
      `import React from 'react'
import PropTypes from 'prop-types'`
    )
  })

  it('should add styles import when cssExtension is passed', () => {
    const cssExtension = 'css'
    expect(template('Foo', { cssExtension })).toContain(
      `import styles from './Foo.${cssExtension}`
    )
  })
})
