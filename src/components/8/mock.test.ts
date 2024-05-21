it('should reset mock.calls & mock.results', () => {
  const mockFn = vi.fn(() => 'mock')

  mockFn(1, 2, 3) // first call
  mockFn(4, 5, 6) // second call

  expect(mockFn.mock.calls).toEqual([
    [1, 2, 3],
    [4, 5, 6]
  ])
  expect(mockFn.mock.results).toEqual([
    {
      type: 'return',
      value: 'mock'
    },
    {
      type: 'return',
      value: 'mock'
    }
  ])
  expect(mockFn()).toBe('mock')

  mockFn.mockReset()

  expect(mockFn.mock.calls).toEqual([])
  expect(mockFn.mock.results).toEqual([])
  expect(mockFn()).toBeUndefined()
})


it('should restore mock.calls & mock.results', () => {
  const mockFn = vi.fn(() => 'mock')

  mockFn(1, 2, 3) // first call

  expect(mockFn.mock.calls).toEqual([[1, 2, 3]])
  expect(mockFn.mock.results).toEqual([
    {
      type: 'return',
      value: 'mock'
    }
  ])
  expect(mockFn()).toBe('mock')

  mockFn.mockRestore()

  expect(mockFn.mock.calls).toEqual([])
  expect(mockFn.mock.results).toEqual([])
  expect(mockFn()).toBe('mock')
})
