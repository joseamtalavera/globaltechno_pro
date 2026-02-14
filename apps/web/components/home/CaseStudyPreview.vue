<script setup lang="ts">
const caseStudies = [
  {
    slug: 'compliance-automation',
    title: 'Automating compliance workflows for a Fortune 500 bank',
    description: 'Reduced manual compliance review time by 73% through intelligent document processing and automated risk scoring.',
    industry: 'Financial Services',
    tags: ['AI Agents', 'Automation', 'Compliance']
  },
  {
    slug: 'soc-transformation',
    title: 'SOC transformation for a critical infrastructure provider',
    description: 'Deployed autonomous threat detection agents that cut incident response time from hours to minutes.',
    industry: 'Energy & Utilities',
    tags: ['Cybersecurity', 'AI Agents', 'SOC']
  }
];
</script>

<template>
  <section class="case-study-preview section section--light">
    <div class="case-study-preview__inner section__inner">
      <SharedScrollReveal>
        <span class="section-label section-label--light">Case Studies</span>
        <h2 class="case-study-preview__heading">Intelligence in Action</h2>
      </SharedScrollReveal>

      <div class="case-study-preview__cards">
        <SharedScrollReveal
          v-for="(study, i) in caseStudies"
          :key="study.slug"
          :delay="i * 150"
        >
          <article class="preview-card">
            <div class="preview-card__image">
              <div class="preview-card__image-placeholder">
                <span class="preview-card__image-label">{{ study.industry }}</span>
              </div>
            </div>
            <div class="preview-card__body">
              <div class="preview-card__tags">
                <UiBadge v-for="tag in study.tags" :key="tag" :label="tag" />
              </div>
              <h3 class="preview-card__title">{{ study.title }}</h3>
              <p class="preview-card__description">{{ study.description }}</p>
              <NuxtLink :to="`/case-studies`" class="preview-card__link">
                Read case study
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M6 3l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </NuxtLink>
            </div>
          </article>
        </SharedScrollReveal>
      </div>
    </div>
  </section>
</template>

<style scoped>
.case-study-preview__heading {
  margin-top: 0.5rem;
  color: var(--color-text-primary);
}

.case-study-preview__cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
}

.preview-card {
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: white;
  transition:
    transform var(--duration-normal) var(--ease-out),
    box-shadow var(--duration-normal) var(--ease-out);
}

.preview-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.06);
}

.preview-card__image {
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.preview-card__image-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--color-bg-dark) 0%, var(--color-gradient-end) 100%);
  display: flex;
  align-items: flex-end;
  padding: 1.25rem;
}

.preview-card__image-label {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-text-muted-on-dark);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.preview-card__body {
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.preview-card__tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.preview-card__title {
  font-family: var(--font-body);
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-text-primary);
  line-height: 1.35;
}

.preview-card__description {
  font-size: 0.925rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.preview-card__link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-accent-hover);
  margin-top: 0.5rem;
  transition: gap var(--duration-fast) ease;
}

.preview-card:hover .preview-card__link {
  gap: 0.6rem;
}

@media (max-width: 768px) {
  .case-study-preview__cards {
    grid-template-columns: 1fr;
  }
}
</style>
