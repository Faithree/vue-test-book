function startInterval(callback, ms) {
  const intervalId = setInterval(callback, ms)
  return intervalId
}

describe('mock timer', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.useRealTimers()
  })
  it('setTimeout timer', () => {
    const mockFn = vi.fn()

    setTimeout(mockFn, 5000)
    setTimeout(mockFn, 15000)
    vi.runAllTimers()

    expect(mockFn).toBeCalledTimes(2)
  })
  it('单个 setInterval timer', () => {
    const callback = vi.fn()
    const ms = 1000

    // 启动 interval
    startInterval(callback, ms)

    // 快进时间，已经走了1000
    vi.advanceTimersByTime(ms)

    // 检查 callback 是否被至少调用了一次
    expect(callback).toHaveBeenCalledTimes(1)

    // 继续快进时间，已经走了第二个 1000，目前走了 2000 ms
    vi.advanceTimersByTime(ms)

    // 再次检查 callback 调用次数
    expect(callback).toHaveBeenCalledTimes(2)
  })
  it('多个 setInterval timer， ', () => {
    const mockFn1 = vi.fn()
    const mockFn2 = vi.fn()

    setInterval(() => mockFn1(), 1000)
    setInterval(() => mockFn2(), 5000)

    vi.runOnlyPendingTimers()

    expect(mockFn1).toHaveBeenCalledTimes(5)
    expect(mockFn2).toHaveBeenCalledTimes(1)
  })

  it('每次执行一次事件循环', () => {
    const mockFn1 = vi.fn()
    const mockFn2 = vi.fn()

    setInterval(() => mockFn1(), 1000)
    setInterval(() => mockFn2(), 3000)

    expect(mockFn1).toHaveBeenCalledTimes(0)
    expect(mockFn2).toHaveBeenCalledTimes(0)

    vi.advanceTimersToNextTimer()
    expect(mockFn1).toHaveBeenCalledTimes(1)
    expect(mockFn2).toHaveBeenCalledTimes(0)

    vi.advanceTimersToNextTimer()
    expect(mockFn1).toHaveBeenCalledTimes(2)
    expect(mockFn2).toHaveBeenCalledTimes(0)

    vi.advanceTimersToNextTimer()
    expect(mockFn1).toHaveBeenCalledTimes(3)
    expect(mockFn2).toHaveBeenCalledTimes(1)
  })
})
