<script setup lang="ts">
defineProps<{
  label?: string;
  heading: string;
  oldTitle: string;
  oldItems: string[];
  newTitle: string;
  newItems: string[];
}>();
</script>

<template>
  <section class="comparison section section--light">
    <div class="comparison__inner section__inner">
      <SharedScrollReveal>
        <div class="comparison__header">
          <span v-if="label" class="section-label section-label--light">{{ label }}</span>
          <h2 class="comparison__heading">{{ heading }}</h2>
        </div>
      </SharedScrollReveal>

      <div class="comparison__grid">
        <SharedScrollReveal direction="left">
          <article class="comparison-col comparison-col--old">
            <h3 class="comparison-col__title">{{ oldTitle }}</h3>
            <ul class="comparison-col__list">
              <li v-for="item in oldItems" :key="item">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M5 5l8 8M13 5l-8 8" stroke="#dc2626" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <span>{{ item }}</span>
              </li>
            </ul>
          </article>
        </SharedScrollReveal>

        <SharedScrollReveal direction="right">
          <article class="comparison-col comparison-col--new">
            <h3 class="comparison-col__title">{{ newTitle }}</h3>
            <ul class="comparison-col__list">
              <li v-for="item in newItems" :key="item">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M4 9l3 3 7-7" stroke="var(--color-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>{{ item }}</span>
              </li>
            </ul>
          </article>
        </SharedScrollReveal>
      </div>
    </div>
  </section>
</template>

<style scoped>
.comparison {
  background: white;
}

.comparison__header {
  text-align: center;
  max-width: 640px;
  margin: 0 auto;
}

.comparison__heading {
  margin-top: 0.75rem;
  color: var(--color-text-primary);
}

.comparison__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 3.5rem;
}

.comparison-col {
  padding: 2.25rem;
  border-radius: var(--radius-lg);
  border: 1px solid;
  height: 100%;
}

.comparison-col--old {
  border-color: rgba(220, 38, 38, 0.2);
  background: rgba(220, 38, 38, 0.02);
}

.comparison-col--new {
  border-color: rgba(0, 229, 160, 0.25);
  background: rgba(0, 229, 160, 0.03);
}

.comparison-col__title {
  font-size: 1.125rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  margin-bottom: 1.5rem;
}

.comparison-col--old .comparison-col__title {
  color: #dc2626;
}

.comparison-col--new .comparison-col__title {
  color: var(--color-accent);
}

.comparison-col__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}

.comparison-col__list li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.9375rem;
  color: var(--color-text-primary);
  line-height: 1.6;
}

.comparison-col__list li svg {
  flex-shrink: 0;
  margin-top: 0.2rem;
}

@media (max-width: 900px) {
  .comparison__grid {
    grid-template-columns: 1fr;
  }
}
</style>
