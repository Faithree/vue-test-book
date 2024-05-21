<script setup lang="ts">
import { ref } from 'vue';
import Button from './Button.vue'
const name = ref('customer-ref')

defineProps<{
  msg: string
}>()
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h3 data-testid="title">title</h3>
    <Button></Button>
  </div>
</template>
