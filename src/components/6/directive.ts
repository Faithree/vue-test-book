export const vTooltip = {
  beforeMount(el: Element) {
    console.log('directive called')
    el.classList.add('with-tooltip')
  }
}