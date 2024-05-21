<script setup lang="ts">
interface Emits {
  (e: 'change', value: string)
  (e: 'update:pageIndex', value: number)
  (e: 'update:pageSize', value: string, size: number)
}

const emits = defineEmits<Emits>()

const resetPage = (value: string) => {
  emits('update:pageSize', value, 10)
  emits('update:pageIndex', 1)
  emits('change', value)
}
</script>

<template>
  <div @click="resetPage('customer')" data-testid="button">button</div>
</template>
