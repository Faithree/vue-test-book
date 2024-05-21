import { mount } from '@vue/test-utils'
import Find from './Find.vue'
import Button from './Button.vue'

describe('查询', () => {
  it('查询元素，可以同过标签、属性、id、类名查找', () => {
    const wrapper = mount(Find, { props: { msg: 'Hello Vitest' } })

    const title = wrapper.find('[data-testid="title"]') // 属性查找
    expect(title.text()).toBe('title')
    // 获取第一个h1元素
    expect(wrapper.get('h1').text()).toBe('Hello Vitest')
    // 获取第一个 h1 元素
    expect(wrapper.findAll('h1').at(0)?.text()).toBe('Hello Vitest')
    // 获取第二个 h1 元素
    expect(wrapper.findAll('h1').at(1)?.text()).toBe('Hello Vitest')

    expect(wrapper.find('h2')) // 找不到返回 undefined
    // expect(wrapper.get('h2')) // 找不到会直接报错
    // console.log(wrapper.findAll('h2'))
  })
  it('查询组件', () => {
    const wrapper = mount(Find, { props: { msg: 'Hello Vitest' } })
    console.log('wrapper.getComponent(Button)', wrapper.getComponent(Button).html())

    expect(wrapper.getComponent(Button).text()).toBe('default buttonshow button')
    expect(wrapper.findComponent(Button).text()).toBe('default buttonshow button')
    expect(wrapper.findAllComponents(Button).at(0)?.text()).toBe('default buttonshow button')
  })
  it('元素是否展示，是否可见 ', () => {
    const wrapper = mount(Button)
    const showDom = wrapper.find('[data-testid="show"]')

    const ifDom = wrapper.find('[data-testid="if"]')
    expect(showDom.isVisible()).toBeFalsy()
    expect(showDom.exists()).not.toBeFalsy()
    expect(ifDom.exists()).toBeFalsy()
  })
  it('元素的属性 ', () => {
    const wrapper = mount(Button)
    const showDom = wrapper.find('[data-testid="show"]')
    console.log('attributes', showDom.attributes())
  })
  it('组件的属性 ', () => {
    const wrapper = mount(Find, { props: { msg: 'Hello Vitest' } })
    console.log(wrapper.vm)
    console.log(wrapper.vm.$props)
    console.log(wrapper.vm.$props)
    console.log(wrapper.vm.name)
  })
})
