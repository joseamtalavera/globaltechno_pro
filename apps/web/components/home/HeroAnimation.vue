<template>
  <div class="hero-anim" aria-hidden="true">
    <svg
      class="hero-anim__svg"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <defs>
        <!-- Glow filter for accent elements -->
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        <filter id="glow-lg" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="20" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        <!-- Radial gradient for orbs -->
        <radialGradient id="orb-accent">
          <stop offset="0%" stop-color="var(--color-accent)" stop-opacity="0.6" />
          <stop offset="100%" stop-color="var(--color-accent)" stop-opacity="0" />
        </radialGradient>

        <radialGradient id="orb-blue">
          <stop offset="0%" stop-color="#1a5cff" stop-opacity="0.4" />
          <stop offset="100%" stop-color="#1a5cff" stop-opacity="0" />
        </radialGradient>
      </defs>

      <!-- Dot grid -->
      <g class="hero-anim__grid" opacity="0.12">
        <circle
          v-for="dot in gridDots"
          :key="`d-${dot.x}-${dot.y}`"
          :cx="dot.x"
          :cy="dot.y"
          r="1"
          fill="white"
        />
      </g>

      <!-- Floating connection lines -->
      <g class="hero-anim__lines" opacity="0.08">
        <line
          v-for="(line, i) in connectionLines"
          :key="`l-${i}`"
          :x1="line.x1"
          :y1="line.y1"
          :x2="line.x2"
          :y2="line.y2"
          stroke="var(--color-accent)"
          stroke-width="0.5"
          :class="`hero-anim__line hero-anim__line--${i % 3}`"
        />
      </g>

      <!-- Orbital rings -->
      <g class="hero-anim__orbits" transform="translate(800, 350)">
        <ellipse
          class="hero-anim__ring hero-anim__ring--1"
          cx="0" cy="0" rx="280" ry="120"
          stroke="var(--color-accent)"
          stroke-width="0.5"
          opacity="0.15"
        />
        <ellipse
          class="hero-anim__ring hero-anim__ring--2"
          cx="0" cy="0" rx="220" ry="160"
          stroke="#1a5cff"
          stroke-width="0.5"
          opacity="0.1"
        />
        <ellipse
          class="hero-anim__ring hero-anim__ring--3"
          cx="0" cy="0" rx="340" ry="90"
          stroke="var(--color-accent)"
          stroke-width="0.3"
          opacity="0.08"
        />
      </g>

      <!-- Glowing orbs that travel along paths -->
      <circle class="hero-anim__orb hero-anim__orb--1" r="3" fill="var(--color-accent)" filter="url(#glow)">
        <animateMotion dur="12s" repeatCount="indefinite" path="M800,350 m-280,0 a280,120 0 1,0 560,0 a280,120 0 1,0 -560,0" />
      </circle>

      <circle class="hero-anim__orb hero-anim__orb--2" r="2.5" fill="#1a5cff" filter="url(#glow)">
        <animateMotion dur="16s" repeatCount="indefinite" path="M800,350 m0,-160 a220,160 0 1,0 0,320 a220,160 0 1,0 0,-320" />
      </circle>

      <circle class="hero-anim__orb hero-anim__orb--3" r="2" fill="var(--color-accent)" filter="url(#glow)" opacity="0.6">
        <animateMotion dur="20s" repeatCount="indefinite" path="M800,350 m-340,0 a340,90 0 1,1 680,0 a340,90 0 1,1 -680,0" />
      </circle>

      <!-- Large ambient glow orbs -->
      <circle class="hero-anim__ambient hero-anim__ambient--1" cx="850" cy="320" r="120" fill="url(#orb-accent)" filter="url(#glow-lg)" />
      <circle class="hero-anim__ambient hero-anim__ambient--2" cx="700" cy="420" r="80" fill="url(#orb-blue)" filter="url(#glow-lg)" />

      <!-- Accent pulse nodes at key positions -->
      <g class="hero-anim__nodes">
        <circle
          v-for="(node, i) in pulseNodes"
          :key="`n-${i}`"
          :cx="node.x"
          :cy="node.y"
          r="2"
          fill="var(--color-accent)"
          :class="`hero-anim__node hero-anim__node--${i}`"
        />
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
// Generate a sparse dot grid
const gridDots = computed(() => {
  const dots: { x: number; y: number }[] = [];
  const spacing = 60;
  for (let x = 0; x <= 1200; x += spacing) {
    for (let y = 0; y <= 800; y += spacing) {
      dots.push({ x, y });
    }
  }
  return dots;
});

