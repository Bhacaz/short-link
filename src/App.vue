<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <p class="title">
        Short Link
      </p>
    </div>
  </section>
  <router-view/>
</template>

<script>
// import Main from './views/Home.vue'
// import Redirect from './components/Redirect.vue'

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
