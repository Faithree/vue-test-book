import { mount } from '@vue/test-utils'
import Input from './Input.vue'

describe('keydown input', () => {
  it('mount', async () => {
    const wrapper = mount(Input)
    const button = wrapper.find('[data-testid="input"]')
    expect(wrapper.text()).not.toContain('vitest')
    await button.trigger('keydown')
    console.log('wrapper.text()',wrapper.html())
    expect(wrapper.text()).toContain('vitest')
  })
})
