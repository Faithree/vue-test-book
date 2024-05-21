// request.ts
import axios from 'axios'

export function request(url: string, params: any) {
  // 基于 axios 做各种封装
  return axios.get(url, params)
}
