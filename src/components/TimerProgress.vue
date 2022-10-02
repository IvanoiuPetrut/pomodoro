<template>
  <div>
    <p>{{ timer }}</p>
    <button @click="handleClick">
      <span v-if="isTimerRunning">Stop</span>
      <span v-else>Start</span>
    </button>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  name: "TimerProgress",
  setup() {
    const timer = ref("5:12");
    let isTimerRunning = ref(false);
    let clockInterval: number;

    const handleClick = () => {
      if (isTimerRunning.value) {
        stopTimer();
        isTimerRunning.value = !isTimerRunning.value;
      } else {
        startTimer();
        isTimerRunning.value = !isTimerRunning.value;
      }
    };

    const nextTick = () => {
      const [minutes, seconds] = timer.value.split(":");
      const newSeconds = parseInt(seconds) - 1;
      const newMinutes = parseInt(minutes) - (newSeconds < 0 ? 1 : 0);
      timer.value = `${newMinutes}:${newSeconds < 10 ? 0 : ""}${
        newSeconds < 0 ? 59 : newSeconds
      }`;
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
      handleClick,
      isTimerRunning,
    };
  },
};
</script>

<!-- <style lang=""></style> -->
