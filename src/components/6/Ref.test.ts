import { shallowMount } from '@vue/test-utils'
import Ref from './Ref.vue'

describe('Ref', () => {
  it('自动聚焦的输入框', () => {
    const wrapper = shallowMount(Ref, {
      attachTo: document.body
    })
    const input = wrapper.find<HTMLInputElement>({
      ref: 'input'
    })
    console.log('document.activeElement', document.activeElement)
    expect(document.activeElement).toBe(input.element)
  })
  it.todo('sends a beacon with page name and visibility-change event to the appropriate endpoint')

})
