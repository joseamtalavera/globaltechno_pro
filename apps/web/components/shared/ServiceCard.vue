<script setup lang="ts">
interface Props {
  title: string;
  description: string;
  href: string;
  icon?: string;
  featured?: boolean;
}

withDefaults(defineProps<Props>(), {
  featured: false
});
</script>

<template>
  <NuxtLink :to="href" class="service-card" :class="{ 'service-card--featured': featured }">
    <div v-if="featured" class="service-card__accent"></div>
    <div class="service-card__content">
      <span v-if="icon" class="service-card__icon">{{ icon }}</span>
      <h3 class="service-card__title">{{ title }}</h3>
      <p class="service-card__description">{{ description }}</p>
      <span class="service-card__link">
        Learn more
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M6 3l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    </div>
  </NuxtLink>
</template>

<style scoped>
.service-card {
  display: block;
  position: relative;
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-lg);
  padding: 2rem;
  background: white;
  text-decoration: none;
  transition:
    transform var(--duration-normal) var(--ease-out),
    box-shadow var(--duration-normal) var(--ease-out),
    border-color var(--duration-normal) var(--ease-out);
  overflow: hidden;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.06);
  border-color: var(--color-border-light);
}

.service-card--featured {
  border-color: var(--color-accent);
  background: linear-gradient(135deg, white 0%, rgba(0, 229, 160, 0.02) 100%);
}

.service-card--featured:hover {
  box-shadow: 0 12px 40px var(--color-accent-glow);
}

.service-card__accent {
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: var(--color-accent);
  border-radius: 0 2px 2px 0;
}

.service-card__content {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.service-card__icon {
  font-size: 1.75rem;
  line-height: 1;
}

.service-card__title {
  font-family: var(--font-body);
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text-primary);
  letter-spacing: -0.01em;
}

.service-card__description {
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.service-card__link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-accent);
  margin-top: 0.5rem;
  transition: gap var(--duration-fast) ease;
}

.service-card:hover .service-card__link {
  gap: 0.6rem;
}
</style>
