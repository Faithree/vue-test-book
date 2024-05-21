describe('mock window属性', () => {
  it('mock window属性', () => {
    vi.stubGlobal('innerWidth', 100)
    expect(window.innerWidth).toBe(100)
  })
})
