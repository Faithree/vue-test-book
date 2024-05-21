describe('jsdom 才可以使用 storage', () => {
  it('可以缓存值', () => {
    localStorage.setItem('test', 'storage')
    expect(localStorage.getItem('test')).toEqual('storage')
  })

  it('可以设置值', () => {
    localStorage.setItem('test', 'storage')
    expect(localStorage.getItem('test')).toEqual('storage')
  })
})
