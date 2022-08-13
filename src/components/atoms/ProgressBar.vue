<template>
  <div class="progress-bar-container">
    <div class="progress-bar-filled" :style="`width:${width}%`"></div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
interface ProgressBarProps {
  width: number;
}
defineProps<ProgressBarProps>();
</script>

<style lang="scss" scoped>
.progress-bar-container {
  height: 0.8rem;
  width: 100%;
  background-color: var(--color-primary-light);
}

.progress-bar-filled {
  height: 100%;
  transition: 0.5s width;
  background-color: var(--color-primary);
}
</style>
