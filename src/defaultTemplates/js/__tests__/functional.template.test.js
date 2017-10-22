import template from '../functional.template'

describe('Functional Template', () => {
  it('should a string', () => {
    expect(typeof template()).toBe('string')
  })

  it('should create const with component name', () => {
    expect(template('Foo')).toContain('const Foo = ({}) =>')
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
