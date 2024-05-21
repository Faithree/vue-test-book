import { mount } from '@vue/test-utils'
import App from './AppMock.vue'
const push = vi.fn()

vi.mock('vue-router', async () => {
  return {
    ...((await vi.importActual('vue-router')) as any),
    useRoute: vi.fn(),
    useRouter: vi.fn(() => ({
      push: push
    }))
  }
})
describe('测试 mock 路由 命令式编程', () => {
  it('mount', async () => {
    const wrapper = mount(App)
    await wrapper.find('[data-testid="about-button"]').trigger('click')
    console.log('wrapper', wrapper)
    expect(push).toHaveBeenCalledTimes(1)
    expect(push).toHaveBeenCalledWith('/about')
  })
})
