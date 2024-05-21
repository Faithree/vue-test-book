<script setup lang="ts">
import { onMounted } from 'vue'
onMounted(() => {
  const ele = document.querySelector('h4') as Element
  ele.innerHTML = '111'
  console.log('111')
})
</script>

<template>
  <h4 style="color: red">first render</h4>
</template>
