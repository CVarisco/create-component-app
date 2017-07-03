import template from '../pure.template'

describe('Pure Template', () => {
  it('should a string', () => {
    expect(typeof template()).toBe('string')
  })

  it('should have class with component name', () => {
    expect(template('Foo')).toContain('class Foo extends PureComponent')
  })

  it('should extend component with propTypes', () => {
    expect(template('Foo')).toContain('Foo.propTypes')
  })

  it('should extend component with defaultProps', () => {
    expect(template('Foo')).toContain('Foo.defaultProps')
  })

  it('should export component', () => {
    expect(template('Foo')).toContain('export default Foo')
  })
})
