<template>
  <div class="flex flex-col items-center gap-12">
    <p
      class="text-6xl font-medium text-center tracking-wider text-emerald-600 drop-shadow"
    >
      {{ workInterval.minutes }}:{{ workInterval.seconds }}
    </p>
    <div class="flex gap-8">
      <button
        @click="handleStarPause"
        class="text-2xl uppercase tracking-wider bg-emerald-400 py-2 w-28 rounded-lg pointer transition hover:bg-emerald-500"
      >
        <span v-if="isTimerRunning">Pause</span>
        <span v-else>Start</span>
      </button>
      <button
        @click="stopTimer"
        :class="{
          'text-2xl uppercase tracking-wider bg-red-400 py-2 w-28 rounded-lg pointer transition hover:bg-red-500':
            isTimerRunning,
          'text-2xl uppercase tracking-wider bg-red-400 py-2 w-28 rounded-lg pointer transition hover:bg-red-500 opacity-50 cursor-not-allowed':
            !isTimerRunning,
        }"
      >
        Stop
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import store from "../store";
import { mapState } from "vuex";

export default {
  name: "TimerProgress",
  setup() {
    const workInterval = ref({
      minutes: 0,
      seconds: 20,
    });
    const pauseInterval = ref({
      minutes: 0,
      seconds: 10,
    });

    let a = mapState(["timerType"]);
    console.log(a);

    // let b = mapState({
    //   timerType: (state) => state.timer.timerType,
    //   minutes: (state) => state.timer.minutes,
    // });

    // const isTimerRunning2 = mapState(["isTimerRunning"]);

    console.log(store.state.version);
    // console.log(store.state.isTimerRunning);
    // console.log(this.$store.state.version);
    // console.log(store.state.timer.isTimerRunning);
    // console.log(this.$store.state.timer.isTimerRunning);

    let isTimerRunning = ref(false);
    let clockInterval: number;

    const handleStarPause = () => {
      console.log(isTimerRunning.value);
      if (!isTimerRunning.value) {
        startTimer();
        isTimerRunning.value = true;
      } else {
        pauseTimer();
        isTimerRunning.value = false;
      }
    };

    const nextTick = (timer: {
      value: { seconds: number; minutes: number };
    }) => {
      const newSeconds = timer.value.seconds - 1;
      const newMinutes = timer.value.minutes - (newSeconds < 0 ? 1 : 0);
      timer.value = {
        minutes: newMinutes,
        seconds: newSeconds < 0 ? 59 : newSeconds,
      };
      if (newMinutes === 0 && newSeconds === 0) {
        pauseTimer();
        isTimerRunning.value = false;
      }
      return timer;
    };

    const startTimer = () => {
      clockInterval = setInterval(nextTick, 1000, workInterval);
    };

    const stopTimer = () => {
      if (isTimerRunning.value) {
        clearInterval(clockInterval);
        isTimerRunning.value = false;
        workInterval.value = {
          minutes: 25,
          seconds: 0,
        };
      }
    };

    const pauseTimer = () => {
      clearInterval(clockInterval);
    };

    return {
      workInterval,
      pauseInterval,
      startTimer,
      stopTimer,
      pauseTimer,
      handleStarPause,
      isTimerRunning,
    };
  },
};
</script>
