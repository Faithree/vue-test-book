import { flattenDeep } from 'lodash-es'

describe('flatten methods', () => {
  it('一维数组', () => {
    const array = [1, 2, 3]
    expect(flattenDeep(array)).toEqual([1, 2, 3])
  })
  it('二维数组', () => {
    const array = [1, 2, 3, [1, 2, 3]]
    expect(flattenDeep(array)).toEqual([1, 2, 3, 1, 2, 3])
  })

  it('多维度数组', () => {
    const array = [1, [2, [3, [4]], 5]]
    expect(flattenDeep(array)).toEqual([1, 2, 3, 4, 5])
  })

  it('多维空数组', () => {
    const array = [[], [[]], [[], [[[]]]]]
    expect(flattenDeep(array)).toEqual([])
  })

  it('其他类型', () => {
    const expected: [] = []
    const nonArray: any = { 0: 'a' }
    expect(flattenDeep(nonArray)).toEqual(expected)
  })
})
