import _, { sortBy } from 'lodash-es'
/** Used as the size to cover large array optimizations. */
const LARGE_ARRAY_SIZE = 200
describe('uniq', () => {
  // it('去重', () => {
  //   const array = [2, 1, 2]
  //   expect(uniq(array)).toEqual([2, 1])
  // })
  // it('去重 NaN', () => {
  //   expect(uniq([NaN, NaN])).toEqual([NaN])
  // })
  _.each(['uniq', 'uniqBy', 'uniqWith', 'sortedUniq', 'sortedUniqBy'], (methodName) => {
    const func = _[methodName]
    const isSorted = /^sorted/.test(methodName)
    let objects = [{ a: 2 }, { a: 3 }, { a: 1 }, { a: 2 }, { a: 3 }, { a: 1 }]
    if (isSorted) {
      objects = sortBy(objects, 'a')
    } else {
      it(`\`_.${methodName}\` 去重未排序的数组`, () => {
        const array = [2, 1, 2]
        expect(func(array)).toEqual([2, 1])
      })
    }
    it(`\`_.${methodName}\` 可以处理 \`NaN\``, () => {
      expect(func([NaN, NaN])).toEqual([NaN])
    })
    it(`\`_.${methodName}\` 可以处理 object 类型的数据`, () => {
      expect(func(objects)).toEqual(objects)
    })

    it(`\`_.${methodName}\` 处理容量很大的数组`, () => {
      const largeArray: any = []
      const expected = [0, {}, 'a']
      const count = Math.ceil(LARGE_ARRAY_SIZE / expected.length)
      _.each(expected, (value) => {
        _.times(count, () => {
          largeArray.push(value)
        })
      })
      expect(func(largeArray)).toEqual(expected)
    })
  })
})
