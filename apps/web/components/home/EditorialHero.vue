<script setup lang="ts">
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
        <p class="hero__eyebrow">Globaltechno OÜ · Tallinn</p>

        <h1 class="hero__title text-balance">
          Companies bring problems.<br>
          We build <span class="hero__title-mark">the solution.</span>
        </h1>

        <p class="hero__subline">
          Today: full-stack apps · testing · architecture.<br>
          Coming: web3 · cybersecurity · agents.
        </p>

        <div class="hero__actions">
          <UiButton variant="filled-ink" size="lg" to="/brief">
            Start a project →
          </UiButton>
          <UiButton variant="ghost-ink" size="lg" to="/work">
            See our work
          </UiButton>
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
  align-items: flex-start;
  gap: 1.5rem;
}

.hero__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-mute);
  margin-bottom: 0;
}

.hero__eyebrow::before {
  content: '';
  width: 22px;
  height: 1px;
  background: var(--accent);
}

.hero__title {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(3rem, 8vw, 7rem);
  letter-spacing: -0.04em;
  line-height: 1.02;
  color: var(--ink);
  max-width: 18ch;
}

.hero__title-mark {
  font-style: italic;
  color: var(--accent);
}

.hero__subline {
  font-family: var(--font-body);
  font-size: clamp(1.05rem, 1.6vw, 1.3rem);
  line-height: 1.55;
  color: var(--ink-mute);
  max-width: 50ch;
}

.hero__actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1rem;
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
