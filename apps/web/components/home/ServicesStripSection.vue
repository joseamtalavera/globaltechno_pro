<script setup lang="ts">
const now = [
  { label: 'Full-stack apps', detail: 'End-to-end web platforms' },
  { label: 'Testing & QA', detail: 'Automated + signed reports' },
  { label: 'Software architecture', detail: 'Decisions before code' }
];

const next = [
  { label: 'Web3 & on-chain', detail: 'Settlement, signing, provenance' },
  { label: 'Cybersecurity', detail: 'Threat-model, harden, prove' },
  { label: 'Agentic systems', detail: 'Tool use with guardrails' }
];
</script>

<template>
  <section class="services-strip section section--alt">
    <div class="services-strip__inner section__inner">
      <SharedScrollReveal>
        <div class="services-strip__head">
          <SharedKicker label="What we do" ordinal="01" />
          <h2 class="services-strip__title text-balance">
            Three lanes today. <em>Three more</em> on the way.
          </h2>
        </div>
      </SharedScrollReveal>

      <div class="services-strip__cols">
        <SharedScrollReveal>
          <div class="services-strip__col">
            <span class="pill pill--now">
              <span class="pill__dot" aria-hidden="true" />
              Now · Live
            </span>
            <ul class="services-strip__list">
              <li v-for="(s, i) in now" :key="s.label" class="services-strip__row">
                <span class="services-strip__num">0{{ i + 1 }}</span>
                <div class="services-strip__body">
                  <span class="services-strip__label">{{ s.label }}</span>
                  <span class="services-strip__detail">{{ s.detail }}</span>
                </div>
              </li>
            </ul>
          </div>
        </SharedScrollReveal>

        <SharedScrollReveal :delay="120">
          <div class="services-strip__col services-strip__col--next">
            <span class="pill pill--coming">
              <span class="pill__dot" aria-hidden="true" />
              Next · Design partners open
            </span>
            <ul class="services-strip__list">
              <li v-for="(s, i) in next" :key="s.label" class="services-strip__row">
                <span class="services-strip__num">0{{ i + 4 }}</span>
                <div class="services-strip__body">
                  <span class="services-strip__label">{{ s.label }}</span>
                  <span class="services-strip__detail">{{ s.detail }}</span>
                </div>
              </li>
            </ul>
          </div>
        </SharedScrollReveal>
      </div>

      <SharedScrollReveal>
        <div class="services-strip__foot">
          <UiButton variant="link-ink" to="/approach">
            See the full approach
          </UiButton>
        </div>
      </SharedScrollReveal>
    </div>
  </section>
</template>

<style scoped>
.services-strip__inner {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.services-strip__head {
  max-width: 760px;
}

.services-strip__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 4rem);
  line-height: 1.0;
  letter-spacing: -0.03em;
  margin-top: 0.6rem;
  color: var(--ink);
}

.services-strip__title em {
  font-style: italic;
  color: var(--accent);
}

.services-strip__cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.services-strip__col {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.services-strip__col--next {
  opacity: 0.85;
}

.services-strip__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.services-strip__row {
  display: grid;
  grid-template-columns: 3rem 1fr;
  gap: 1.25rem;
  align-items: baseline;
  padding: 1.25rem 0;
  border-top: 1px solid var(--line);
}

.services-strip__list > :last-child {
  border-bottom: 1px solid var(--line);
}

.services-strip__num {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  color: var(--ink-faint);
}

.services-strip__body {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.services-strip__label {
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 2.5vw, 1.85rem);
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: var(--ink);
}

.services-strip__detail {
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: var(--ink-mute);
  line-height: 1.45;
}

.services-strip__foot {
  display: flex;
  justify-content: flex-end;
  padding-top: 1rem;
  border-top: 1px solid var(--line);
}

@media (max-width: 820px) {
  .services-strip__cols {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  .services-strip__foot {
    justify-content: flex-start;
  }
}
</style>
