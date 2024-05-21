import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { vTooltip } from './components/6/directive'
import i18nPlugin from './components/7/i18n'
import GlobalComponent from './components/6/GlobalComponent.vue'
import { $myGlobalMethod } from './components/8/utils'
import { store, key } from './components/10/store'
import { myPlugin } from './components/11/plugin'

const app = createApp(App)
// 指令
app.directive('tooltip', vTooltip)
// 全局 组件
app.component('GlobalComponent', GlobalComponent)
// 全局属性方法
app.config.globalProperties.$myGlobalMethod = $myGlobalMethod
app.config.globalProperties.$myGlobalParams = '$myGlobalParams'
// 插件
app.use(i18nPlugin, {
  defaultLanguage: 'en',
  messages: {
    en: {
      hello: 'Hello Plugin'
    }
  }
})
// pinia
const pinia = createPinia()
pinia.use(myPlugin)
app.use(pinia)

// vuex
app.use(store, key)
// 路由
app.use(router)
app.mount('#app')
