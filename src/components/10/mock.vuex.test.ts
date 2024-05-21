import { mount } from '@vue/test-utils'
import StoreApp from './StoreApp.vue'
const commit = vi.fn()

vi.mock('./store.ts', async () => {
  return {
    ...((await vi.importActual('./store.ts')) as any),
    useStore: () => ({
      state: {
        count: 0
      },
      commit: commit
    })
  }
})

describe('真实测试 vuex ', () => {
  it('测试 store 组件内数据渲染', async () => {
    const wrapper = mount(StoreApp)
    console.log('wrapper.html()', wrapper.html())
    expect(wrapper.html()).toContain(0)
    await wrapper.find('[data-testid="account-button"]').trigger('click')
    expect(commit).toHaveBeenCalled()
    expect(commit).toHaveBeenCalledWith('increment')
  })
})
