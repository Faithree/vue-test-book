<script setup lang="ts">
import { onMounted } from 'vue'
import SubComponent from "./SubComponent.vue"

onMounted(() => {
  console.log(`Parent is now mounted.`)
})
defineProps<{
  msg: string
}>()
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <sub-component/>
  </div>
</template>
