<script setup>
    import { computed } from 'vue';
    const value = defineProps(['imdbRating']);
    const circumference = 2 * Math.PI * 40;
    const strokeOffset = computed(() => {
        return circumference * (1 - value.imdbRating / 10);
    });    
</script>

<template>
  <div class="progress-wrapper">
    <svg width="80" height="80" viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke-width="6"
        fill="transparent"
        class="background-circle"
      />
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke-width="6"
        fill="transparent"
        class="progress-circle"
        :style="{ strokeDashoffset: strokeOffset }"
      />
      <text x="50" y="58" text-anchor="middle" class="text" fill="white">
        {{ value.imdbRating }}
      </text>
    </svg>
  </div>
</template>

<style scoped>
  .text {
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
  }

  .progress-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .background-circle {
    stroke: var(--c-blue);
    opacity: 30%;
  }

  .progress-circle {
    stroke: var(--c-purple);
    stroke-linecap: butt;
    stroke-dasharray: 251;
    transform: rotate(-90deg);
    transform-origin: center;
  }
</style>