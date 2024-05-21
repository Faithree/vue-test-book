import { setActivePinia, createPinia } from 'pinia'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useCounterStore } from './store'
import PiniaApp from './PiniaApp.vue'
import { myPlugin } from './plugin'

let counter: any
beforeEach(() => {
  setActivePinia(createPinia())
  counter = useCounterStore()
})
describe('真实测试 pinia 测试组件', async () => {
  it('测试 initialState', async () => {
    const wrapper = mount(PiniaApp, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              counter: {
                count: 30
              }
            }
          })
        ]
      }
    })
    console.log('wrapper.html()', wrapper.html())
    expect(wrapper.html()).toContain(30)
  })
  it('测试 action', async () => {
    const wrapper = mount(PiniaApp, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              counter: {
                count: 30
              }
            },
            stubActions: false
          })
        ]
      }
    })
    expect(wrapper.html()).toContain(30)
    await wrapper.find('[data-testid="account-button"]').trigger('click')
    expect(wrapper.html()).toContain(31)
  })
  it('测试 getter', async () => {
    const wrapper = mount(PiniaApp, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              counter: {
                count: 30
              }
            },
            stubActions: false
          })
        ]
      }
    })
    expect(wrapper.html()).toContain(30)
    await wrapper.find('[data-testid="account-button"]').trigger('click')
    expect(wrapper.html()).toContain(31)
    expect(wrapper.html()).toContain(62)
  })

  it('测试 plugin ', async () => {
    const wrapper = mount(PiniaApp, {
      global: {
        plugins: [
          createTestingPinia({
            plugins: [myPlugin]
          })
        ]
      }
    })
    expect(wrapper.html()).contain('this is log')
  })
})
