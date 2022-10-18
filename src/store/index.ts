import { createStore, StoreOptions } from "vuex";
import { RootState } from "./types";
import { timer } from "./modules/timer";

// StoreOptions<RootState> represents the type of the options object passed to the Vuex store constructor.
// The StoreOptions interface is defined in the Vuex library.
// RootState is the type of the root state object.
const store: StoreOptions<RootState> = {
  state: {
    version: "1.0.0", // a simple property
  },
  modules: {
    timer,
  },
};

export default createStore<RootState>(store);
