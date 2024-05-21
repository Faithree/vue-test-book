import { mount } from '@vue/test-utils'
import StoreApp from './StoreApp.vue'
import { store, key } from './store'

beforeEach(() => {
  store.replaceState({
    count: 0
  })
})
describe('真实测试 vuex ', () => {
  it('测试 store 本身数据是否正常', async () => {
    expect(store.state.count).toBe(0)
    store.commit('increment')
    expect(store.state.count).toBe(1)
    store.commit('increment')
    expect(store.state.count).toBe(2)
  })
  it('测试 store 组件内数据渲染', async () => {
    const wrapper = mount(StoreApp, {
      global: {
        plugins: [[store, key]]
      }
    })
    expect(wrapper.html()).toContain(0)
    await wrapper.find('[data-testid="account-button"]').trigger('click')
    expect(wrapper.html()).toContain(1)
  })
})

