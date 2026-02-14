<script setup lang="ts">
</script>

<template>
  <section class="cta section section--gradient grain-overlay">
    <SharedGradientMesh variant="cta" />

    <div class="cta__inner section__inner">
      <SharedScrollReveal>
        <h2 class="cta__heading text-balance">
          Ready to build something intelligent?
        </h2>
        <p class="cta__subtitle">
          Get in touch and let's explore what AI can do for your business.
        </p>
      </SharedScrollReveal>

      <SharedScrollReveal :delay="200">
        <div class="cta__actions">
          <UiButton variant="filled" size="lg" to="/contact">
            Book a Call
          </UiButton>
          <NuxtLink to="/contact" class="cta__email-link">
            Or email us &rarr;
          </NuxtLink>
        </div>
      </SharedScrollReveal>
    </div>
  </section>
</template>

<style scoped>
.cta {
  position: relative;
  overflow: hidden;
  text-align: center;
}

.cta__inner {
  position: relative;
  z-index: 1;
}

.cta__heading {
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  color: var(--color-text-on-dark);
  max-width: 700px;
  margin: 0 auto;
}

.cta__subtitle {
  margin-top: 1rem;
  font-size: 1.1rem;
  color: var(--color-text-muted-on-dark);
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
}

.cta__actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2.5rem;
  flex-wrap: wrap;
}

.cta__email-link {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--color-text-muted-on-dark);
  text-decoration: none;
  transition: color var(--duration-fast) ease;
}

.cta__email-link:hover {
  color: var(--color-text-on-dark);
}
</style>
