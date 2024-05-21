describe('测试 expect  ', () => {
  it('test toBe ', () => {
    const stock = {
      type: 'apples',
      count: 13
    }

    expect(stock.type).toBe('apples')
    expect(stock.count).toBe(13)
    const refStock = stock
    expect(stock).toBe(refStock)
  })
  it('test not toBe ', () => {
    expect(1).not.toBe(2)
  })
  it('test 数字 ', () => {
    expect(10 + 10).toBe(20)
    // not
    expect(10 + 10).not.toBe(30)
    // >
    expect(3).toBeGreaterThan(2)
    // <
    expect(3).toBeLessThan(4)
    expect(3 < 4).toBe(true)

    // >=
    expect(3).toBeGreaterThanOrEqual(3)
    expect(3).toBeGreaterThanOrEqual(2)
    expect(3 >= 3).toBe(true)
    expect(3 >= 2).toBe(true)
    // <=
    expect(3).toBeLessThanOrEqual(3)
    expect(3).toBeLessThanOrEqual(4)
    expect(3 <= 3).toBe(true)
    expect(3 <= 4).toBe(true)
  })

  it.fails('test toBeCloseTo', () => {
    expect(0.2 + 0.1).toBe(0.3) // 0.2 + 0.1 is 0.30000000000000004
  })
  it('test toBeCloseTo', () => {
    expect(0.2 + 0.1).not.toBe(0.3) // 0.2 + 0.1 is 0.30000000000000004
    expect(0.2 + 0.1).toBeCloseTo(0.3)
  })

  it('test Boolean ', () => {
    // boolean true
    expect(!!2).toBe(true) // toBe 替代方式
    expect(true).toBeTruthy()
    expect(1).toBeTruthy()
    expect({}).toBeTruthy()
    expect([]).toBeTruthy()

    // boolean false
    expect(!!'').toBe(false) // toBe 替代方式
    expect(0).toBeFalsy()
    expect('').toBeFalsy()
    expect(null).toBeFalsy()
    expect(undefined).toBeFalsy()
    expect(NaN).toBeFalsy()
    expect(false).toBeFalsy()
  })

  it('test undefined', () => {
    // undefined
    expect(undefined).toBe(undefined) // toBe 替代方式
    expect(undefined).not.toBeDefined()
    expect(undefined).toBeUndefined()
    expect('').toBeDefined()
  })

  it('test null', () => {
    expect(null === null).toBe(true) // toBe 替代方式
    expect(null).toBeNull()
  })
  it('test toEqual', () => {
    const stockBill = {
      type: 'apples',
      count: 13
    }
    const stockMary = {
      type: 'apples',
      count: 13
    }
    const stockBill2 = {
      type: 'apples',
      count: 13,
      name: undefined
    }
    const stockMary2 = {
      type: 'apples',
      count: 13
    }
    expect(stockBill).toEqual(stockMary)
    expect(stockBill).not.toBe(stockMary)

    expect(stockBill2).toEqual(stockMary2)
    expect(stockBill2).not.toBe(stockMary2)
  })
  it('test toStrictEqual', () => {
    const stockBill = {
      type: 'apples',
      count: 13,
      name: undefined
    }
    const stockMary = {
      type: 'apples',
      count: 13
    }
    class Stock {
      type: any
      constructor(type: any) {
        this.type = type
      }
    }
    expect(stockBill).not.toStrictEqual(stockMary)
    expect([1]).not.toStrictEqual([undefined, 1])
    expect(new Stock('apples')).not.toStrictEqual({ type: 'apples' })
  })

  it('test toContain', () => {
    expect(['apple', 'orange']).toContain('orange')
    expect('123abc123').toContain('123abc')
    // const element = document.querySelector('#el')
    // expect(document.querySelector('#wrapper')).toContain(element)
  })
  it('test toHaveProperty', () => {
    expect({ name: 'xxx', age: 10 }).toHaveProperty('name')
  })

  it('test toMatchObject', () => {
    expect([{ foo: 'bar' }, { baz: 1 }]).toMatchObject([{ foo: 'bar' }, { baz: 1 }])
    expect({ obj: { name: 'xxx' }, height: 10 }).toMatchObject({ height: 10 })
    expect({ obj: { name: 'xxx' }, height: 10 }).not.toMatchObject({ name: 'xxx' })
  })

  it('test Error ', () => {
    expect(() => {
      JSON.parse('{')
    }).toThrow()
  })
  it('test toMatchInlineSnapshot', () => {
    const data = { foo: new Set(['bar', 'snapshot']) }
    expect(data).toMatchInlineSnapshot(`
      {
        "foo": Set {
          "bar",
          "snapshot",
        },
      }
    `)
    expect(22).toMatchInlineSnapshot('22')
    expect(true).toMatchInlineSnapshot('true')
    expect([1, 2, 3]).toMatchInlineSnapshot(`[
  1,
  2,
  3,
]`)
    expect({ name: 'xxx' }).toMatchInlineSnapshot(`{
  "name": "xxx",
}`)
  })
  it('test toMatchSnapshot', () => {
    const config = { url: '被修改了', domain: 'domain', analysis: 'analysis alias' }
    expect(config).toMatchSnapshot()
  })

  it('test function ', () => {
    const market = {
      buy(subject: string, amount: number) {
        // ...
      }
    }
    const buySpy = vi.spyOn(market, 'buy')
    expect(buySpy).not.toHaveBeenCalled()
    market.buy('apples', 10)
    market.buy('apples', 10)
    expect(buySpy).toHaveBeenCalled()
    expect(buySpy).toHaveBeenCalledTimes(2)
    expect(buySpy).toHaveBeenCalledWith('apples', 10)

    const mockFunction = vi.fn()
    mockFunction()
    expect(mockFunction).toHaveBeenCalled()
    expect(mockFunction).toHaveBeenCalledTimes(1)
    expect(mockFunction).toHaveBeenCalledWith()
  })
})
