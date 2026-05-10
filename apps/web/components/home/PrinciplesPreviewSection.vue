<script setup lang="ts">
const principles = [
  { num: '01', title: 'Smaller, sooner.',          body: 'The first working version is the best brief.' },
  { num: '02', title: 'Boring on purpose.',        body: 'Year three is a feature.' },
  { num: '03', title: 'One throat to choke.',      body: 'One senior on the project, end to end.' },
  { num: '04', title: 'Stop after any sprint.',    body: 'Lock-in is a smell, not a feature.' },
  { num: '05', title: 'Tests before stories.',     body: 'A failing test means we understand the bug.' },
  { num: '06', title: 'No retainers.',             body: 'We charge for the thing we ship.' }
];
</script>

<template>
  <section class="principles-preview section section--light">
    <div class="principles-preview__inner section__inner">
      <SharedScrollReveal>
        <div class="principles-preview__head">
          <SharedKicker label="How we decide" ordinal="03" />
          <h2 class="principles-preview__title text-balance">
            Six things we believe.
          </h2>
          <p class="principles-preview__lede">
            We hold these loosely — they shape every call we make on a project.
          </p>
        </div>
      </SharedScrollReveal>

      <div class="principles-preview__grid">
        <SharedScrollReveal
          v-for="(p, i) in principles"
          :key="p.num"
          :delay="i * 60"
        >
          <article class="principle-card">
            <span class="principle-card__num">{{ p.num }}</span>
            <h3 class="principle-card__title">{{ p.title }}</h3>
            <p class="principle-card__body">{{ p.body }}</p>
          </article>
        </SharedScrollReveal>
      </div>

      <SharedScrollReveal>
        <div class="principles-preview__foot">
          <UiButton variant="link-ink" to="/about">
            Read about the studio
          </UiButton>
        </div>
      </SharedScrollReveal>
    </div>
  </section>
</template>

<style scoped>
.principles-preview__inner {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.principles-preview__head {
  max-width: 760px;
}

.principles-preview__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 4rem);
  line-height: 1.0;
  letter-spacing: -0.03em;
  margin: 0.6rem 0 0.9rem;
  color: var(--ink);
}

.principles-preview__lede {
  font-family: var(--font-body);
  font-size: clamp(1.05rem, 1.4vw, 1.15rem);
  color: var(--ink-mute);
  max-width: 50ch;
  line-height: 1.55;
}

.principles-preview__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.principle-card {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 1.5rem 1.4rem 1.6rem;
  background: var(--paper-soft);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  transition:
    border-color var(--duration-fast) ease,
    transform var(--duration-fast) ease;
}

.principle-card:hover {
  border-color: var(--ink-faint);
  transform: translateY(-2px);
}

.principle-card__num {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  color: var(--accent);
}

.principle-card__title {
  font-family: var(--font-display);
  font-size: clamp(1.25rem, 1.9vw, 1.5rem);
  letter-spacing: -0.02em;
  line-height: 1.15;
  color: var(--ink);
}

.principle-card__body {
  font-family: var(--font-body);
  font-size: 0.92rem;
  color: var(--ink-mute);
  line-height: 1.55;
  margin: 0;
}

.principles-preview__foot {
  display: flex;
  justify-content: flex-end;
}

@media (max-width: 900px) {
  .principles-preview__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .principles-preview__grid {
    grid-template-columns: 1fr;
  }
  .principles-preview__foot {
    justify-content: flex-start;
  }
}
</style>
