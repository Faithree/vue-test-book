import { flushPromises, mount } from '@vue/test-utils'
import App from './App.vue'
import { routes } from '@/router'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})
beforeEach(async () => {
  router.push('/')
  await router.isReady()
})
describe('测试真实路由', () => {
  it('mount', async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router]
      }
    })
    const push = vi.spyOn(router, 'push')
    expect(wrapper.html()).toContain('This is an Home page')
    await wrapper.find('[data-testid="About"]').trigger('click')
    await flushPromises()
    expect(wrapper.html()).toContain('This is an About page') // 1.测试组件是否被渲染
    // push 方法被执行
    expect(push).toHaveBeenCalledTimes(1)
    expect(push).toHaveBeenCalledWith('/about?a=10') // 2.测试路径和参数
    expect(wrapper.html()).toContain('"a": "10"')
  })
})
