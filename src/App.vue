<template>
  <div id="app">
    <div id="radios">
      <label for="radio1">
        Dashboard 1
        <input
          type="radio"
          name="switch"
          id="dash1"
          value="dash1"
          @change="switchDashboard('dash1')"
          :checked="showFirst"
        />
      </label>
      <label for="radio1">
        Dashboard 2
        <input
          type="radio"
          value="dash2"
          name="switch"
          id="dash2"
          @change="switchDashboard('dash2')"
        />
      </label>
    </div>
    <dynamicComponent :size="size" :expandable="false">
      <template v-slot:content>
        <navBar />
      </template>
    </dynamicComponent>
    <div v-if="showLast">
      <mainBody2 />
    </div>
    <div v-if="showFirst">
      <mainBody />
    </div>
  </div>
</template>

<script>
// import dashboard from "./components/dashboard";
import navBar from "./components/nav";
import mainBody from "./components/mainBody";
import mainBody2 from "./components/mainBody2";
import dynamicComponent from "./components/dynamic-component";
export default {
  name: "App",
  components: {
    //dashboard
    navBar,
    dynamicComponent,
    mainBody2,
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
  /* color: white; */
}
#app {
  max-width: 100%;
  position: relative;
  box-sizing: border-box;
}

#radios {
  position: absolute;
  color: white;
  z-index: 10;
  top: 3px;
  right: 15px;
}
/* #nav {
  grid-column: 1/-1;
}

#side {
  grid-column: 1/3;
}

#main {
  grid-column: 3/9;
}

#side2 {
  grid-column: 9/-1;
}
#app {
  padding: 10px;
} */
</style>
