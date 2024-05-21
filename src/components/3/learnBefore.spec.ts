// 模拟的前端组件
class MyComponent {
  data: number[]
  constructor() {
    this.data = []
  }

  fetchData() {
    // 模拟异步数据获取
    return new Promise((resolve) => {
      setTimeout(() => {
        this.data = [1, 2, 3]
        resolve('success')
      }, 1000)
    })
  }
}

describe('测试  component', () => {
  let component:MyComponent

  // 在每个测试之前执行的准备工作
  beforeEach(() => {
    // 创建一个新的组件实例
    component = new MyComponent()
  })
  test('fetchData 方法应正确获取数据', async () => {
    await component.fetchData()
    // 断言数据是否符合预期
    expect(component.data).toEqual([1, 2, 3])
  })

  test('data 数组应为空数组', () => {
    // 断言数据是否为空数组
    expect(component.data).toEqual([])
  })
})
