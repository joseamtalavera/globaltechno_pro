<script setup lang="ts">
interface MarqueeItem {
  label: string;
  status?: 'now' | 'coming';
}

interface Props {
  items: MarqueeItem[];
  speed?: number;
}

const props = withDefaults(defineProps<Props>(), {
  speed: 32
});

const duplicated = computed<MarqueeItem[]>(() => [...props.items, ...props.items]);
</script>

<template>
  <div
    class="marquee"
    :style="{ '--marquee-duration': `${speed}s` }"
    aria-hidden="true"
  >
    <div class="marquee__track">
      <span
        v-for="(item, i) in duplicated"
        :key="i"
        class="marquee__item"
        :class="item.status ? `marquee__item--${item.status}` : null"
      >
        {{ item.label }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.marquee {
  overflow: hidden;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  padding: 1.1rem 0;
  user-select: none;
  background: var(--paper);
}

.marquee__track {
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  animation: marquee-scroll var(--marquee-duration) linear infinite;
  will-change: transform;
}

.marquee:hover .marquee__track {
  animation-play-state: paused;
}

.marquee__item {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-mute);
  flex-shrink: 0;
}

.marquee__item::after {
  content: '·';
  margin: 0 2rem;
  color: var(--ink-faint);
}

.marquee__item--now {
  color: var(--ink);
  font-weight: 500;
}

.marquee__item--coming {
  color: var(--accent);
  font-weight: 500;
}

@keyframes marquee-scroll {
  from { transform: translate3d(0, 0, 0); }
  to { transform: translate3d(-50%, 0, 0); }
}

@media (prefers-reduced-motion: reduce) {
  .marquee__track {
    animation: none;
    flex-wrap: wrap;
    white-space: normal;
    justify-content: center;
    gap: 0.5rem 1rem;
  }

  .marquee__item::after {
    margin: 0 0.6rem;
  }
}
</style>
