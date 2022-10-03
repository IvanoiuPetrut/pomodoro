<template>
  <div>
    <h1>Pomodoro</h1>
    <TimerProgress></TimerProgress>
  </div>
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

<style src="./assets/tailwind.css"></style>
