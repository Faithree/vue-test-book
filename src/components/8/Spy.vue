<template>
  <div>
    <button @click="fetchData">Fetch Data</button>
    <p>{{ data }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const data = ref('')

const fetchData = (): void => {
  // 模拟异步数据请求
  console.log('fetchData--')
  setTimeout(() => {
    data.value = 'Fetched Data'
  }, 1000)
}
</script>
