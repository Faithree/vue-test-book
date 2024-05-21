import { clone, cloneDeep } from 'lodash-es'

describe('clone', () => {
  it('clone 浅复制', () => {
    const array = [{ a: 0 }, { b: 1 }]
    const actual = clone(array)

    expect(actual).toStrictEqual(array)
    expect(actual !== array && actual[0] === array[0])
  })

  it('cloneDeep 深复制', () => {
    const array = [{ a: 0 }, { b: 1 }];
    const actual = cloneDeep(array);

    expect(actual).toEqual(array);
    expect(actual !== array && actual[0] !== array[0])
});
  it('cloneDeep 可以复制一个回环的对象', () => {
    const object = {
      foo: { b: { c: { d: {} } } },
      bar: {}
    }

    object.foo.b.c.d = object
    object.bar.b = object.foo.b

    const actual = cloneDeep(object)
    expect(actual.bar.b === actual.foo.b && actual === actual.foo.b.c.d && actual !== object).toBe(
      true
    )
  })
})
