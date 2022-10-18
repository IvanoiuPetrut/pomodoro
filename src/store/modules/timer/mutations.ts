import { MutationTree } from "vuex";
import { TimerState } from "./types";

export const mutations: MutationTree<TimerState> = {
  SET_MINUTES(state, minutes: number) {
    state.minutes = minutes;
  },

  SET_SECONDS(state, seconds: number) {
    state.seconds = seconds;
  },
};
