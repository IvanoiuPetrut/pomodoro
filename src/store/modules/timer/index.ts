import { Module } from "vuex";
import { RootState } from "@/store/types";
import { TimerState } from "./types";
import { getters } from "./getter";
import { mutations } from "./mutations";

const state: TimerState = {
  minutes: 0,
  seconds: 0,
  workIntervals: 0,
  timerType: "work",
  isRunning: false,
};

export const timer: Module<TimerState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
};
