import template from '../class.template'

const options = {
  cssExtension: '',
  styleFileName: 'Foo',
}

describe('Class Template', () => {
  it('should a string', () => {
    expect(typeof template('Foo', 'stateless', options)).toBe('string')
  })

  it('should have class with component name', () => {
    expect(template('Foo', 'class', options)).toContain(
      'class Foo extends Component'
    )
  })

  it('should extend component with propTypes', () => {
    expect(template('Foo', 'class', options)).toContain('Foo.propTypes')
  })

  it('should extend component with defaultProps', () => {
    expect(template('Foo', 'class', options)).toContain('Foo.defaultProps')
  })

  it('should export component', () => {
    expect(template('Foo', 'class', options)).toContain('export default Foo')
  })
})
