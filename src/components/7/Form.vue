<script setup lang="ts">
import { ref } from 'vue'
const name = ref('')
const isMan = ref(1)
const country = ref(['jpy'])


</script>

<template>
  <div>
    <input v-model="name" data-testid="input"/>
    <div>{{ name }}</div>
    <h2>radio</h2>
    <input type="radio" v-model="isMan" data-testid="radio-1" value="1"/>
    <input type="radio" v-model="isMan" data-testid="radio-2" value="2"/>
    <div>{{ isMan }}</div>
    <h2>select</h2>
    <select name="country" data-testid="select-country" v-model="country" >
      <option value="cn" label="cn"></option>
      <option value="jpy" label="jpy"></option>
      <option value="uk" label="uk"></option>
    </select>
    <div>
      {{ country }}
    </div>
  </div>
</template>
