import { addPrefix, joinClass, mapClass } from '../classes'

describe('check class functions', () => {
  it('check join class function', () => {
    expect(joinClass(['class1', 'class2'])).toBe('class1 class2')
    expect(joinClass()).toBe('')
  })
  it('check add prefix function with string', () => {
    expect(addPrefix('prefix', 'class1')).toBe('prefix-class1')
    expect(addPrefix('prefix')).toBe('')
  })
  it('check add prefix function with array of string', () => {
    expect(addPrefix('prefix', ['class1', 'class2'])).toBe(
      'prefix-class1 prefix-class2'
    )
  })
  it('check map class function', () => {
    expect(
      mapClass('prefix', {
        class1: true,
        class2: false
      })
    ).toBe('prefix-class1')

    expect(
      mapClass(
        'prefix',
        {
          class1: true,
          class2: false,
          class3: true
        },
        'static-class'
      )
    ).toBe('prefix-class1 prefix-class3 static-class')

    expect(
      mapClass('prefix', {
        class1: true,
        class2: false
      })
    ).toBe('prefix-class1')

    expect(mapClass('prefix', 'class1')).toBe('prefix-class1')
    expect(mapClass(null, 'class1')).toBe('class1')
  })
})
