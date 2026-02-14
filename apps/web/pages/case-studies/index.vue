<script setup lang="ts">
import type { CaseStudySummary } from '@globaltechno/shared';

useSeoMeta({
  title: 'Case Studies',
  description: 'Selected Globaltechno engineering engagements with defined constraints and measurable outcomes.',
  ogTitle: 'Case Studies | Globaltechno'
});

const { listCaseStudies } = useApi();

const { data, error } = await useAsyncData<CaseStudySummary[]>('case-studies', () =>
  listCaseStudies()
);
</script>

<template>
  <div>
    <section class="hero section section--dark grain-overlay">
      <SharedGradientMesh variant="hero" />
      <div class="hero__inner section__inner">
        <SharedScrollReveal>
          <span class="section-label">Selected Work</span>
          <h1 class="hero__title">Case Studies</h1>
          <p class="hero__subtitle">
            Representative engineering engagements with defined constraints and measurable outcomes.
          </p>
        </SharedScrollReveal>
      </div>
    </section>

    <section class="cases section section--light">
      <div class="cases__inner section__inner">
        <p v-if="error" class="cases__error" role="alert">Failed to load case studies.</p>

        <div v-else class="cases__grid" aria-label="Case study list">
          <SharedScrollReveal
            v-for="(item, i) in data || []"
            :key="item.slug"
            :delay="i * 100"
          >
            <CaseStudyCard :item="item" />
          </SharedScrollReveal>
        </div>
      </div>
    </section>

    <HomeCTASection />
  </div>
</template>

<style scoped>
.hero { position: relative; padding-top: 10rem; padding-bottom: 5rem; overflow: hidden; }
.hero__inner { position: relative; z-index: 1; max-width: 720px; }
.hero__title { margin-top: 0.5rem; color: var(--color-text-on-dark); }
.hero__subtitle { margin-top: 1.25rem; font-size: 1.15rem; color: var(--color-text-muted-on-dark); line-height: 1.7; max-width: 540px; }

.cases__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 1.5rem;
}

.cases__error {
  text-align: center;
  color: var(--color-danger);
  padding: 2rem;
}
</style>
