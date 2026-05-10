<script setup lang="ts">
interface Props {
  title: string;
  year: string | number;
  role: string;
  summary: string;
  image?: string;
  to: string;
  liveUrl?: string;
}

defineProps<Props>();
</script>

<template>
  <article class="work-card">
    <NuxtLink
      :to="to"
      class="work-card__link"
      :aria-label="`Open ${title} case study`"
    >
      <div class="work-card__media">
        <img v-if="image" :src="image" :alt="title" />
        <div v-else class="work-card__placeholder" aria-hidden="true">
          <span class="work-card__placeholder-text">{{ title }}</span>
        </div>
      </div>

      <div class="work-card__body">
        <div class="work-card__meta">
          <span>{{ year }}</span>
          <span class="work-card__meta-divider">·</span>
          <span>{{ role }}</span>
        </div>

        <h3 class="work-card__title">{{ title }}</h3>
        <p class="work-card__summary">{{ summary }}</p>

        <div class="work-card__actions">
          <span class="work-card__cta">
            Open case
            <span class="work-card__arrow">→</span>
          </span>
        </div>
      </div>
    </NuxtLink>

    <a
      v-if="liveUrl"
      :href="liveUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="work-card__live"
      :aria-label="`${title} live site (opens in new tab)`"
    >
      Live site ↗
    </a>
  </article>
</template>

<style scoped>
.work-card {
  position: relative;
  display: block;
}

.work-card__link {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
}

.work-card__media {
  position: relative;
  aspect-ratio: 16 / 10;
  background: var(--paper-deep);
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin-bottom: 1.5rem;
}

.work-card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--duration-slow) var(--ease-out);
  display: block;
}

.work-card__link:hover .work-card__media img,
.work-card__link:hover .work-card__placeholder {
  transform: scale(1.02);
}

.work-card__placeholder {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(ellipse at 30% 20%, var(--accent-wash), transparent 60%),
    linear-gradient(135deg, var(--paper-deep), var(--paper-soft));
  transition: transform var(--duration-slow) var(--ease-out);
}

.work-card__placeholder-text {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  color: var(--ink-faint);
  letter-spacing: -0.03em;
}

.work-card__body {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.work-card__meta {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink-mute);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.work-card__meta-divider {
  color: var(--ink-faint);
}

.work-card__title {
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 3.2vw, 2.5rem);
  line-height: 1.05;
  letter-spacing: -0.025em;
  color: var(--ink);
}

.work-card__summary {
  font-size: 1rem;
  line-height: 1.55;
  color: var(--ink-mute);
  max-width: 52ch;
}

.work-card__actions {
  margin-top: 0.5rem;
}

.work-card__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--ink);
  border-bottom: 1px solid var(--ink);
  padding-bottom: 2px;
}

.work-card__arrow {
  display: inline-block;
  transition: transform var(--duration-fast) var(--ease-out);
}

.work-card__link:hover .work-card__arrow {
  transform: translateX(3px);
}

.work-card__live {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 2;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink);
  background: var(--paper-soft);
  border: 1px solid var(--line);
  border-radius: var(--radius-full);
  padding: 0.35rem 0.7rem;
  text-decoration: none;
  transition:
    background var(--duration-fast) ease,
    color var(--duration-fast) ease;
}

.work-card__live:hover {
  background: var(--ink);
  color: var(--paper);
}
</style>
