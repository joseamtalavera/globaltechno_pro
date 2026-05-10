<script setup lang="ts">
const works = [
  {
    title: 'be-working',
    year: '2024',
    role: 'Full-stack build',
    summary:
      'A booking platform for Spanish coworking spaces. Real-time availability, payments, and member portals — built end-to-end.',
    to: '/work/be-working',
    liveUrl: 'https://be-working.com'
  },
  {
    title: 'codewright',
    year: '2025',
    role: 'Product · QA infra',
    summary:
      'Human-supervised, AI-assisted QA for EU startups. Signed reports tied to NIS2, GDPR, and eIDAS 2.0 compliance.',
    to: '/work/codewright',
    liveUrl: 'https://codewright.co'
  }
];
</script>

<template>
  <section class="selected-work section section--light">
    <div class="selected-work__inner section__inner">
      <SharedScrollReveal>
        <div class="selected-work__head">
          <span class="section-label">Selected work</span>
          <h2 class="selected-work__title text-balance">
            Recent ships.
          </h2>
        </div>
      </SharedScrollReveal>

      <div class="selected-work__grid">
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
</template>

<style scoped>
.selected-work__inner {
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
}

.selected-work__head {
  max-width: 760px;
}

.selected-work__title {
  margin-top: 0.25rem;
}

.selected-work__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem 2.5rem;
}

@media (max-width: 900px) {
  .selected-work__grid {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
}
</style>
