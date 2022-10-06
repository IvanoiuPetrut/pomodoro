const state = {
  workInterval: {
    minutes: 25,
    seconds: 0,
  },
  smallBreakInterval: {
    minutes: 5,
    seconds: 0,
  },
  longBreakInterval: {
    minutes: 15,
    seconds: 0,
  },
  workIntervals: 0,
  currentInterval: "work",
  isRunning: false,
  isPaused: false,
};

const mutations = {};

export default {
  namespaced: true,
  state,
  mutations,
};
