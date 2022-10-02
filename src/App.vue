<template>
  <h1>Pomodoro</h1>
  <TimerProgress></TimerProgress>
</template>

<script lang="ts">
import TimerProgress from "./components/TimerProgress.vue";

export default {
  name: "App",
  components: {
    TimerProgress,
  },
};
</script>
