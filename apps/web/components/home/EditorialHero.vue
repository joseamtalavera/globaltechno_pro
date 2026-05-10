<script setup lang="ts">
import { ref } from 'vue';

const heroRef = ref<HTMLElement | null>(null);
const gx = ref(50);
const gy = ref(50);
const active = ref(false);
let raf: number | null = null;
let pendingX = 50;
let pendingY = 50;

function onMouseMove(e: MouseEvent): void {
  if (!heroRef.value) return;
  const rect = heroRef.value.getBoundingClientRect();
  pendingX = ((e.clientX - rect.left) / rect.width) * 100;
  pendingY = ((e.clientY - rect.top) / rect.height) * 100;
  if (raf === null) {
    raf = requestAnimationFrame(() => {
      gx.value = pendingX;
      gy.value = pendingY;
      raf = null;
    });
  }
}

function onMouseEnter(): void {
  active.value = true;
}

function onMouseLeave(): void {
  active.value = false;
}

const rotorWords = ['solution', 'answer', 'thing', 'fix'];

const marqueeItems = [
  { label: 'Now', status: 'now' as const },
  { label: 'Full-stack apps' },
  { label: 'Testing & QA' },
  { label: 'Software architecture' },
  { label: 'Coming', status: 'coming' as const },
  { label: 'Web3 & on-chain' },
  { label: 'Cybersecurity' },
  { label: 'Agentic systems' }
];
</script>

<template>
  <section class="hero">
    <div
      ref="heroRef"
      class="hero__stage section"
      @mousemove="onMouseMove"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
    >
      <div
        class="hero__gradient"
        :class="{ 'hero__gradient--active': active }"
        :style="{ '--gx': `${gx}%`, '--gy': `${gy}%` }"
        aria-hidden="true"
      />

      <div class="hero__content section__inner">
        <div class="hero__meta">
          <span class="hero__meta-item"><b>Studio</b> · Globaltechno OÜ</span>
          <span class="hero__meta-item"><b>Year</b> · 2026</span>
          <span class="hero__meta-item"><b>Based</b> · Madrid + Buenos Aires</span>
        </div>

        <h1 class="hero__title text-balance">
          Companies bring problems.<br>
          We build <SharedRotorWord :words="rotorWords" />.
        </h1>

        <div class="hero__lower">
          <p class="hero__lede">
            An engineering studio for problems that don't fit a template.
            Today: full-stack apps, testing, software architecture.
            Coming: web3, cybersecurity, agentic systems.
          </p>

          <div class="hero__actions">
            <UiButton variant="filled-ink" size="lg" to="/contact">
              Start a project <span class="btn__arrow">→</span>
            </UiButton>
            <UiButton variant="ghost-ink" size="lg" to="/work">
              See our work
            </UiButton>
          </div>
        </div>
      </div>
    </div>

    <SharedMarquee :items="marqueeItems" />
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  background: var(--paper);
}

.hero__stage {
  position: relative;
  overflow: hidden;
  padding-top: clamp(7rem, 14vw, 11rem);
  padding-bottom: clamp(4rem, 8vw, 7rem);
}

.hero__gradient {
  position: absolute;
  inset: -10%;
  pointer-events: none;
  background: radial-gradient(
    520px circle at var(--gx, 50%) var(--gy, 50%),
    var(--accent-wash),
    transparent 65%
  );
  filter: blur(50px);
  opacity: 0;
  transition: opacity var(--duration-slow) var(--ease-out);
}

.hero__gradient--active {
  opacity: 1;
}

.hero__content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: clamp(1.75rem, 4vw, 3rem);
}

/* Meta row */
.hero__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding-bottom: 1.4rem;
  border-bottom: 1px solid var(--line);
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink-faint);
}

.hero__meta-item b {
  color: var(--ink);
  font-weight: 500;
}

/* Title */
.hero__title {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(3rem, 9vw, 8rem);
  letter-spacing: -0.04em;
  line-height: 0.95;
  color: var(--ink);
  max-width: 18ch;
  text-wrap: balance;
}

/* Lower split: lede left, CTAs right */
.hero__lower {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: end;
  margin-top: clamp(2rem, 4vw, 3rem);
}

.hero__lede {
  font-family: var(--font-display);
  font-size: clamp(1.1rem, 1.7vw, 1.4rem);
  line-height: 1.45;
  color: var(--ink-2);
  max-width: 38ch;
  margin: 0;
}

.hero__actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: flex-end;
}

@media (max-width: 820px) {
  .hero__lower {
    grid-template-columns: 1fr;
  }
  .hero__actions {
    justify-content: flex-start;
  }
}

@media (max-width: 640px) {
  .hero__title {
    max-width: 100%;
  }
  .hero__actions {
    width: 100%;
  }
  .hero__actions .btn {
    flex: 1 1 100%;
  }
}

@media (hover: none) {
  .hero__gradient {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero__gradient {
    transition: none;
  }
}
</style>
