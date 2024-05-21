import { mount } from '@vue/test-utils'
import Emitted from './Emitted.vue'

describe('set Data', () => {
  it('mount', async () => {
    const wrapper = mount(Emitted)
    const button = wrapper.find('[data-testid="button"]')
    await button.trigger('click')
    const emits = wrapper.emitted()
    console.log('emits', emits)
    // emits {
    //   'update:pageSize': [ [ 'customer', 10 ] ],
    //   'update:pageIndex': [ [ 1 ] ],
    //   change: [ [ 'customer' ] ],
    //   click: [ [ [MouseEvent] ] ]
    // }
    expect(emits).toHaveProperty('update:pageIndex')
    expect(emits).toHaveProperty('update:pageSize')
    expect(emits).toHaveProperty('change')
  })
})
