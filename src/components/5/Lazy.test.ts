import { mount } from '@vue/test-utils'
import Lazy from './Lazy.vue'

describe('Lazy', () => {
  it('renders Lazy component', async () => {
    const wrapper = mount(Lazy)
    expect(wrapper.text()).not.toContain('pdf')
    await new Promise((resolve) => setTimeout(resolve, 1000))
    expect(wrapper.text()).toContain('pdf')
  })
})
