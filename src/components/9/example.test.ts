import { mount, shallowMount } from '@vue/test-utils'
import App from './AppMock2.vue'

describe('测试 mock 路由 router-link 正确', () => {
  it('mount', async () => {
    const wrapper = mount(App, {
      global: {
        stubs: ['RouterLink']
      }
    })

    const homeLink = await wrapper.find('[data-testid="Home"]').attributes()
    const aboutLink = await wrapper.find('[data-testid="About"]').attributes()
    expect(homeLink.to).toContain('/')
    expect(aboutLink.to).toContain('/about')
  })
})
