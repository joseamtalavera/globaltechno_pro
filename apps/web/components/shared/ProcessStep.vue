<script setup lang="ts">
interface Props {
  number: string;
  title: string;
  description: string;
}

defineProps<Props>();

const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.4 });
</script>

<template>
  <div
    ref="elementRef"
    class="process-step"
    :class="{ 'is-visible': isVisible }"
  >
    <span class="process-step__number">{{ number }}</span>

    <h3 class="process-step__title">
      <span class="process-step__title-base">{{ title }}</span>
      <span class="process-step__title-fill" aria-hidden="true">{{ title }}</span>
    </h3>

    <p class="process-step__description">{{ description }}</p>
  </div>
</template>

<style scoped>
.process-step {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.process-step__number {
  font-family: var(--font-display);
  font-size: clamp(3rem, 6vw, 5rem);
  line-height: 1;
  color: var(--color-accent);
  letter-spacing: -0.04em;
}

.process-step__title {
  position: relative;
  display: block;
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 3vw, 2.4rem);
  line-height: 1.1;
  letter-spacing: -0.025em;
  color: var(--color-text-muted);
}

.process-step__title-base {
  display: block;
}

.process-step__title-fill {
  position: absolute;
  inset: 0;
  color: var(--color-text-primary);
  clip-path: inset(0 100% 0 0);
  transition: clip-path 1.4s var(--ease-out);
  pointer-events: none;
}

.process-step.is-visible .process-step__title-fill {
  clip-path: inset(0 0 0 0);
}

.process-step__description {
  font-size: 0.95rem;
  line-height: 1.55;
  color: var(--color-text-secondary);
  max-width: 32ch;
}

@media (prefers-reduced-motion: reduce) {
  .process-step__title {
    color: var(--color-text-primary);
  }
  .process-step__title-fill {
    display: none;
  }
}
</style>
