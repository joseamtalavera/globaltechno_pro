<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

interface Props {
  delay?: number;
  staggerMs?: number;
  duration?: number;
  threshold?: number;
}

const props = withDefaults(defineProps<Props>(), {
  delay: 0,
  staggerMs: 60,
  duration: 600,
  threshold: 0.12
});

const elRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);
let observer: IntersectionObserver | null = null;

// Recursively walk children; replace each text node with a fragment
// where every word gets wrapped in <span class="w">. Inline tags
// (em, i, strong, span) are preserved by descending into them.
function wrapWords(node: Node): void {
  if (node.nodeType === Node.TEXT_NODE) {
    const text = node.textContent ?? '';
    if (!text.trim()) return;
    const frag = document.createDocumentFragment();
    text.split(/(\s+)/).forEach(t => {
      if (t === '') return;
      if (/^\s+$/.test(t)) {
        frag.appendChild(document.createTextNode(t));
      } else {
        const span = document.createElement('span');
        span.className = 'w';
        span.textContent = t;
        frag.appendChild(span);
      }
    });
    node.parentNode?.replaceChild(frag, node);
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    const el = node as HTMLElement;
    if (el.classList.contains('w')) return; // already wrapped
    Array.from(el.childNodes).forEach(c => wrapWords(c));
  }
}

onMounted(() => {
  if (!elRef.value || typeof window === 'undefined') return;

  Array.from(elRef.value.childNodes).forEach(c => wrapWords(c));

  const words = elRef.value.querySelectorAll<HTMLSpanElement>('.w');
  words.forEach((w, i) => {
    w.style.transitionDelay = `${props.delay + i * props.staggerMs}ms`;
  });

  if (typeof IntersectionObserver === 'undefined') {
    isVisible.value = true;
    return;
  }

  observer = new IntersectionObserver(
    entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          isVisible.value = true;
          if (observer && entry.target) observer.unobserve(entry.target);
        }
      }
    },
    { threshold: props.threshold, rootMargin: '0px 0px -8% 0px' }
  );

  observer.observe(elRef.value);
});

onUnmounted(() => {
  observer?.disconnect();
  observer = null;
});
</script>

<template>
  <div
    ref="elRef"
    class="reveal-text"
    :class="{ 'is-in': isVisible }"
    :style="{ '--reveal-duration': `${duration}ms` }"
  >
    <slot />
  </div>
</template>

<style scoped>
.reveal-text :deep(.w) {
  display: inline-block;
  opacity: 0;
  transform: translateY(0.3em);
  transition:
    opacity var(--reveal-duration, 600ms) var(--ease-out),
    transform var(--reveal-duration, 600ms) var(--ease-out);
  will-change: opacity, transform;
}

.reveal-text.is-in :deep(.w) {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .reveal-text :deep(.w) {
    opacity: 1;
    transform: none;
    transition: none;
    transition-delay: 0 !important;
  }
}
</style>
