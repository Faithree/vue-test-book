import { request } from './request'
import axios from 'axios'
describe('mock module', () => {
  it('mock 一个第三方 npm 包', async () => {
    vi.mock('axios')
    const mockedAxios = axios
    mockedAxios.get.mockResolvedValue({ data: 'mocked data' })

    // Call the function with a test param
    const result = await request('test-param', {})

    // Assert that axios.get was called with the correct param
    expect(mockedAxios.get).toHaveBeenCalledWith('test-param', {})

    // Assert that the function returns the correct data
    expect(result).toEqual({ data: 'mocked data' })
  })
})
