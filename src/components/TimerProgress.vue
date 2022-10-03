<template>
  <div class="flex flex-col items-center gap-12">
    <p
      class="text-6xl font-medium text-center tracking-wider text-emerald-600 drop-shadow"
    >
      {{ timer }}
    </p>
    <div class="flex gap-8">
      <button
        @click="startPauseTimer"
        class="text-2xl uppercase tracking-wider bg-emerald-400 py-2 w-28 rounded-lg pointer transition hover:bg-emerald-500"
      >
        <span v-if="isTimerRunning">Pause</span>
        <span v-else>Start</span>
      </button>
      <button
        class="text-2xl uppercase tracking-wider bg-emerald-400 py-2 w-28 rounded-lg pointer transition hover:bg-emerald-500"
      >
        Stop
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  name: "TimerProgress",
  setup() {
    const timer = ref("25:00");
    let isTimerRunning = ref(false);
    let clockInterval: number;

    const startPauseTimer = () => {
      if (isTimerRunning.value) {
        stopTimer();
        isTimerRunning.value = !isTimerRunning.value;
      } else if (timer.value !== "0:00") {
        startTimer();
        isTimerRunning.value = !isTimerRunning.value;
      }
    };

    const nextTick = () => {
      const [minutes, seconds] = timer.value.split(":");
      const newSeconds = parseInt(seconds) - 1;
      const newMinutes = parseInt(minutes) - (newSeconds < 0 ? 1 : 0);
      console.log(newMinutes, newSeconds);
      timer.value = `${newMinutes}:${
        newSeconds < 10 && newSeconds > 0 ? 0 : ""
      }${newSeconds < 0 ? 59 : newSeconds}`;
      if (newMinutes === 0 && newSeconds === 0) {
        stopTimer();
        isTimerRunning.value = false;
      }
    };

    const startTimer = () => {
      clockInterval = setInterval(nextTick, 1000);
      console.log(clockInterval);
    };

    const stopTimer = () => {
      clearInterval(clockInterval);
    };

    return {
      timer,
      startTimer,
      stopTimer,
      startPauseTimer,
      isTimerRunning,
    };
  },
};
</script>
