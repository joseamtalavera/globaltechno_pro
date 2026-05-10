<script setup lang="ts">
const statements = [
  { text: 'We don\'t sell SaaS.', tag: 'No products. No license fees. We build for you.' },
  { text: 'Real engineering, signed off.', tag: 'Tested, documented, owned by a named professional.' },
  { text: 'Today\'s work, tomorrow\'s stack.', tag: 'Web2 today, web3 / cyber / agents next.' }
];
</script>

<template>
  <section class="whats-different section section--light">
    <div class="whats-different__inner section__inner">
      <SharedScrollReveal>
        <span class="section-label">What's different</span>
      </SharedScrollReveal>

      <ul class="whats-different__list">
        <SharedScrollReveal
          v-for="(s, i) in statements"
          :key="s.text"
          :delay="i * 120"
        >
          <li class="whats-different__item">
            <p class="whats-different__statement">{{ s.text }}</p>
            <p class="whats-different__tag">{{ s.tag }}</p>
          </li>
        </SharedScrollReveal>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.whats-different__inner {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.whats-different__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.whats-different__item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: baseline;
  gap: 3rem;
  padding: 2.5rem 0;
  border-top: 1px solid var(--color-border);
}

.whats-different__list > :last-child .whats-different__item {
  border-bottom: 1px solid var(--color-border);
}

.whats-different__statement {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3.75rem);
  letter-spacing: -0.03em;
  line-height: 1.05;
  color: var(--color-text-primary);
}

.whats-different__tag {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  letter-spacing: 0.04em;
  color: var(--color-text-secondary);
  line-height: 1.55;
  max-width: 36ch;
  justify-self: end;
}

@media (max-width: 768px) {
  .whats-different__item {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1.75rem 0;
  }

  .whats-different__tag {
    justify-self: start;
  }
}
</style>
