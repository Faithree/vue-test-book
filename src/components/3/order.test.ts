beforeAll(() => console.log('Global - beforeAll'))
afterAll(() => console.log('Global - afterAll'))
beforeEach(() => console.log('Global - beforeEach'))
afterEach(() => console.log('Global - afterEach'))

describe('Scoped A', () => {
  beforeAll(() => {
    console.log('Scoped A - beforeAll')
  })
  beforeEach(() => {
    console.log('Scoped A - beforeEach')
  })
  afterAll(() => {
    console.log('Scoped A - afterAll')
  })
  afterEach(() => {
    console.log('Scoped A - afterEach')
  })
  it('Scoped A case 1', () => {
    console.log('Scoped A case 1')
  })
  it('Scoped A case 2', () => {
    console.log('Scoped A case 2')
  })
})
describe('Scoped B', () => {
  beforeAll(() => {
    console.log('Scoped B - beforeAll')
  })
  beforeEach(() => {
    console.log('Scoped B - beforeEach')
  })
  afterAll(() => {
    console.log('Scoped B - afterAll')
  })
  afterEach(() => {
    console.log('Scoped B - afterEach')
  })
  it('Scoped B case 1', () => {
    console.log('Scoped B case 1')
  })
  it('Scoped B case 2', () => {
    console.log('Scoped B case 2')
  })
})
