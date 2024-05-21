<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  console.log(`SubComponent is now mounted.`)
})
</script>

<template>
  <div>
    SubComponent
  </div>
</template>
