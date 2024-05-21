<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
// import Parent from './components/7/Parent.vue'
// import Plugin from './components/7/Plugin.vue'
// import Directive from './components/6/Directive.vue'
// import Attach from './components/6/Attach.vue'
// import Global from './components/6/Global.vue'
// import MockInstance from './components/8/MockInstance.vue'
import Store from './components/10/StoreApp.vue'
import PiniaApp from './components/11/PiniaApp.vue'
import Lazy from './components/5/Lazy.vue'
import { ref } from 'vue'
const show = ref(false)

const onClick = () => {
  show.value = true
}
const router = useRouter()
</script>

<template>
  <header>
    <div class="wrapper">
      <h1 @click="onClick">点击懒加载</h1>
      <Lazy v-if="show"></Lazy>
      <!-- <Directive></Directive> -->
      <!-- <Parent /> -->
      <!-- <Attach></Attach> -->
      <!-- <Plugin></Plugin> -->
      <!-- <Global></Global> -->
      <!-- <MockInstance></MockInstance> -->
      <nav>
        <RouterLink to="/" data-testid="Home">Home</RouterLink>
        <RouterLink to="/about" data-testid="About">About</RouterLink>
      </nav>

      <h3>下面是命令式导航</h3>
      <div>
        <button data-testid="home-button" @click="router.push('/')">Home</button>
        <button data-testid="about-button" @click="router.push('/about')">About</button>
      </div>
    </div>
  </header>
  <Store></Store>
  <div></div>
  <PiniaApp></PiniaApp>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: red;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
