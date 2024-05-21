import { mount } from '@vue/test-utils'
import Plugin from './Plugin.vue'
import i18nPlugin from './i18n'

describe('测试 plugin', () => {
  it('uses i18n plugin', () => {
    const wrapper = mount(Plugin, {
      global: {
        plugins: [
          [
            i18nPlugin,
            {
              defaultLanguage: 'en',
              messages: {
                en: {
                  hello: 'Hello test i18nPlugin'
                }
              }
            }
          ]
        ]
      }
    })
    expect(wrapper.text()).toBe('Hello test i18nPlugin')
  })
})
