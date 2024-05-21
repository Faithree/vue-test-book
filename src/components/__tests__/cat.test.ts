import { Cat } from '../cat'

describe('Cat', () => {
  it('test 1 ', () => {
    const cat = new Cat('AN')
    const meow = vi.spyOn(cat, 'meow')
    cat.hungry()
    expect(meow).toHaveBeenCalled()
    expect(meow).toHaveBeenCalledWith('222') // passed
    expect(meow).toHaveBeenCalledTimes(1)

    cat.hungry()
    cat.hungry()
    expect(meow).toHaveBeenCalledTimes(3)
  })
  it('test 2 ', () => {
    const cat = new Cat('AN')
    const meow = vi.spyOn(cat, 'meow')
    // cat.hungry()
    // expect(meow).toHaveBeenCalled()
    // expect(meow).toHaveBeenCalledWith('喵喵喵') // passed
    // expect(meow).toHaveBeenCalledTimes(1)

    cat.hungry()
    cat.hungry()
    expect(meow).toHaveReturned()
    expect(meow).toHaveReturnedWith('222')
    expect(meow).toHaveReturnedTimes(2)
    expect(meow).lastReturnedWith('222')
    expect(meow).toHaveNthReturnedWith(2, '222')
    expect(()=>{
      JSON.parse("{")
    }).toThrow();
  })
})
