import { mount } from '@vue/test-utils'
import Form from './Form.vue'

describe('Form', () => {
  it('input', async () => {
    const wrapper = mount(Form)
    const input = wrapper.find('[data-testid="input"]')
    await input.setValue('123')
    expect(wrapper.text()).toContain('123')
  })
  it('radio', async () => {
    const wrapper = mount(Form)
    expect(wrapper.text()).toContain('1')
    const input = wrapper.find('[data-testid="radio-2"]')
    await input.setValue(true)
    expect(wrapper.text()).toContain('2')
  })
  it('select', async () => {
    const wrapper = mount(Form)
    const select = wrapper.find('[data-testid="select-country"]')
    expect(wrapper.text()).toContain('jpy')
    await select.setValue(['uk'])
    expect(wrapper.text()).toContain('uk')
  })
})