// Connection lines between some nearby dots (pre-computed, deterministic)
const connectionLines = [
  { x1: 660, y1: 230, x2: 720, y2: 230 },
  { x1: 720, y1: 230, x2: 720, y2: 290 },
  { x1: 780, y1: 290, x2: 840, y2: 290 },
  { x1: 840, y1: 290, x2: 840, y2: 350 },
  { x1: 900, y1: 350, x2: 960, y2: 350 },
  { x1: 960, y1: 350, x2: 960, y2: 410 },
  { x1: 720, y1: 410, x2: 780, y2: 410 },
  { x1: 780, y1: 350, x2: 780, y2: 410 },
  { x1: 840, y1: 170, x2: 900, y2: 230 },
  { x1: 660, y1: 350, x2: 720, y2: 290 },
  { x1: 900, y1: 410, x2: 960, y2: 470 },
  { x1: 600, y1: 290, x2: 660, y2: 350 },
];

// Pulsing nodes at strategic positions
const pulseNodes = [
  { x: 720, y: 230 },
  { x: 840, y: 290 },
  { x: 960, y: 350 },
  { x: 780, y: 410 },
  { x: 660, y: 350 },
  { x: 900, y: 230 },
];
</script>

<style scoped>
.hero-anim {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.hero-anim__svg {
  width: 100%;
  height: 100%;
}

/* Orbital rings rotate */
.hero-anim__ring--1 {
  animation: orbitSpin1 30s linear infinite;
  transform-origin: 800px 350px;
}

.hero-anim__ring--2 {
  animation: orbitSpin2 40s linear infinite;
  transform-origin: 800px 350px;
}

.hero-anim__ring--3 {
  animation: orbitSpin3 50s linear infinite;
  transform-origin: 800px 350px;
}

@keyframes orbitSpin1 {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes orbitSpin2 {
  from { transform: rotate(0deg); }
  to { transform: rotate(-360deg); }
}

@keyframes orbitSpin3 {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Ambient glow pulses */
.hero-anim__ambient--1 {
  animation: ambientPulse1 8s ease-in-out infinite;
}

.hero-anim__ambient--2 {
  animation: ambientPulse2 10s ease-in-out infinite;
}

@keyframes ambientPulse1 {
  0%, 100% { opacity: 0.4; transform: translate(0, 0) scale(1); }
  50% { opacity: 0.6; transform: translate(-20px, 10px) scale(1.1); }
}

@keyframes ambientPulse2 {
  0%, 100% { opacity: 0.3; transform: translate(0, 0) scale(1); }
  50% { opacity: 0.5; transform: translate(15px, -10px) scale(1.15); }
}

/* Connection lines fade in/out */
.hero-anim__line {
  animation: linePulse 4s ease-in-out infinite;
}

.hero-anim__line--0 { animation-delay: 0s; }
.hero-anim__line--1 { animation-delay: 1.3s; }
.hero-anim__line--2 { animation-delay: 2.6s; }

@keyframes linePulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

/* Node pulses */
.hero-anim__node {
  animation: nodePulse 3s ease-in-out infinite;
}

.hero-anim__node--0 { animation-delay: 0s; }
.hero-anim__node--1 { animation-delay: 0.5s; }
.hero-anim__node--2 { animation-delay: 1s; }
.hero-anim__node--3 { animation-delay: 1.5s; }
.hero-anim__node--4 { animation-delay: 2s; }
.hero-anim__node--5 { animation-delay: 2.5s; }

@keyframes nodePulse {
  0%, 100% { r: 2; opacity: 0.4; }
  50% { r: 4; opacity: 1; }
}

/* Grid subtle entrance */
.hero-anim__grid {
  animation: fadeIn 2s ease-out both;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 0.12; }
}

@media (prefers-reduced-motion: reduce) {
  .hero-anim__ring--1,
  .hero-anim__ring--2,
  .hero-anim__ring--3,
  .hero-anim__ambient--1,
  .hero-anim__ambient--2,
  .hero-anim__line,
  .hero-anim__node,
  .hero-anim__grid {
    animation: none !important;
  }
}

@media (max-width: 768px) {
  .hero-anim {
    opacity: 0.5;
  }
}
</style>
