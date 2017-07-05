import template from '../class.template'

describe('Class Template', () => {
  it('should a string', () => {
    expect(typeof template()).toBe('string')
  })

  it('should have class with component name', () => {
    expect(template('Foo', 'class')).toContain('class Foo extends Component')
  })

  it('should extend component with propTypes', () => {
    expect(template('Foo', 'class')).toContain('Foo.propTypes')
  })

  it('should extend component with defaultProps', () => {
    expect(template('Foo', 'class')).toContain('Foo.defaultProps')
  })

  it('should export component', () => {
    expect(template('Foo', 'class')).toContain('export default Foo')
  })
})
