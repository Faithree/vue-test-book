import { getList } from './utils'

const { mockedMethod } = vi.hoisted(() => {
  return {
    mockedMethod: vi.fn().mockReturnValue({
      data: 'mockGetList'
    })
  }
})
describe('mock 模块中的一个函数', () => {
  it('mock 模块中的一个函数', () => {
    vi.mock('./utils', async () => {
      return {
        ...((await vi.importActual('./utils')) as any),
        getList: vi.fn().mockReturnValue({
          data: 'mockGetList'
        })
      }
    })
    getList('xx')
    expect(getList).toHaveBeenCalledTimes(1)
    expect(getList).toHaveBeenCalledWith('xx')
    expect(getList).toHaveReturnedWith({
      data: 'mockGetList'
    })
    vi.clearAllMocks()
  })
})

describe('mock 模块中的一个函数', () => {
  it('mock 模块中的一个函数的另一种常用方法', () => {
    vi.mock('./request', async () => {
      return { getList: mockedMethod }
    })
    getList('xx')
    expect(getList).toHaveBeenCalledTimes(1)
    expect(getList).toHaveBeenCalledWith('xx')
    expect(getList).toHaveReturnedWith({
      data: 'mockGetList'
    })
  })
  vi.clearAllMocks()
})
// describe('失败', () => {
//   it('mock 失败', () => {
//     const mockedMethod = vi.fn().mockReturnValue('mockGetList')

//     vi.mock('./request', async () => {
//       return { getList: mockedMethod }
//     })
//     getList('xx')
//     expect(getList).toHaveBeenCalledTimes(1)
//     expect(getList).toHaveBeenCalledWith('xx')
//     expect(getList).toHaveReturnedWith('mockGetList')
//   })
// })
