import { floor, ceil } from '../util'

describe('测试 util ', () => {
  it('test floor ', () => {
    expect(floor(-1.7)).toBe(-2)
    expect(floor(0)).toBe(0)
    expect(floor(3.25)).toBe(3)
  })
  it('test ceil ', () => {
    expect(ceil(-1.7)).toBe(-1)
    expect(ceil(0)).toBe(0)
    expect(ceil(3.25)).toBe(4)
  })
  it.todo('test skip ', () => {
    expect(floor(3.25)).toBe(100)
  })
  it.skip('test todo ', () => {
    expect(ceil(3.25)).toBe(100)
  })
  it.todo('不确定没时间写的', () => {})
})
