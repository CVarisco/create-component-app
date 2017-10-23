import template from '../test.template'

describe('Test Template', () => {
  it('should a string', () => {
    expect(typeof template()).toBe('string')
  })

  it('should import component for story book', () => {
    expect(template('Foo')).toContain("import Foo from './Foo'")
  })

  it('should crate describe block with component name', () => {
    expect(template('Foo')).toContain("describe('Foo', () =>")
  })

  it('should render component for test in beforeEach block', () => {
    expect(template('Foo')).toContain('shallow(<Foo {...props} />)')
  })
})
