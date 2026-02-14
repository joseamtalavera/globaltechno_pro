<script setup lang="ts">
const stats = [
  { value: 50, suffix: '+', label: 'AI Agents Deployed' },
  { value: 99.9, suffix: '%', label: 'Uptime SLA' },
  { value: 12, suffix: '', label: 'Industries Served' },
  { value: 24, suffix: '/7', label: 'Monitoring' }
];

const counters = ref<number[]>(stats.map(() => 0));
const { elementRef, isVisible } = useScrollAnimation();

function animateCounters() {
  const duration = 2000;
  const startTime = performance.now();

  function step(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);

    for (let i = 0; i < stats.length; i++) {
      counters.value[i] = Number((eased * stats[i].value).toFixed(
        stats[i].value % 1 !== 0 ? 1 : 0
      ));
    }

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

watch(isVisible, (val) => {
  if (val) animateCounters();
});
</script>

<template>
  <section ref="elementRef" class="why-us section section--dark grain-overlay">
    <SharedGradientMesh variant="section" />

    <div class="why-us__inner section__inner">
      <SharedScrollReveal>
        <span class="section-label">Why Globaltechno</span>
        <h2 class="why-us__statement text-balance">
          We don't just implement technology.<br />
          We engineer intelligence.
        </h2>
      </SharedScrollReveal>

      <div class="why-us__stats">
        <div
          v-for="(stat, i) in stats"
          :key="stat.label"
          class="why-us__stat"
        >
          <SharedScrollReveal :delay="i * 120">
            <span class="why-us__stat-value">
              {{ counters[i] }}{{ stat.suffix }}
            </span>
            <span class="why-us__stat-label">{{ stat.label }}</span>
          </SharedScrollReveal>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why-us {
  position: relative;
  overflow: hidden;
}

.why-us__inner {
  position: relative;
  z-index: 1;
  text-align: center;
}

.why-us__statement {
  font-size: clamp(1.8rem, 4vw, 3rem);
  color: var(--color-text-on-dark);
  max-width: 800px;
  margin: 0.75rem auto 0;
  line-height: 1.2;
}

.why-us__stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 4rem;
  padding-top: 3rem;
  border-top: 1px solid var(--color-border-dark);
}

.why-us__stat {
  text-align: center;
}

.why-us__stat-value {
  display: block;
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: var(--color-accent);
  line-height: 1;
  letter-spacing: -0.03em;
}

.why-us__stat-label {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: var(--color-text-muted-on-dark);
  letter-spacing: 0.02em;
}

@media (max-width: 768px) {
  .why-us__stats {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .why-us__stats {
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }
}
</style>
