<template>
  <div>
    <p>{{ timer }}</p>
    <button @click="startTimer">Start</button>
  </div>
</template>

<script lang="ts">
import { ref, computed } from "vue";

export default {
  name: "TimerProgress",
  setup() {
    const timer = ref("0:12");

    const currentTimer = computed(() => {
      return timer.value;
    });

    const nextTick = () => {
      const [minutes, seconds] = timer.value.split(":");
      const newSeconds = parseInt(seconds) - 1;
      const newMinutes = parseInt(minutes) - (newSeconds < 0 ? 1 : 0);
      timer.value = `${newMinutes}:${newSeconds < 0 ? 59 : newSeconds}`;
    };

    const startTimer = () => {
      setInterval(nextTick, 1000);
    };

    return {
      timer,
      startTimer,
      currentTimer,
    };
  },
};
</script>

<!-- <style lang=""></style> -->
