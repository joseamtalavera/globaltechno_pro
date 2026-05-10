<script setup lang="ts">
interface Pillar {
  title: string;
  description: string;
  icon: string;
}

defineProps<{
  label?: string;
  heading: string;
  headingAccent?: string;
  subheading?: string;
  pillars: Pillar[];
}>();
</script>

<template>
  <section class="agents-overview section section--light">
    <div class="agents-overview__inner section__inner">
      <SharedScrollReveal>
        <div class="agents-overview__header">
          <span v-if="label" class="section-label section-label--light">{{ label }}</span>
          <h2 class="agents-overview__heading">
            {{ heading }}<template v-if="headingAccent">
              <span class="agents-overview__accent"> {{ headingAccent }}</span>
            </template>
          </h2>
          <p v-if="subheading" class="agents-overview__subheading">{{ subheading }}</p>
        </div>
      </SharedScrollReveal>

      <div class="agents-overview__grid">
        <SharedScrollReveal
          v-for="(pillar, i) in pillars"
          :key="pillar.title"
          :delay="i * 100"
        >
          <article class="pillar-card">
            <div class="pillar-card__icon" v-html="pillar.icon" />
            <h3 class="pillar-card__title">{{ pillar.title }}</h3>
            <p class="pillar-card__description">{{ pillar.description }}</p>
          </article>
        </SharedScrollReveal>
      </div>
    </div>
  </section>
</template>

<style scoped>
.agents-overview {
  background: #fafafa;
}

.agents-overview__header {
  text-align: center;
  max-width: 640px;
  margin: 0 auto;
}

.agents-overview__heading {
  margin-top: 0.75rem;
  color: var(--color-text-primary);
}

.agents-overview__accent {
  color: var(--color-accent);
}

.agents-overview__subheading {
  margin-top: 1.5rem;
  font-size: 1.05rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
}

.agents-overview__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 3.5rem;
}

.pillar-card {
  height: 100%;
  padding: 2rem;
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-lg);
  background: white;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition:
    transform var(--duration-normal) var(--ease-out),
    box-shadow var(--duration-normal) var(--ease-out);
}

.pillar-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.04);
}

.pillar-card__icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(214, 80, 46, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-accent);
}

.pillar-card__icon :deep(svg) {
  width: 22px;
  height: 22px;
}

.pillar-card__title {
  font-size: 1.0625rem;
  font-weight: 600;
  color: var(--color-text-primary);
  letter-spacing: -0.01em;
}

.pillar-card__description {
  font-size: 0.9375rem;
  color: var(--color-text-secondary);
  line-height: 1.65;
  margin: 0;
}

@media (max-width: 1024px) {
  .agents-overview__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .agents-overview__grid {
    grid-template-columns: 1fr;
  }
}
</style>
