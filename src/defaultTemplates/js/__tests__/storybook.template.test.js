import template from '../storybook.template'

describe('Storybook Template', () => {
  it('should a string', () => {
    expect(typeof template()).toBe('string')
  })

  it('should import component for story book', () => {
    expect(template('Foo')).toContain("import Foo from './Foo'")
  })

  it('should crate story with component name', () => {
    expect(template('Foo')).toContain("storiesOf('Foo', module)")
  })
})
