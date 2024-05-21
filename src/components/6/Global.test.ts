import { mount } from '@vue/test-utils'
import Global from './Global.vue'
import GlobalComponent from './GlobalComponent.vue'

describe('global component', () => {
  it.skip('错误示范 mount error component', async () => {
    const wrapper = mount(Global)
    console.log(wrapper.html())
    expect(wrapper.text()).toContain('My Global Component')
  })
  it('mount success component', async () => {
    const wrapper = mount(Global, {
      global: {
        components: {
          GlobalComponent
        }
      }
    })
    expect(wrapper.text()).toContain('My Global Component')
  })
})
