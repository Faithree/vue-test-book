<script setup lang="ts">
import { ref } from 'vue'
const show = ref(false)

const onClick = () => {
  show.value = true
}
</script>

<template>
  <div>
    <div v-if="show">vitest</div>
    <input @keydown="onClick" data-testid="input"/>
  </div>
</template>
