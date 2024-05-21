import { mount } from '@vue/test-utils'
import Directive from './Directive.vue'
import { vTooltip } from './directive'

describe('tooltip', () => {
  it('tooltip', async () => {
    const wrapper = mount(Directive, {
      global: {
        directives: {
          tooltip: vTooltip
        }
      }
    })
    const tooltip = wrapper.find('[data-testid="tooltip"]')
    expect(tooltip.html()).toContain('with-tooltip')
  })
})
