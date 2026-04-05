<script setup lang="ts">
import { useScrollAnimation } from '~/composables/useScrollAnimation';
import { useAnimatedCounter } from '~/composables/useAnimatedCounter';

interface Stat {
  value: number;
  suffix?: string;
  label: string;
  decimal?: boolean;
}

const props = defineProps<{
  label?: string;
  heading?: string;
  subheading?: string;
  stats: Stat[];
}>();

const { elementRef, isVisible } = useScrollAnimation();

// Pre-create animated counters for each stat
const counters = props.stats.map((stat) =>
  useAnimatedCounter(stat.value, isVisible, 1600)
);

const formatValue = (value: number, stat: Stat) => {
  if (stat.decimal) {
    return (value / 10).toFixed(1);
  }
  return value.toString();
};
</script>

<template>
  <section class="stats section section--light">
    <div class="stats__inner section__inner" ref="elementRef">
      <div v-if="heading || label" class="stats__header">
        <span v-if="label" class="section-label section-label--light">{{ label }}</span>
        <h2 v-if="heading" class="stats__heading">{{ heading }}</h2>
        <p v-if="subheading" class="stats__subheading">{{ subheading }}</p>
      </div>

      <div class="stats__grid">
        <div
          v-for="(stat, i) in stats"
          :key="stat.label"
          class="stat"
        >
          <div class="stat__value">
            <span>{{ formatValue(counters[i].value, stat) }}</span><span v-if="stat.suffix" class="stat__suffix">{{ stat.suffix }}</span>
          </div>
          <div class="stat__label">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats {
  background: white;
}

.stats__header {
  text-align: center;
  max-width: 640px;
  margin: 0 auto 3rem;
}

.stats__heading {
  margin-top: 0.75rem;
  color: var(--color-text-primary);
}

.stats__subheading {
  margin-top: 1rem;
  font-size: 1.05rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
}

.stats__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.stat {
  text-align: center;
  padding: 2rem 1rem;
}

.stat__value {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 400;
  color: var(--color-accent);
  line-height: 1;
  display: inline-flex;
  align-items: baseline;
}

.stat__suffix {
  margin-left: 0.125rem;
}

.stat__label {
  margin-top: 0.75rem;
  font-size: 0.9375rem;
  color: var(--color-text-secondary);
  letter-spacing: 0.02em;
}

@media (max-width: 720px) {
  .stats__grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
</style>
