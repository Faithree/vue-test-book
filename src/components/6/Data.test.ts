import { mount } from '@vue/test-utils'
import Data from './Data.vue'
import { nextTick } from 'vue'

describe('set Data', () => {
  it('first render', async () => {
    // 会覆盖掉组件内的 str
    const wrapper = mount(Data, {
      setup() {
        return {
          str: 'first render'
        }
      }
    })
    expect(wrapper.text()).toContain('first render')
  })
  it('mount first render', () => {
    // 会覆盖掉组件内的 str
    const wrapper = mount(Data, {})
    expect(wrapper.text()).toContain('first render')
  })
  it('update multiple render', async () => {
    const wrapper = mount(Data)
    expect(wrapper.text()).toContain('first render')

    await nextTick()
    expect(wrapper.text()).toContain('second render')
    wrapper.vm.str = 'third render'

    await nextTick()
    expect(wrapper.vm.str).toBe('third render') // data 有没有值
    expect(wrapper.text()).toContain('third render') // data 是否正确渲染在页面上
  })
})
