<script setup lang="ts">
const { elementRef, isVisible } = useScrollAnimation({ threshold: 0 });
</script>

<template>
  <section
    ref="elementRef"
    class="hero section--dark grain-overlay"
  >
    <SharedGradientMesh variant="hero" />
    <HomeHeroAnimation />

    <div class="hero__inner section__inner">
      <div class="hero__content" :class="{ 'is-visible': isVisible }">
        <span class="section-label">Globaltechno</span>

        <h1 class="hero__title text-balance">
          We Build AI Agents That Work
        </h1>

        <p class="hero__subtitle">
          Intelligent automation, cybersecurity, and cloud-native engineering
          for enterprises ready to evolve.
        </p>

        <div class="hero__ctas">
          <UiButton variant="filled" size="lg" to="/services">
            Explore Our Work
          </UiButton>
          <UiButton variant="ghost" size="lg" to="/contact">
            Talk to Us
          </UiButton>
        </div>
      </div>

      <div class="hero__scroll-indicator" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 4v12M5 11l5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>

    <div class="hero__logos">
      <div class="hero__logos-inner section__inner">
        <span class="hero__logos-label">Trusted by forward-thinking enterprises</span>
        <div class="hero__logos-strip">
          <span class="hero__logo-placeholder">Enterprise</span>
          <span class="hero__logo-placeholder">FinServ</span>
          <span class="hero__logo-placeholder">GovTech</span>
          <span class="hero__logo-placeholder">HealthTech</span>
          <span class="hero__logo-placeholder">LogisTech</span>
          <span class="hero__logo-placeholder">InsurTech</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6rem var(--section-padding-x) 0;
  overflow: hidden;
}

.hero__inner {
  position: relative;
  z-index: 1;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: var(--max-width);
  margin: 0 auto;
  width: 100%;
}

.hero__content {
  max-width: 780px;
}

/* Staggered entrance */
.hero__content > * {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 700ms var(--ease-out),
    transform 700ms var(--ease-out);
}

.hero__content.is-visible > *:nth-child(1) { opacity: 1; transform: none; transition-delay: 0ms; }
.hero__content.is-visible > *:nth-child(2) { opacity: 1; transform: none; transition-delay: 100ms; }
.hero__content.is-visible > *:nth-child(3) { opacity: 1; transform: none; transition-delay: 200ms; }
.hero__content.is-visible > *:nth-child(4) { opacity: 1; transform: none; transition-delay: 350ms; }

.hero__title {
  margin-top: 0.75rem;
  font-size: clamp(2.8rem, 7vw, 5.5rem);
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: var(--color-text-on-dark);
}

.hero__subtitle {
  margin-top: 1.5rem;
  font-size: clamp(1.05rem, 1.8vw, 1.3rem);
  color: var(--color-text-muted-on-dark);
  max-width: 560px;
  line-height: 1.7;
}

.hero__ctas {
  display: flex;
  gap: 1rem;
  margin-top: 2.5rem;
  flex-wrap: wrap;
}

/* Scroll indicator */
.hero__scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: var(--color-text-muted-on-dark);
  animation: scrollBounce 2s ease-in-out infinite;
}

/* Logo strip */
.hero__logos {
  position: relative;
  z-index: 1;
  padding: 2rem var(--section-padding-x) 2.5rem;
  border-top: 1px solid var(--color-border-dark);
}

.hero__logos-inner {
  max-width: var(--max-width);
  margin: 0 auto;
}

.hero__logos-label {
  display: block;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted-on-dark);
  margin-bottom: 1.2rem;
  opacity: 0.6;
}

.hero__logos-strip {
  display: flex;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.hero__logo-placeholder {
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-text-muted-on-dark);
  opacity: 0.35;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

@media (max-width: 768px) {
  .hero {
    padding-top: 5rem;
  }

  .hero__ctas {
    flex-direction: column;
    align-items: flex-start;
  }

  .hero__logos-strip {
    gap: 2rem;
  }

  .hero__scroll-indicator {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero__content > * {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }

  .hero__scroll-indicator {
    animation: none;
  }
}
</style>
