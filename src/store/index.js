import Vue from "vue";
import deviceCheck from "./modules/checkDeviceState";
import Vuex from "vuex"; //how you import vuex from the vuex library

Vue.use(Vuex); // let's you use vuex in vue as plugin

// Below is your default vuex store instance, don't get scared.
export default new Vuex.Store({
  modules: {
    deviceCheck,
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {},
});
