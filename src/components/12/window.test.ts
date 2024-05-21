import {
  KEY,
  addItem,
  changeWindowLocation,
  getItems,
  handleEvent,
  isMobileView,
  onWindowResize,
  reloadWindow,
  addActiveClass
} from './util'

describe('localStorage 测试', () => {
  afterEach(() => {
    localStorage.clear()
  })
  it('测试 getItem', () => {
    const todo = {
      id: 11111,
      text: '测试一下'
    }
    localStorage.setItem(KEY, JSON.stringify([todo]))
    expect(getItems()).toStrictEqual([todo])
  })
  it('测试 setItem', () => {
    const todo = {
      id: 11111,
      text: '测试一下'
    }
    addItem(todo)
    const value = JSON.parse(localStorage.getItem(KEY) ?? '[]')
    expect(value).toStrictEqual(todo)
  })
})

describe('mock localStorage 测试', () => {
  const getItemSpy = vi.spyOn(Storage.prototype, 'getItem')
  const setItemSpy = vi.spyOn(Storage.prototype, 'setItem')
  afterAll(() => {
    localStorage.clear()
    vi.restoreAllMocks()
  })

  it('测试 getItem', () => {
    const todo = {
      id: 11111,
      text: '测试一下'
    }
    localStorage.setItem(KEY, JSON.stringify([todo]))

    expect(getItems()).toStrictEqual([todo])
    expect(getItemSpy).toHaveBeenCalledWith(KEY)
  })
  it('测试 setItem', () => {
    const todo = {
      id: 11111,
      text: '测试一下'
    }
    addItem(todo)

    expect(setItemSpy).toHaveBeenCalledWith(KEY, JSON.stringify(todo))
    expect(getItems()).toStrictEqual(todo)
  })
})

describe('location 测试', () => {
  const originLocation = window.location
  const mockReLoad = vi.fn()
  beforeEach(() => {
    const url = originLocation.href
    window.location = {
      href: url,
      reload: mockReLoad
    } as any
  })
  afterEach(() => {
    window.location = originLocation
  })
  it('测试 reload 被调用', () => {
    reloadWindow()
    expect(mockReLoad).toHaveBeenCalledTimes(1)
  })
  it('测试重定向 href', () => {
    changeWindowLocation()
    expect(window.location.href).toBe('https://www.juejin.com')
  })
  it('测试默认路径不受前面用例影响', () => {
    expect(window.location.href).not.toBe('https://www.juejin.com')
  })
})

describe('测试事件', () => {
  it('能否监听和触发执行', () => {
    // 创建一个模拟回调函数
    const mockCallback = vi.fn()
    // 模拟 window.addEventListener
    const addEventListenerSpy = vi.spyOn(window, 'addEventListener')

    // 调用 handleEvent 并传入参数
    handleEvent('click', mockCallback, true)

    // 触发 click 事件以测试 handleEvent 是否能正确工作
    const clickEvent = new Event('click', { bubbles: true })
    document.body.dispatchEvent(clickEvent)

    // 断言 window.addEventListener 是否被正确调用
    expect(addEventListenerSpy).toBeCalledWith('click', expect.any(Function), true)

    // 断言回调函数是否被调用
    expect(mockCallback).toHaveBeenCalledTimes(1)

    // 清理
    addEventListenerSpy.mockRestore()
  })
})

describe('测试浏览器窗口变化', () => {
  it('测试浏览器窗口变化 resize', () => {
    const mockCallback = vi.fn()
    // 注册窗口大小改变事件的处理程序
    onWindowResize(mockCallback)
    // 更改窗口大小
    window.innerWidth = 1024
    window.innerHeight = 768
    // 触发 resize 事件
    window.dispatchEvent(new Event('resize'))
    // 断言回调函数被调用
    expect(mockCallback).toBeCalled()
  })
})

describe('isMobileView', () => {
  beforeEach(() => {
    // 清除所有之前的模拟
    vi.restoreAllMocks()
  })

  it('模拟窗口宽度小于 768px 的环境', () => {
    // 模拟窗口宽度小于 768px 的环境
    vi.spyOn(window, 'matchMedia').mockImplementation((query) => {
      return {
        matches: query === '(max-width: 768px)',
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn()
      }
    })

    // 执行函数并断言其返回 true
    const result = isMobileView()
    expect(result).toBe(true)
  })

  it('模拟窗口宽度大于 768px 的环境', () => {
    // 模拟窗口宽度大于 768px 的环境
    const mockMatchMedia = vi.spyOn(window, 'matchMedia').mockImplementation((query) => {
      return {
        matches: false
      }
    })

    const result = isMobileView()
    expect(result).toBe(false)
  })
})

describe('其他 全局', () => {
  it('其他 全局', () => {
    // 模拟window.alert
    window.alert = vi.fn()
    window.alert('Test Alert')
    expect(window.alert).toHaveBeenCalledTimes(1)
    expect(window.alert).toHaveBeenCalledWith('Test Alert')

    // 使用 spyOn 监控 Number.isInteger
    const isIntegerSpy = vi.spyOn(Number, 'isInteger')
    const result = Number.isInteger(10)
    expect(result).toBe(true)
    expect(isIntegerSpy).toHaveBeenCalledTimes(1)
    expect(isIntegerSpy).toHaveBeenCalledWith(10)
  })
})

describe('测试样式', () => {
  it('元素成功添加 active ', () => {
    // 创建一个假的元素和classList对象
    const fakeElement = {
      classList: {
        add: vi.fn()
      }
    }
    // 用 spyOn 来监控 querySelector 的调用，并让它返回我们的假元素
    const spy = vi.spyOn(document, 'querySelector').mockReturnValue(fakeElement)
    // 调用被测试的函数
    addActiveClass('.my-selector')
    // 断言 querySelector 被正确调用
    expect(spy).toHaveBeenCalledWith('.my-selector')
    // 断言 classList.add 被带有正确参数调用
    expect(fakeElement.classList.add).toHaveBeenCalledWith('active')
    // 恢复原始实现
    spy.mockRestore()
  })
})
