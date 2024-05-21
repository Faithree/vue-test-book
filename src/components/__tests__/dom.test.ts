const getSearchObj = () => {
  // ?a=1&b=2
  const { search } = window.location

  // a=1&b=2
  const searchStr = search.slice(1)

  // ['a=1', 'b=2']
  const pairs = searchStr.split('&')

  // { 'a': '1' }
  const searchObj: Record<string, string> = {}

  pairs.forEach((pair) => {
    // [a, 1]
    const [key, value] = pair.split('=')
    searchObj[key] = value
  })

  return searchObj
}
describe.todo('getSearchObj', () => {
  it('可以获取当前网址的查询参数对象', () => {

    window.location.href = 'https://www.baidu.com?a=1&b=2'

    expect(window.location.search).toEqual('?a=1&b=2')
    expect(getSearchObj()).toEqual({
      a: '1',
      b: '2'
    })
  })

  it('空参数返回空', () => {
    window.location.href = 'https://www.baidu.com'

    expect(window.location.search).toEqual('')
    expect(getSearchObj()).toEqual({})
  })
})
