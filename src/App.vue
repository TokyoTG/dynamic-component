<template>
  <div id="app">
    <dynamicComponent :size="size" :expandable="false" >
      <template v-slot:content>
        <navBar />
      </template>
    </dynamicComponent>
    <div v-if="showFirst" >
      <mainBody />
    </div>
  </div>
</template>

<script>
// import dashboard from "./components/dashboard";
import navBar from "./components/nav";
import mainBody from "./components/mainBody";
import dynamicComponent from "./components/dynamic-component";
export default {
  name: "App",
  components: {
    //dashboard
    navBar,
    dynamicComponent,
    mainBody
  },
  data() {
    return {
      size: "large",
      showFirst: true,
      showLast: false
    };
  },
  methods: {
    switchDashboard(value) {
      if (value == "dash1") {
        this.showFirst = true;
        this.showLast = false;
      } else if (value == "dash2") {
        this.showFirst = false;
        this.showLast = true;
      }
    }
  },
  computed: {
    first() {
      return this.showFirst;
    },
    last() {
      return this.showLast;
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  padding: 0;
  margin: 0;
}
#app {
  max-width: 100%;
  height: 100vh;
  position: relative;
  background: #212121;
  box-sizing: border-box;
}


</style>
