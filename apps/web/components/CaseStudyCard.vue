<script setup lang="ts">
import type { CaseStudySummary } from '@globaltechno/shared';

const props = defineProps<{
  item: CaseStudySummary;
}>();

const publishedLabel = computed(() => new Date(props.item.publishedAt).toLocaleDateString('en-GB'));
</script>

<template>
  <article class="case-card">
    <div class="case-card__meta">
      <UiBadge :label="item.industry" />
      <span class="case-card__date">{{ publishedLabel }}</span>
    </div>
    <h3 class="case-card__title">{{ item.title }}</h3>
    <p class="case-card__summary">{{ item.summary }}</p>
    <ul class="case-card__tags" aria-label="Tags">
      <li v-for="tag in item.tags" :key="tag">
        <UiBadge :label="tag" variant="default" />
      </li>
    </ul>
    <NuxtLink :to="`/case-studies/${item.slug}`" class="case-card__link">
      View case study
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M6 3l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </NuxtLink>
  </article>
</template>

<style scoped>
.case-card {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 2rem;
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-lg);
  background: white;
  transition:
    transform var(--duration-normal) var(--ease-out),
    box-shadow var(--duration-normal) var(--ease-out);
}

.case-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.05);
}

.case-card__meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
}

.case-card__date {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-text-secondary);
}

.case-card__title {
  font-size: 1.15rem;
  color: var(--color-text-primary);
  line-height: 1.35;
}

.case-card__summary {
  font-size: 0.925rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.case-card__tags {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
}

.case-card__link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-accent-hover);
  margin-top: 0.25rem;
  transition: gap var(--duration-fast) ease;
}

.case-card:hover .case-card__link {
  gap: 0.6rem;
}
</style>
