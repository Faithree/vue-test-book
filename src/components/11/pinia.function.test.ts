import { setActivePinia, createPinia } from 'pinia'
import { useCounterStore } from './store'

let counter: any
beforeEach(() => {
  setActivePinia(createPinia())
  counter = useCounterStore()
})

describe('真实测试 pinia 测试函数', () => {
  it('should count 0', () => {
    expect(counter.count).toBe(0)
    expect(counter.doubleCount).toBe(0)
  })
  it('should increment count', () => {
    counter.increment()
    expect(counter.count).toBe(1)
    expect(counter.doubleCount).toBe(2)
  })

  it('should decrement count', () => {
    counter.decrement()
    expect(counter.count).toBe(-1)
    expect(counter.doubleCount).toBe(-2)
  })
  it('测试 $patch', async () => {
    counter.$patch({
      count: 100
    })
    expect(counter.count).toBe(100)
  })
})
