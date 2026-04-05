<script setup lang="ts">
defineProps<{
  label?: string;
  heading: string;
  headingAccent?: string;
  body: string;
  primaryCta: string;
  primaryCtaHref: string;
  secondaryCta?: string;
  secondaryCtaHref?: string;
}>();

// Abstract orbit: 6 inner nodes, 8 outer nodes (no specific names/logos)
const innerNodes = Array.from({ length: 6 }, (_, i) => i);
const outerNodes = Array.from({ length: 8 }, (_, i) => i);
</script>

<template>
  <section class="agents-hero section section--dark grain-overlay">
    <SharedGradientMesh variant="hero" />
    <div class="agents-hero__inner section__inner">
      <SharedScrollReveal>
        <div class="agents-hero__content">
          <UiBadge v-if="label" :label="label" variant="accent" />
          <h1 class="agents-hero__title">
            {{ heading }}<template v-if="headingAccent">
              <br /><span class="agents-hero__accent">{{ headingAccent }}</span>
            </template>
          </h1>
          <p class="agents-hero__body">{{ body }}</p>
          <div class="agents-hero__actions">
            <NuxtLink :to="primaryCtaHref">
              <UiButton variant="filled" size="lg">{{ primaryCta }}</UiButton>
            </NuxtLink>
            <NuxtLink v-if="secondaryCta && secondaryCtaHref" :to="secondaryCtaHref">
              <UiButton variant="ghost-light" size="lg">{{ secondaryCta }} →</UiButton>
            </NuxtLink>
          </div>
        </div>
      </SharedScrollReveal>

      <!-- Abstract orbit visual -->
      <div class="agents-hero__orbit" aria-hidden="true">
        <div class="orbit-stage">
          <!-- Orbit rings -->
          <div class="orbit-ring orbit-ring--inner"></div>
          <div class="orbit-ring orbit-ring--middle"></div>
          <div class="orbit-ring orbit-ring--outer"></div>

          <!-- Center core -->
          <div class="orbit-core">
            <div class="orbit-core__inner"></div>
          </div>

          <!-- Inner rotating nodes -->
          <div class="orbit-rotator orbit-rotator--inner">
            <div
              v-for="i in innerNodes"
              :key="`inner-${i}`"
              class="orbit-node orbit-node--sm"
              :style="{ transform: `rotate(${(360 / innerNodes.length) * i}deg) translateX(140px)` }"
            >
              <div class="orbit-node__counter" :style="{ transform: `rotate(-${(360 / innerNodes.length) * i}deg)` }">
                <div class="orbit-node__dot orbit-node__dot--sm"></div>
              </div>
            </div>
          </div>

          <!-- Outer rotating nodes -->
          <div class="orbit-rotator orbit-rotator--outer">
            <div
              v-for="i in outerNodes"
              :key="`outer-${i}`"
              class="orbit-node orbit-node--lg"
              :style="{ transform: `rotate(${(360 / outerNodes.length) * i}deg) translateX(280px)` }"
            >
              <div class="orbit-node__counter" :style="{ transform: `rotate(-${(360 / outerNodes.length) * i}deg)` }">
                <div class="orbit-node__dot orbit-node__dot--lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.agents-hero {
  position: relative;
  padding-top: 10rem;
  padding-bottom: 4rem;
  overflow: hidden;
}

.agents-hero__inner {
  position: relative;
  z-index: 1;
  text-align: center;
}

.agents-hero__content {
  max-width: 820px;
  margin: 0 auto;
}

.agents-hero__title {
  margin-top: 1rem;
  color: var(--color-text-on-dark);
  line-height: 1.1;
}

.agents-hero__accent {
  color: var(--color-accent);
}

.agents-hero__body {
  margin: 1.75rem auto 0;
  max-width: 620px;
  font-size: 1.125rem;
  color: var(--color-text-muted-on-dark);
  line-height: 1.7;
}

.agents-hero__actions {
  margin-top: 2.5rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* Orbit visual */
.agents-hero__orbit {
  margin: 5rem auto 0;
  height: 640px;
  display: flex;
  justify-content: center;
  overflow: visible;
}

.orbit-stage {
  position: relative;
  width: 640px;
  height: 640px;
}

.orbit-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 1px dashed rgba(0, 229, 160, 0.15);
}

.orbit-ring--inner { width: 280px; height: 280px; }
.orbit-ring--middle { width: 480px; height: 480px; }
.orbit-ring--outer { width: 600px; height: 600px; border-color: rgba(0, 229, 160, 0.08); }

.orbit-core {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: rgba(0, 229, 160, 0.08);
  border: 1.5px solid rgba(0, 229, 160, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: coreGlow 3s ease-in-out infinite;
  z-index: 10;
}

.orbit-core__inner {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--color-accent) 0%, rgba(0, 229, 160, 0.4) 60%, transparent 100%);
}

.orbit-rotator {
  position: absolute;
  inset: 0;
}

.orbit-rotator--inner {
  animation: orbitSpin 35s linear infinite;
}

.orbit-rotator--outer {
  animation: orbitSpin 55s linear infinite;
}

.orbit-node {
  position: absolute;
  top: 50%;
  left: 50%;
}

.orbit-node__counter {
  /* Counter-rotate to keep visual upright */
}

.orbit-rotator--inner .orbit-node__counter {
  animation: orbitSpinReverse 35s linear infinite;
}

.orbit-rotator--outer .orbit-node__counter {
  animation: orbitSpinReverse 55s linear infinite;
}

.orbit-node__dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--color-accent);
  box-shadow: 0 0 12px rgba(0, 229, 160, 0.4);
}

.orbit-node__dot--lg {
  width: 22px;
  height: 22px;
  background: rgba(10, 10, 11, 1);
  border: 2px solid var(--color-accent);
  box-shadow: 0 0 16px rgba(0, 229, 160, 0.3);
}

@media (max-width: 900px) {
  .agents-hero {
    padding-top: 8rem;
  }
  .agents-hero__orbit {
    height: 400px;
    transform: scale(0.6);
    transform-origin: center top;
    margin-top: 3rem;
  }
}
</style>
