import { GetterTree } from "vuex";
import { TimerState } from "./types";
import { RootState } from "@/store/types";

export const getters: GetterTree<TimerState, RootState> = {
  getTimer(state): string {
    return `${state.minutes}:${state.seconds}`;
  },
};
