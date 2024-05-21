<script setup lang="ts">
import { onMounted, ref } from 'vue'

const input = ref<HTMLInputElement | null>(null)
const model = defineModel<string>()

onMounted(() => {
  input.value?.focus()
})
</script>

<template>
  <div>
    <input ref="input" v-model="model" />
  </div>
</template>
