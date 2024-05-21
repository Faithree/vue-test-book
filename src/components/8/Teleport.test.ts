import { mount } from '@vue/test-utils'
import Teleport from '../6/MyTeleport.vue'
import Signup from '../6/Signup.vue'

beforeEach(() => {
  const el = document.createElement('div')
  el.id = 'modal'
  document.body.appendChild(el)
})

afterEach(() => {
  document.body.outerHTML = ''
})
describe('mock teleport', () => {
  test('mock teleport 展示组件内容', async () => {
    const wrapper = mount(Teleport, {
      global: {
        stubs: {
          teleport: true
        }
      }
    })
    expect(wrapper.html()).toContain('下面渲染子组件')
    expect(wrapper.html()).toContain('form')
  })

  test('mock teleport 操作 signup 组件', async () => {
    const wrapper = mount(Teleport, {
      global: {
        stubs: {
          teleport: true
        }
      }
    })
    const signup = wrapper.getComponent(Signup)
    expect(wrapper.html()).toContain('下面渲染子组件')
    expect(wrapper.html()).toContain('form')
    await signup.get('input').setValue('valid_username')
    await signup.get('form').trigger('submit.prevent')
    expect(signup.emitted().signup[0]).toEqual(['valid_username'])
  })
})
