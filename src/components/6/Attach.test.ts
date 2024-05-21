import { mount } from '@vue/test-utils'
import Attach from './Attach.vue'
import { nextTick } from 'vue'

describe('attach', () => {
  it.skip('错误示范 attach render error', async () => {
    const wrapper = mount(Attach)
    await nextTick()
    expect(wrapper.text()).toContain('111')
  })
  it('attach success render', async () => {
    // const div = document.createElement('div')
    // document.body.appendChild(div)
    const wrapper = mount(Attach, {
      attachTo: document.body
      // attachTo: div // 任意一个 dom
    })
    await nextTick()
    console.log('wrapper', wrapper.html())
    expect(wrapper.text()).toContain('111')
  })
})
