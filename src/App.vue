<template>
  <div id="app">
    <dynamic-component 
    
    >
    </dynamic-component>
  </div>
</template>

<script>
import dynamicComponent from './components/dynamic-component.vue';
export default {
  name: 'App',
  components: {
    dynamicComponent
  },
  data(){
    return{
      // size:'large'
    }
  }
}
</script>

<style>

*{
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    padding: 0;
    margin: 0;
    color: white;
}

</style>
