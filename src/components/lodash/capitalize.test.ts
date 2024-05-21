import { capitalize } from 'lodash-es'

describe('capitalize', () => {
  it('should capitalize the first character of a string', () => {
    expect(capitalize('fred')).toBe('Fred')
    expect(capitalize('Fred')).toBe('Fred')
    expect(capitalize(' fred')).toBe(' fred')
    expect(capitalize('*fred')).toBe('*fred')
    expect(capitalize('//fred')).toBe('//fred')
  })
})
