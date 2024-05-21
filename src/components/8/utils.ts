import { multiply } from './calc'
import { request } from './request'
export const power = (a: number) => multiply(a, a)

export const $myGlobalMethod = (url: string) => {
  return '/' + url
}

export function getList(params: string) {
  return request('/getList', params)
}
export function getAge(params: string) {
  return request('/getAgeList', params)
}
export function getName(params: string) {
  return request('/getName', params)
}
