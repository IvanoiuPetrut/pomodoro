<template>
  <h1>Pomodoro</h1>
  <TreeProgress></TreeProgress>
  <TimerProgress></TimerProgress>
</template>

<script lang="ts">
import TimerProgress from "./components/TimerProgress.vue";
import TreeProgress from "./components/TreeProgress.vue";

export default {
  name: "App",
  components: {
    TimerProgress,
    TreeProgress,
  },
};
</script>
