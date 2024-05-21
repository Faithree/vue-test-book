import { mount } from '@vue/test-utils'
import Parent from '../7/Parent.vue'
import Button from '../7/Button.vue'

describe('测试 provide', () => {
  it('测试顶层组件渲染正确传递值给子组件', async () => {
    const wrapper = mount(Parent)
    expect(wrapper.text()).toContain('this is parent data')
  })

  it('测试子组件能拿到顶层组件传递的值', async () => {
    const wrapper = mount(Button,{
      global: {
        provide: {
          parentValue: 'test provide'
        }
      }
    })
    expect(wrapper.text()).toContain('test provide')
  })
})
