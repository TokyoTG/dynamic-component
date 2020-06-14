const state = {
  mobile: false,
};

const getters = {
  mobile: (state) => {
    return state.mobile;
  },
};

const mutations = {
  checkDevice: (state) => {
    // here, we have a function that takes our state as an argument
    if (window.innerWidth <= 650) {
      // checks if your device width is less than 410 which denotes mobile device. Note, you can set any width you want based on the width you are targeting as mobile device.
      state.mobile = true; // sets the mobile property to true if it's a mobile device
    } else {
      state.mobile = false; // sets the mobile property to false if it's not a mobile device
    }
  },
};

const actions = {
  checkMobile: (context) => {
    // a function that takes context as an argument. Context here is literal.
    context.commit("checkDevice"); // this piece here commits and triggers the checkDevice mutation. We interact with checkDevice mutation through this action from our components.
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
