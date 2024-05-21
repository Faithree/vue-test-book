// 示例待测试的函数
function add(a:number, b:number) {
  return a + b
}

// 在每个测试之前执行的准备工作
beforeEach(() => {
  // 在这里进行测试前的准备工作，比如设置测试环境、初始化变量等
  console.log('准备工作')
})

// 测试示例
test('add 函数应正确计算两个数的和', () => {
  const result = add(2, 3)
  expect(result).toBe(5) // 断言结果是否符合预期
})

test('add 函数应正确处理负数', () => {
  const result = add(-1, 5)
  expect(result).toBe(4) // 断言结果是否符合预期
})
