<script setup lang="ts">
useSeoMeta({
  title: 'Work',
  description: 'Selected work from Globaltechno — production builds for clients across web platforms.',
  ogTitle: 'Work — Globaltechno'
});

const works = [
  {
    title: 'be-working',
    year: '2024',
    role: 'Full-stack build',
    summary:
      'Booking platform for Spanish coworking spaces. Real-time availability, payments, member portals — built end-to-end.',
    to: '/work/be-working',
    liveUrl: 'https://be-working.com'
  },
  {
    title: 'codewright',
    year: '2025',
    role: 'Product · QA infra',
    summary:
      'Human-supervised AI-assisted QA for EU startups. Signed reports tied to NIS2, GDPR, and eIDAS 2.0 compliance.',
    to: '/work/codewright',
    liveUrl: 'https://codewright.co'
  }
];
</script>

<template>
  <div>
    <section class="work-hero section section--light">
      <div class="work-hero__inner section__inner">
        <SharedScrollReveal>
          <span class="section-label">Work</span>
          <h1 class="work-hero__title text-balance">
            Selected work.
          </h1>
          <p class="work-hero__lead">
            Two production builds. Real systems running for real clients.
          </p>
        </SharedScrollReveal>
      </div>
    </section>

    <section class="work-list section section--light">
      <div class="work-list__inner section__inner">
        <div class="work-list__grid">
          <SharedScrollReveal
            v-for="(w, i) in works"
            :key="w.to"
            :delay="i * 100"
          >
            <SharedWorkCard
              :title="w.title"
              :year="w.year"
              :role="w.role"
              :summary="w.summary"
              :to="w.to"
              :live-url="w.liveUrl"
            />
          </SharedScrollReveal>
        </div>
      </div>
    </section>

    <HomeClosingCtaSection />
  </div>
</template>

<style scoped>
.work-hero {
  padding-top: clamp(7rem, 12vw, 10rem);
  padding-bottom: clamp(2rem, 4vw, 4rem);
}

.work-hero__inner {
  max-width: var(--max-width-narrow);
  margin: 0 auto;
}

.work-hero__title {
  margin-top: 0.25rem;
  font-size: clamp(2.75rem, 7vw, 6rem);
}

.work-hero__lead {
  margin-top: 1.25rem;
  font-size: clamp(1.05rem, 1.5vw, 1.25rem);
  line-height: 1.6;
  color: var(--ink-mute);
  max-width: 56ch;
}

.work-list {
  padding-top: 2rem;
}

.work-list__grid {
  display: flex;
  flex-direction: column;
  gap: 5rem;
}
</style>
