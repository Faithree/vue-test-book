import { mount } from '@vue/test-utils'
import MyComponent from './Spy.vue'

describe.skip('MyComponent', () => {
  it('应该正确调用了 fetchData 方法', () => {
    const wrapper = mount(MyComponent)

    // 使用 vi.spyOn 监视 fetchData 方法
    console.log('wrapper.vm', wrapper.vm)
    const fetchDataSpy = vi.spyOn(wrapper.vm, 'fetchData')

    // 执行组件中的某个操作，触发 fetchData 方法的调用
    wrapper.find('button').trigger('click')

    // 断言 fetchData 方法被调用了一次
    expect(fetchDataSpy).toHaveBeenCalled()
  })

  it('应该正确调用了 fetchData 方法并返回了预期的结果', async () => {
    const wrapper = mount(MyComponent)

    // 使用 vi.spyOn 监视 fetchData 方法
    const fetchDataSpy = vi.spyOn(wrapper.vm, 'fetchData')

    // 执行组件中的某个操作，触发 fetchData 方法的调用
    wrapper.find('button').trigger('click')

    // 等待异步操作完成
    await wrapper.vm.$nextTick()

    // 断言 fetchData 方法被调用了一次
    expect(fetchDataSpy).toHaveBeenCalled()

    // 断言组件中的数据是否被更新为预期的值
    expect(wrapper.vm.data).toBe('Fetched Data')
  })
})
