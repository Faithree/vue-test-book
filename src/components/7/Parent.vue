<script setup lang="ts">
import { ref, provide } from 'vue'
import Button from './Button.vue'
const str = ref('')
provide('parentValue', 'this is parent data')
const onClick = (value) => {
  str.value = value
}
</script>

<template>
  <div>
    <div>{{ str }}</div>
    <Button @handle-click="onClick"></Button>
  </div>
</template>
