<script setup lang="ts"></script>

<template>
  <section class="closing-cta section section--alt">
    <div class="closing-cta__inner section__inner section__inner--narrow">
      <SharedScrollReveal>
        <div class="closing-cta__content">
          <h2 class="closing-cta__title text-balance">
            Got a problem<br>worth solving?
          </h2>
          <p class="closing-cta__lead">
            Tell us what's broken, what's blocked, or what you're scoping next.
          </p>
          <UiButton variant="filled-ink" size="lg" to="/brief">
            Start a project →
          </UiButton>
        </div>
      </SharedScrollReveal>
    </div>
  </section>
</template>

<style scoped>
.closing-cta__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.closing-cta__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.75rem;
}

.closing-cta__title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 7vw, 5.5rem);
  letter-spacing: -0.035em;
  line-height: 1.0;
  color: var(--color-text-primary);
  margin: 0;
}

.closing-cta__lead {
  font-size: clamp(1.05rem, 1.5vw, 1.25rem);
  line-height: 1.55;
  color: var(--color-text-secondary);
  max-width: 48ch;
  margin: 0;
}
</style>
