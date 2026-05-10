<script setup lang="ts">
interface Props {
  text?: string;
}

withDefaults(defineProps<Props>(), {
  text: 'Globaltechno'
});
</script>

<template>
  <div class="giant-wordmark" aria-hidden="true">
    <span class="giant-wordmark__text">{{ text }}</span>
  </div>
</template>

<style scoped>
.giant-wordmark {
  width: 100%;
  overflow: hidden;
  line-height: 0.85;
  user-select: none;
}

.giant-wordmark__text {
  display: block;
  font-family: var(--font-display);
  font-size: clamp(6rem, 22vw, 22rem);
  letter-spacing: -0.05em;
  color: var(--ink);
  white-space: nowrap;
  font-weight: 400;
}

@media (prefers-reduced-motion: no-preference) {
  .giant-wordmark__text {
    transition: color var(--duration-slow) var(--ease);
  }
}
</style>
