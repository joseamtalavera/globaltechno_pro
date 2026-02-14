<script setup lang="ts">
interface Props {
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'fade' | 'scale';
  duration?: number;
  once?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  delay: 0,
  direction: 'up',
  duration: 600,
  once: true
});

const { elementRef, isVisible } = useScrollAnimation({ once: props.once });
</script>

<template>
  <div
    ref="elementRef"
    class="scroll-reveal"
    :class="[`scroll-reveal--${direction}`, { 'is-visible': isVisible }]"
    :style="{
      '--sr-delay': `${delay}ms`,
      '--sr-duration': `${duration}ms`
    }"
  >
    <slot />
  </div>
</template>

<style scoped>
.scroll-reveal {
  will-change: opacity, transform;
  transition-delay: var(--sr-delay);
}

.scroll-reveal--up {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity var(--sr-duration) var(--ease-out),
    transform var(--sr-duration) var(--ease-out);
}

.scroll-reveal--left {
  opacity: 0;
  transform: translateX(-24px);
  transition:
    opacity var(--sr-duration) var(--ease-out),
    transform var(--sr-duration) var(--ease-out);
}

.scroll-reveal--right {
  opacity: 0;
  transform: translateX(24px);
  transition:
    opacity var(--sr-duration) var(--ease-out),
    transform var(--sr-duration) var(--ease-out);
}

.scroll-reveal--fade {
  opacity: 0;
  transition: opacity var(--sr-duration) var(--ease-out);
}

.scroll-reveal--scale {
  opacity: 0;
  transform: scale(0.96);
  transition:
    opacity var(--sr-duration) var(--ease-out),
    transform var(--sr-duration) var(--ease-out);
}

.scroll-reveal.is-visible {
  opacity: 1;
  transform: translateY(0) translateX(0) scale(1);
}

@media (prefers-reduced-motion: reduce) {
  .scroll-reveal {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}
</style>
