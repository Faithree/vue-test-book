import { setActivePinia, createPinia } from 'pinia'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useCounterStore } from './store'
import PiniaApp from './PiniaApp.vue'

let counter: any
let wrapper: any
beforeEach(() => {
  setActivePinia(createPinia())
  wrapper = mount(PiniaApp, {
    global: {
      plugins: [
        createTestingPinia({
          initialState: {
            counter: {
              count: 30
            }
          },
          stubPatch: true
        })
      ]
    }
  })
  counter = useCounterStore()
})
describe('mock 测试 pinia 组件', async () => {
  it('测试 mock action', async () => {
    // console.log('counter.increment', counter.increment) // 默认就是一个 mock action
    counter.increment()
    expect(counter.increment).toHaveBeenCalledTimes(1)
  })
  it('结合组件测试 mock action', async () => {
    expect(wrapper.html()).toContain(30)
    await wrapper.find('[data-testid="account-button"]').trigger('click')
    expect(counter.increment).toHaveBeenCalledTimes(1)
  })
  it('结合组件测试 mock getter', async () => {
    counter.doubleCount = 6
    console.log('counter.count', counter.doubleCount)
  })
  it('结合组件测试 mock $patch', async () => {
    counter.$patch({
      count: 100
    })
    // console.log('counter.$patch', counter.$patch) //  mock $patch
    expect(counter.$patch).toHaveBeenCalledTimes(1)
    expect(counter.$patch).toHaveBeenCalledWith({
      count: 100
    })
  })
})
