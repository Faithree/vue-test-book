<script setup lang="ts">
import { onMounted, ref } from 'vue'
const str = ref('first render')
onMounted(()=>{
  str.value = 'second render'
})
</script>

<template>
  <div>{{ str }}</div>
</template>
