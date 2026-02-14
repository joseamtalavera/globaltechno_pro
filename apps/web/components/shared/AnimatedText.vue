<script setup lang="ts">
interface Props {
  text: string;
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  staggerMs?: number;
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'h2',
  staggerMs: 80
});

const { elementRef, isVisible } = useScrollAnimation();

const words = computed(() => props.text.split(' '));
</script>

<template>
  <component
    :is="tag"
    ref="elementRef"
    class="animated-text"
    :class="{ 'is-visible': isVisible }"
  >
    <span
      v-for="(word, i) in words"
      :key="i"
      class="animated-text__word"
      :style="{ '--word-delay': `${i * staggerMs}ms` }"
    >
      {{ word }}<template v-if="i < words.length - 1">&nbsp;</template>
    </span>
  </component>
</template>

<style scoped>
.animated-text {
  display: inline;
}

.animated-text__word {
  display: inline-block;
  opacity: 0;
  transform: translateY(12px);
  transition:
    opacity 500ms var(--ease-out),
    transform 500ms var(--ease-out);
  transition-delay: var(--word-delay);
}

.animated-text.is-visible .animated-text__word {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .animated-text__word {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}
</style>
