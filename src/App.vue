<template>
  <div id="app">
    <dynamic-component/>
  </div>
</template>

<script>
import dynamicComponent from './components/dynamic-component.vue'

export default {
  name: 'App',
  components: {
    dynamicComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
