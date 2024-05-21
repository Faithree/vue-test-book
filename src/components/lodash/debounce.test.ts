import { debounce } from 'lodash-es'

const identity = function <T>(value: T) {
  return value
}
describe.skip('debounce', () => {
  it('测试延迟', () => {
    let callCount = 0

    const debounced = debounce((value) => {
      ++callCount
      return value
    }, 32)

    const results = [debounced('a')]
    expect(results).toEqual([undefined])
    expect(callCount).toBe(0)

    setTimeout(() => {
      expect(callCount).toBe(1)
    }, 32)
  })
  it('第三个参数是空对象也能运行', () => {
    let callCount = 0
    const debounced = debounce(
      () => {
        callCount++
      },
      32,
      {}
    )
    debounced()
    expect(callCount).toBe(0)

    setTimeout(() => {
      expect(callCount).toBe(1)
    }, 64)
  })
  it('多次触发 debounced 函数，', () => {
    let callCount = 0

    const debounced = debounce((value) => {
      ++callCount
      return value
    }, 64)
    debounced('a')
    expect(callCount).toBe(0)
    setTimeout(() => {
      expect(debounced('b')).toBe(undefined)
      expect(callCount).toBe(0)
    }, 32)

    setTimeout(() => {
      expect(debounced('c')).toBe(undefined)
      expect(callCount).toBe(0)
    }, 64)

    setTimeout(() => {
      expect(debounced('d')).toBe('c')
      expect(callCount).toBe(1)
    }, 128)
  })

  it('上一次的 debounced 调用返回最后一次的 func 返回结果', () => {
    const debounced = debounce(identity, 32)
    debounced('a')

    setTimeout(() => {
      expect(debounced('b')).toBe('a')
    }, 64)

    setTimeout(() => {
      expect(debounced('c')).toBe('b')
    }, 128)
  })

  it('即使等待时间是 0 的时候，不应该立即执行', () => {
    let callCount = 0
    const debounced = debounce(() => {
      ++callCount
    }, 0)

    debounced()
    debounced()
    expect(callCount).toBe(0)

    setTimeout(() => {
      expect(callCount).toBe(1)
    }, 5)
  })
  it('支持 leading 参数', () => {
    const callCounts = [0, 0]

    const withLeading = debounce(
      () => {
        callCounts[0]++
      },
      32,
      { leading: true }
    )

    const withLeadingAndTrailing = debounce(
      () => {
        callCounts[1]++
      },
      32,
      { leading: true }
    )
    withLeading()
    expect(callCounts[0]).toBe(1)
    withLeadingAndTrailing()
    withLeadingAndTrailing()
    expect(callCounts[1]).toBe(1)

    setTimeout(() => {
      expect(callCounts).toEqual([1, 2])
      withLeading()
      expect(callCounts[0]).toBe(2)
    }, 64)
  })
})
