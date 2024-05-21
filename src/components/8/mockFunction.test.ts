describe('mock function', () => {
  it('vi.fn function', async () => {
    const requestFn = vi.fn((url: string, params: string) => {
      return {
        data: {
          name: 'xxx'
        }
      }
    })

    // 测试代码中调用模拟函数
    requestFn('/url', 'params')

    // 断言模拟函数的调用信息
    expect(requestFn).toHaveBeenCalled()
    expect(requestFn).toHaveBeenCalledWith('/url', 'params') // 被调用的时候参数是 '/url', 'params'  })
    expect(requestFn('/url', 'params')).toEqual({
      data: {
        name: 'xxx'
      }
    })
  })
  it('vi.fn function 修改返回值', async () => {
    const requestFn = vi.fn((arg1, arg2) => 'requestFn1')
    expect(requestFn('/url', 'params')).toBe('requestFn1')

    // mockImplementation
    requestFn.mockImplementation((arg1, arg2) => 'requestFn2')
    expect(requestFn('/url', 'params')).toBe('requestFn2')

    // mockReturnValue
    requestFn.mockReturnValue('requestFn3')
    expect(requestFn('/url', 'params')).toBe('requestFn3')

    // mockResolvedValue
    requestFn.mockResolvedValue('requestFn4')
    const res = await requestFn('/url', 'params')
    expect(res).toBe('requestFn4')
  })
  it('vi.spyOn function', async () => {
    const cart = {
      getApples: () => {
        console.log('getApples 被执行了') // 假的函数也会被执行到
        return 42
      }
    }

    const spy = vi.spyOn(cart, 'getApples')
    cart.getApples()
    expect(cart.getApples()).toBe(42) // 假的函数也会被执行到
    expect(spy).toHaveBeenCalled()
  })

  it('vi.spyOn function  修改返回值同理', async () => {
    const cart = {
      getApples: () => 42
    }

    expect(cart.getApples()).toBe(42)
    const spy = vi.spyOn(cart, 'getApples').mockReturnValue(10)

    expect(cart.getApples()).toBe(10)
    expect(spy).toHaveReturnedWith(10)
  })

  it('mockReset', async () => {
    const mockFunction = vi.fn(() => 'return value')
    expect(mockFunction()).toBe('return value')
    mockFunction.mockReset() // 清除函数的所有调用数据及其自定义实现
    expect(mockFunction()).toBe(undefined)
  })
  it('mockClear', async () => {
    const mockFunction = vi.fn(() => 'return value')
    expect(mockFunction()).toBe('return value')
    mockFunction.mockClear() // 清除函数的调用数据，保留实现
    expect(mockFunction()).toBe('return value')
  })
  it('mockRestore', async () => {
    const object = { method: () => 'original return value' }
    const spy = vi.spyOn(object, 'method').mockImplementation(() => 'mocked return value')
    expect(object.method()).toBe('mocked return value')
    spy.mockRestore() // 清除调用数据，并恢复method的原始实现
    expect(object.method()).toBe('original return value')
  })
})
