<script setup lang="ts">
import { inject, ref } from 'vue'
const show = ref(false)
const emit = defineEmits(['handleClick'])
const text = inject('parentValue')
const onClick = () => {
  show.value = true
  emit('handleClick', 'customEmit')
}
</script>

<template>
  <div>
    {{ text }}
    <div v-if="show">vitest</div>
    <div @click="onClick" data-testid="button">按钮</div>
  </div>
</template>
