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

const mutations = {
  SET_WORK_INTERVAL(state, payload) {
    state.workInterval = payload;
  },
  SET_SMALL_BREAK_INTERVAL(state, payload) {
    state.smallBreakInterval = payload;
  }
  SET_LONG_BREAK_INTERVAL(state, payload) {
    state.longBreakInterval = payload;
  },
  SET_WORK_INTERVALS(state, payload) {
    state.workIntervals = payload;
  },
  SET_CURRENT_INTERVAL(state, payload) {
    state.currentInterval = payload;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
