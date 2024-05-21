<template>
  <div class="about">
    <h1>This is an About page</h1>
    {{ route.query }}
  </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute()
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
