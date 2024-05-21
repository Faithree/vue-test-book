export const KEY = 'test-app'

export const getItems = () => JSON.parse(localStorage.getItem(KEY) ?? '[]')

export const addItem = (todo: Record<string, any>) => {
  const items = getItems()

  items.push(todo)

  localStorage.setItem(KEY, JSON.stringify(todo))
}

export function reloadWindow() {
  window.location.reload()
}

export function changeWindowLocation() {
  window.location.href = 'https://www.juejin.com'
}

export function handleEvent(event: string, callback: Function, bubble = false) {
  window.addEventListener(
    event,
    () => {
      console.log('111')
      callback()
    },
    bubble
  )
}

export function onWindowResize(callback: Function) {
  window.addEventListener('resize', () => {
    callback()
  })
}

export function isMobileView() {
  return window.matchMedia('(max-width: 768px)').matches
}

export function addActiveClass(selector: string) {
  const element = document.querySelector(selector)
  if (element) {
    element.classList.add('active')
  }
}
