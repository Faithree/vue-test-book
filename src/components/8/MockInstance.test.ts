import { mount } from '@vue/test-utils'
import MockInstance from './MockInstance.vue'

describe('mock instance', () => {
  it.skip('错误示范 mock 组件template上用到的全局属性和方法', async () => {
    // 创建 mocks 对象
    const wrapper = mount(MockInstance)
    console.log(wrapper.html())
  })
  it('mock 组件template上用到的全局属性和方法', async () => {
    // 创建 mocks 对象
    const mockMethod = vi.fn().mockReturnValue('mocked $myGlobalMethod')
    const wrapper = mount(MockInstance, {
      global: {
        mocks: {
          // 使用 mock 函数而不是实际的 $myGlobalMethod
          $myGlobalMethod: mockMethod,
          $myGlobalParams: 'mock $myGlobalParams'
        }
      }
    })
    // 现在 $myGlobalMethod 已经被 mock 了，我们可以断言它被调用
    expect(mockMethod).toHaveBeenCalled()
    expect(mockMethod).toHaveBeenCalledWith('member-info')
    // 检查渲染后的 HTML 是否包含了 mock 方法的返回值
    expect(wrapper.html()).toContain('mocked $myGlobalMethod')
  })
  it('mock 组件template上用到的全局属性和方法，也可以是真实方法', async () => {
    const $t = ()=>{
      return '我是 i18n ，可能会渲染中文或者英文'
    }
    const wrapper = mount(MockInstance, {
      global: {
        mocks: {
          // 使用 mock 函数而不是实际的 $myGlobalMethod
          $myGlobalMethod: $t,
          $myGlobalParams: 'mock $myGlobalParams'
        }
      }
    })
    expect(wrapper.html()).toContain('我是 i18n ，可能会渲染中文或者英文')
    expect(wrapper.html()).toContain('mock $myGlobalParams')
  })
})
