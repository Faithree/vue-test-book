import { mount } from '@vue/test-utils'
import Props from './Props.vue'

describe('set Props', () => {
  it('mount props', async () => {
    const wrapper = mount(Props, {
      props: {
        msg: 'props msg'
      }
    })
    expect(wrapper.text()).toContain('props msg')
  })
  it('update props', async () => {
    const wrapper = mount(Props, {
      props: {
        msg: 'props msg'
      }
    })
    expect(wrapper.text()).toContain('props msg')
    await wrapper.setProps({
      msg: 'second render'
    })
    expect(wrapper.props('msg')).toBe('second render') // props 有没有值
    expect(wrapper.text()).toContain('second render') // props 是否正确渲染在页面上
  })
})
