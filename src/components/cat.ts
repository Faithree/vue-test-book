export class Cat {
  name: string
  constructor(name: string) {
    this.name = name
  }
  meow = function (content: string) {
    return content
  }
  hungry = function () {
    this.meow('222') // 執行 hungry 時會連帶執行 meow 方法
  }
}
