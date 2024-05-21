<template>
  <div>
    <form @submit.prevent="submit">
      <input v-model="username" />
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, defineEmits } from 'vue'

const emit = defineEmits(['signup'])

const username = ref('')

const error = computed(() => {
  return username.value.length < 8
})

const submit = () => {
  if (!error.value) {
    emit('signup', username.value)
  }
}
</script>
