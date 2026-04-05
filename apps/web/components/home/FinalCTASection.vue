<script setup lang="ts">
defineProps<{
  heading: string;
  body?: string;
  ctaLabel: string;
  ctaHref: string;
}>();
</script>

<template>
  <section class="final-cta section section--light">
    <div class="final-cta__inner section__inner">
      <SharedScrollReveal>
        <div class="final-cta__content">
          <h2 class="final-cta__heading">{{ heading }}</h2>
          <p v-if="body" class="final-cta__body">{{ body }}</p>
          <div class="final-cta__actions">
            <NuxtLink :to="ctaHref">
              <UiButton variant="filled" size="lg">{{ ctaLabel }}</UiButton>
            </NuxtLink>
          </div>
        </div>
      </SharedScrollReveal>
    </div>
  </section>
</template>

<style scoped>
.final-cta {
  background: #fafafa;
}

.final-cta__content {
  max-width: 640px;
  margin: 0 auto;
  text-align: center;
}

.final-cta__heading {
  color: var(--color-text-primary);
}

.final-cta__body {
  margin-top: 1.25rem;
  font-size: 1.05rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
}

.final-cta__actions {
  margin-top: 2.25rem;
  display: flex;
  justify-content: center;
}
</style>
