<script setup lang="ts">
defineProps<{
  label?: string;
  heading: string;
  subheading?: string;
  centerLabel?: string;
}>();

// Abstract nodes — no agent names, just positions
const nodeCount = 7;
const nodes = Array.from({ length: nodeCount }, (_, i) => ({
  index: i,
  angle: (360 / nodeCount) * i
}));
</script>

<template>
  <section class="orchestrator section section--dark grain-overlay">
    <SharedGradientMesh variant="section" />
    <div class="orchestrator__inner section__inner">
      <SharedScrollReveal>
        <div class="orchestrator__header">
          <span v-if="label" class="section-label">{{ label }}</span>
          <h2 class="orchestrator__heading">{{ heading }}</h2>
          <p v-if="subheading" class="orchestrator__subheading">{{ subheading }}</p>
        </div>
      </SharedScrollReveal>

      <SharedScrollReveal :delay="200">
        <div class="orch-visual" aria-hidden="true">
          <div class="orch-stage">
            <!-- Connection lines (SVG) -->
            <svg class="orch-lines" viewBox="-250 -250 500 500" preserveAspectRatio="xMidYMid meet">
              <line
                v-for="node in nodes"
                :key="`line-${node.index}`"
                x1="0"
                y1="0"
                :x2="Math.cos((node.angle - 90) * Math.PI / 180) * 180"
                :y2="Math.sin((node.angle - 90) * Math.PI / 180) * 180"
                stroke="rgba(0, 229, 160, 0.2)"
                stroke-width="1"
                stroke-dasharray="3 3"
              />
            </svg>

            <!-- Orbit path -->
            <div class="orch-ring"></div>

            <!-- Rotating node group -->
            <div class="orch-rotator">
              <div
                v-for="node in nodes"
                :key="`node-${node.index}`"
                class="orch-node-wrap"
                :style="{ transform: `rotate(${node.angle}deg) translateX(180px)` }"
              >
                <div
                  class="orch-node-counter"
                  :style="{ transform: `rotate(-${node.angle}deg)` }"
                >
                  <div class="orch-node">
                    <div class="orch-node__dot"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Center orchestrator -->
            <div class="orch-center">
              <div class="orch-center__pulse"></div>
              <div class="orch-center__core">
                <span v-if="centerLabel" class="orch-center__label">{{ centerLabel }}</span>
              </div>
            </div>
          </div>
        </div>
      </SharedScrollReveal>
    </div>
  </section>
</template>

<style scoped>
.orchestrator {
  position: relative;
  overflow: hidden;
}

.orchestrator__inner {
  position: relative;
  z-index: 1;
}

.orchestrator__header {
  text-align: center;
  max-width: 640px;
  margin: 0 auto;
}

.orchestrator__heading {
  margin-top: 0.75rem;
  color: var(--color-text-on-dark);
}

.orchestrator__subheading {
  margin-top: 1.25rem;
  color: var(--color-text-muted-on-dark);
  font-size: 1.05rem;
  line-height: 1.7;
}

.orch-visual {
  margin: 4rem auto 0;
  display: flex;
  justify-content: center;
}

.orch-stage {
  position: relative;
  width: 500px;
  height: 500px;
}

.orch-lines {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.orch-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 360px;
  height: 360px;
  border-radius: 50%;
  border: 1px dashed rgba(0, 229, 160, 0.2);
}

.orch-rotator {
  position: absolute;
  inset: 0;
  animation: orbitSpin 45s linear infinite;
}

.orch-node-wrap {
  position: absolute;
  top: 50%;
  left: 50%;
}

.orch-node-counter {
  animation: orbitSpinReverse 45s linear infinite;
}

.orch-node {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: rgba(10, 10, 11, 0.8);
  border: 1.5px solid rgba(0, 229, 160, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(0, 229, 160, 0.12);
}

.orch-node__dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--color-accent);
  opacity: 0.8;
}

.orch-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}

.orch-center__pulse {
  position: absolute;
  inset: -20px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 229, 160, 0.2) 0%, transparent 70%);
  animation: coreGlow 3s ease-in-out infinite;
}

.orch-center__core {
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: var(--color-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 40px rgba(0, 229, 160, 0.4);
}

.orch-center__label {
  font-family: var(--font-display, serif);
  font-size: 1rem;
  font-weight: 500;
  color: #0a0a0b;
  letter-spacing: 0.02em;
}

@media (max-width: 640px) {
  .orch-stage {
    width: 340px;
    height: 340px;
    transform: scale(0.75);
  }
}
</style>
