import Vue from "vue";
import App from "./App.vue";
import store from "./store"; // this is how you import the store. It automatically detects your store/index.js fil

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");
