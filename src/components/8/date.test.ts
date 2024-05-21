describe('mock Date', () => {
  let date: Date
  beforeEach(() => {
    date = new Date(1998, 11, 19)
    vi.useFakeTimers()
    vi.setSystemTime(date) // mock 当前运行的测试时间为 new Date(1998, 11, 19)
  })
  afterEach(() => {
    vi.useRealTimers()
  })
  it('mock setSystemTime', () => {
    expect(new Date()).toEqual(date)
    console.log('vi.getRealSystemTime()', vi.getRealSystemTime())
    expect(vi.getMockedSystemTime()).toEqual(date)
    expect(vi.getMockedSystemTime()).toEqual(new Date(1998, 11, 19))
  })
})
