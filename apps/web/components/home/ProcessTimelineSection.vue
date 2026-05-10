<script setup lang="ts">
const steps = [
  {
    number: '01',
    title: 'Problem call.',
    detail:
      '90 minutes. We listen, restate, and tell you whether we\'re a fit. Free, no deck.'
  },
  {
    number: '02',
    title: 'Scope week.',
    detail:
      'One paid week to write the smallest possible thing that solves it. Fixed price, fixed deliverable.'
  },
  {
    number: '03',
    title: 'Build sprint.',
    detail:
      'Two- to six-week sprints with weekly demos. You can stop after any of them.'
  },
  {
    number: '04',
    title: 'Hand-off.',
    detail:
      'Code, infra, docs, and a 30-day support window. Then it\'s yours — or we keep running it.'
  }
];
</script>

<template>
  <section class="process section section--alt">
    <div class="process__inner section__inner">
      <SharedScrollReveal>
        <div class="process__head">
          <SharedKicker label="How a project goes" ordinal="04" />
          <h2 class="process__title text-balance">
            Four weeks from <em>problem</em> to <em>production</em>.
          </h2>
        </div>
      </SharedScrollReveal>

      <div class="process__steps">
        <SharedScrollReveal
          v-for="(s, i) in steps"
          :key="s.number"
          :delay="i * 100"
        >
          <article class="process-card">
            <span class="process-card__num">{{ s.number }}</span>
            <h3 class="process-card__title">{{ s.title }}</h3>
            <p class="process-card__detail">{{ s.detail }}</p>
          </article>
        </SharedScrollReveal>
      </div>
    </div>
  </section>
</template>

<style scoped>
.process__inner {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.process__head {
  max-width: 820px;
}

.process__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 4rem);
  line-height: 1.0;
  letter-spacing: -0.03em;
  margin-top: 0.6rem;
  color: var(--ink);
}

.process__title em {
  font-style: italic;
  color: var(--accent);
}

.process__steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.process-card {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  padding: 1.75rem 1.5rem 1.85rem;
  background: var(--paper-soft);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  transition: transform var(--duration-fast) ease, border-color var(--duration-fast) ease;
}

.process-card:hover {
  transform: translateY(-2px);
  border-color: var(--ink-faint);
}

.process-card__num {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  color: var(--accent);
}

.process-card__title {
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 2.2vw, 1.75rem);
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: var(--ink);
  margin: 0;
}

.process-card__detail {
  font-family: var(--font-body);
  font-size: 0.92rem;
  color: var(--ink-mute);
  line-height: 1.55;
  margin: 0;
}

@media (max-width: 1024px) {
  .process__steps { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .process__steps { grid-template-columns: 1fr; }
}
</style>
