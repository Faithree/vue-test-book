import { mount } from '@vue/test-utils'
import Button from './Button.vue'

describe('click button', () => {
  it('mount', async () => {
    const wrapper = mount(Button)
    const button = wrapper.find('[data-testid="button"]')
    expect(wrapper.text()).not.toContain('vitest')
    await button.trigger('click')
    console.log('wrapper.text()',wrapper.html())
    expect(wrapper.text()).toContain('vitest')
  })
})
