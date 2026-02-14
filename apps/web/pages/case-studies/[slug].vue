<script setup lang="ts">
import type { CaseStudyDetail } from '@globaltechno/shared';

const route = useRoute();
const { getCaseStudy } = useApi();

const slug = computed(() => String(route.params.slug));
const { data, error } = await useAsyncData<CaseStudyDetail>(`case-study-${slug.value}`, () =>
  getCaseStudy(slug.value)
);

if (data.value) {
  useSeoMeta({
    title: data.value.title,
    description: data.value.summary,
    ogTitle: data.value.title,
    ogDescription: data.value.summary
  });
}
</script>

<template>
  <div>
    <p v-if="error" class="error-message section section--light" role="alert">
      Case study unavailable.
    </p>

    <template v-else-if="data">
      <section class="hero section section--dark grain-overlay">
        <SharedGradientMesh variant="hero" />
        <div class="hero__inner section__inner">
          <SharedScrollReveal>
            <UiBadge :label="data.industry" variant="accent" />
            <h1 class="hero__title">{{ data.title }}</h1>
            <p class="hero__subtitle">{{ data.summary }}</p>
          </SharedScrollReveal>
        </div>
      </section>

      <section class="detail section section--light">
        <div class="detail__inner section__inner">
          <div class="detail__panels">
            <SharedScrollReveal>
              <article class="detail__panel">
                <h3>Challenge</h3>
                <p>{{ data.challenge }}</p>
              </article>
            </SharedScrollReveal>

            <SharedScrollReveal :delay="150">
              <article class="detail__panel">
                <h3>Approach</h3>
                <p>{{ data.approach }}</p>
              </article>
            </SharedScrollReveal>

            <SharedScrollReveal :delay="300">
              <article class="detail__panel">
                <h3>Outcome</h3>
                <p>{{ data.outcome }}</p>
              </article>
            </SharedScrollReveal>
          </div>

          <SharedScrollReveal :delay="200">
            <div class="detail__back">
              <NuxtLink to="/case-studies" class="detail__back-link">
                &larr; Back to case studies
              </NuxtLink>
            </div>
          </SharedScrollReveal>
        </div>
      </section>
    </template>

    <HomeCTASection />
  </div>
</template>

<style scoped>
.hero { position: relative; padding-top: 10rem; padding-bottom: 5rem; overflow: hidden; }
.hero__inner { position: relative; z-index: 1; max-width: 720px; }
.hero__title { margin-top: 1rem; color: var(--color-text-on-dark); }
.hero__subtitle { margin-top: 1.25rem; font-size: 1.15rem; color: var(--color-text-muted-on-dark); line-height: 1.7; }

.error-message { text-align: center; color: var(--color-danger); padding: 4rem 2rem; }

.detail__inner { max-width: 860px; }

.detail__panels {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.detail__panel {
  padding: 2rem;
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-lg);
  background: white;
}

.detail__panel h3 {
  color: var(--color-text-primary);
  margin-bottom: 0.75rem;
}

.detail__panel p {
  color: var(--color-text-secondary);
  line-height: 1.75;
  font-size: 1rem;
}

.detail__back {
  margin-top: 2rem;
}

.detail__back-link {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-accent-hover);
  transition: color var(--duration-fast) ease;
}

.detail__back-link:hover {
  color: var(--color-accent);
}
</style>
