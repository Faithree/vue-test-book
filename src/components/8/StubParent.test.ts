import { mount } from '@vue/test-utils'
import StubParent from './StubParent.vue'

describe('set Mock', () => {
  it('stub 基本用法', async () => {
    const wrapper = mount(StubParent, {
      global: {
        stubs: {
          StubChild: true
          // A组件名:true
          // B组件名:true
        }
      }
    })

    // 直接渲染
    // <h1>i an parent component</h1>
    // <h1>i an child component</h1>
    expect(wrapper.html()).toMatchInlineSnapshot(`"<h1>i an parent component</h1>
<stub-child-stub></stub-child-stub>"`)
  })
  it('mount shallow 模式', async () => {
    const wrapper = mount(StubParent, {
      shallow: true
    })
    // 直接渲染
    expect(wrapper.html()).toMatchInlineSnapshot(`"<h1>i an parent component</h1>
<stub-child-stub></stub-child-stub>"`)
  })
  it('自定义 stub children', async () => {
    const wrapper = mount(StubParent, {
      global: {
        stubs: {
          StubChild: {
            template: '<span />'
          }
        }
      }
    })
    // <h1>i an parent component</h1>
    // <span></span>
    expect(wrapper.html()).toMatchInlineSnapshot(`"<h1>i an parent component</h1>
<span></span>"`)
  })
})
