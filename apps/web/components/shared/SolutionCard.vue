<script setup lang="ts">
interface Props {
  number: string;
  title: string;
  description: string;
  status: 'now' | 'coming';
  span?: 1 | 2 | 3;
}

withDefaults(defineProps<Props>(), {
  span: 1
});
</script>

<template>
  <article
    class="solution-card"
    :class="[
      `solution-card--${status}`,
      `solution-card--span-${span}`
    ]"
  >
    <span class="pill" :class="`pill--${status}`">
      <span class="pill__dot" />
      {{ status === 'now' ? 'Now' : 'Coming' }}
    </span>

    <span class="solution-card__number">{{ number }}</span>

    <div class="solution-card__body">
      <h3 class="solution-card__title">{{ title }}</h3>
      <p class="solution-card__description">{{ description }}</p>
    </div>
  </article>
</template>

<style scoped>
.solution-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 2rem;
  background: var(--paper-soft);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  transition:
    transform var(--duration-normal) var(--ease-out),
    border-color var(--duration-normal) var(--ease-out),
    box-shadow var(--duration-normal) var(--ease-out);
  min-height: 260px;
}

.solution-card:hover {
  transform: translateY(-2px);
  border-color: var(--ink-faint);
  box-shadow: 0 8px 28px rgba(14, 14, 16, 0.05);
}

.solution-card--span-2 {
  grid-column: span 2;
}

.solution-card--span-3 {
  grid-column: 1 / -1;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  gap: 3rem;
}

.solution-card--span-3 .solution-card__body {
  margin-top: 0;
  flex: 1;
}

.solution-card--span-3 .solution-card__title {
  font-size: clamp(2rem, 4vw, 3rem);
  max-width: 16ch;
}

.solution-card--span-3 .solution-card__description {
  max-width: 52ch;
}

.solution-card--coming {
  background: transparent;
}

.solution-card--coming .solution-card__body,
.solution-card--coming .solution-card__number {
  opacity: 0.7;
}

.solution-card .pill {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
}

.solution-card__number {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-faint);
}

.solution-card__body {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  margin-top: auto;
}

.solution-card__title {
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 2.6vw, 2.1rem);
  line-height: 1.1;
  letter-spacing: -0.025em;
  color: var(--ink);
}

.solution-card__description {
  font-size: 0.95rem;
  line-height: 1.55;
  color: var(--ink-mute);
  max-width: 38ch;
}

@media (max-width: 768px) {
  .solution-card--span-2,
  .solution-card--span-3 {
    grid-column: auto;
  }

  .solution-card--span-3 {
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    gap: 2.5rem;
  }
}
</style>
