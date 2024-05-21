import { mount } from '@vue/test-utils'
import Parent from './Parent.vue'
import Button from './Button.vue'

describe('手动触发子组件 button emit事件', () => {
  it('通过 trigger 绑定的事件方法里面去调用 emit', async () => {
    const wrapper = mount(Parent)
    const button = wrapper.find('[data-testid="button"]')
    expect(wrapper.text()).not.toContain('customEmit')
    await button.trigger('click')
    expect(wrapper.text()).toContain('customEmit')
  })

  it('通过组件的 `vm.$emit(method,value)`', async () => {
    const wrapper = mount(Parent)
    const button = wrapper.getComponent(Button)
    expect(wrapper.text()).not.toContain('customEmit')

    await button.vm.$emit('handleClick', 'customEmit') // 手动触发子组件 emit 事件
    console.log(wrapper.html())
    expect(wrapper.text()).toContain('customEmit')
  })
})
