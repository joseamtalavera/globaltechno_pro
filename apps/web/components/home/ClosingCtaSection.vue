<script setup lang="ts"></script>

<template>
  <section class="closing-cta section section--light">
    <div class="closing-cta__inner section__inner section__inner--narrow">
      <SharedScrollReveal>
        <div class="closing-cta__content">
          <SharedKicker label="The next call" />
          <h2 class="closing-cta__title text-balance">
            Bring us a <em>problem</em>.<br>
            We'll bring back a <em>thing</em>.
          </h2>
          <p class="closing-cta__lede">
            One email, one call, one week to know if we're a fit. No NDA theatre, no chase emails.
          </p>
          <UiButton variant="filled-ink" size="lg" to="/contact" magnetic>
            Start a project <span class="btn__arrow">↗</span>
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
  gap: 1.5rem;
}

.closing-cta__title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 7vw, 6rem);
  letter-spacing: -0.035em;
  line-height: 0.95;
  color: var(--ink);
  margin: 0;
}

.closing-cta__title em {
  font-style: italic;
  color: var(--accent);
}

.closing-cta__lede {
  font-size: clamp(1.05rem, 1.5vw, 1.25rem);
  line-height: 1.55;
  color: var(--ink-mute);
  max-width: 50ch;
  margin: 0;
}
</style>
