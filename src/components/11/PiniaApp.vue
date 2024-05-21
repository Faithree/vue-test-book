<script setup lang="ts">
import { useCounterStore } from './store'
// 可以在组件中的任意位置访问 `store` 变量 ✨
const store = useCounterStore()
</script>

<template>
  <div class="store-bg">
    下面是 pinia useStore
    <button data-testid="account-button" @click="store.increment()">++按钮</button>
    数字:{{ store.count }}
    doubleCount:{{ store.doubleCount }}
    plugins:{{ store.log }}
  </div>
</template>

<style scoped>
.store-bg {
  background-color: rgb(184, 252, 249);
}
</style>
