import { mount } from '@vue/test-utils'
import Directive from '../6/Directive.vue'
import { vTooltip } from '../6/directive'

describe('tooltip', () => {
  it('mock tooltip', async () => {
    const wrapper = mount(Directive, {
      global: {
        directives: {
          tooltip: vTooltip
        },
        stubs: {
          vTooltip: true
        }
      }
    })
    const tooltip = wrapper.find('[data-testid="tooltip"]')
    expect(tooltip.html()).toMatchInlineSnapshot(`"<div data-testid="tooltip" class="with-tooltip">show tooltip</div>"`)
  })
})
