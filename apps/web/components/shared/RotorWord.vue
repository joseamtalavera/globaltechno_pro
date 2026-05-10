<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

interface Props {
  words: string[];
  interval?: number;
  paused?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  interval: 2400,
  paused: false
});

const index = ref(0);
let timer: ReturnType<typeof setInterval> | null = null;

function reducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

onMounted(() => {
  if (props.words.length <= 1 || props.paused || reducedMotion()) return;
  timer = setInterval(() => {
    index.value = (index.value + 1) % props.words.length;
  }, props.interval);
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>

<template>
  <span class="rotor" aria-live="polite">
    <Transition name="rotor" mode="out-in">
      <span :key="words[index]" class="rotor__word">{{ words[index] }}</span>
    </Transition>
  </span>
</template>

<style scoped>
.rotor {
  display: inline-flex;
  align-items: baseline;
  position: relative;
}

.rotor__word {
  font-style: italic;
  color: var(--accent);
  font-family: inherit;
  display: inline-block;
}

.rotor-enter-active,
.rotor-leave-active {
  transition:
    opacity 280ms var(--ease),
    transform 280ms var(--ease);
}

.rotor-enter-from {
  opacity: 0;
  transform: translateY(0.3em);
}

.rotor-leave-to {
  opacity: 0;
  transform: translateY(-0.3em);
}

@media (prefers-reduced-motion: reduce) {
  .rotor-enter-active,
  .rotor-leave-active {
    transition: none;
  }
  .rotor-enter-from,
  .rotor-leave-to {
    transform: none;
  }
}
</style>
