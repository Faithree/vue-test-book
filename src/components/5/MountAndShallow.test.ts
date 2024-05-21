import { mount, shallowMount } from '@vue/test-utils'
import MountAndShallow from './MountAndShallow.vue'

describe('mount 和 shallowMount 区别', () => {
  it('mount', () => {
    const wrapper = mount(MountAndShallow, { props: { msg: 'Hello Vitest' } })
    console.log('wrapper.html()', wrapper.html())
  })
  it('shallow mount', () => {
    const wrapper = shallowMount(MountAndShallow, { props: { msg: 'Hello Vitest' } })
    console.log('wrapper.html()', wrapper.html())
  })
})
