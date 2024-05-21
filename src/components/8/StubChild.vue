<script setup lang="ts">
import axios from 'axios'
import { onMounted } from 'vue'

onMounted(() => {
  axios.get('www.baidu.com');
})
</script>

<template>
  <h1>i an child component</h1>
</template>
