<script setup lang="ts">
import { useStore } from './store'
const store = useStore()
console.log('store', store)
// debugger
</script>

<template>
  <div class="store-bg">
    下面是 vuex useStore
    <button data-testid="account-button" @click="store.commit('increment')">++按钮</button>
    数字:{{ store.state.count }}
  </div>
</template>

<style scoped>
.store-bg {
  background-color: rgb(255, 237, 203);
}
</style>
