import template from '../style.template'

describe('Class Template', () => {
  it('should a string', () => {
    expect(typeof template()).toBe('string')
  })

  it('should have class with component name', () => {
    expect(template('Foo')).toContain('.Foo{}')
  })
})
