<script setup lang="ts">
const { elementRef, isVisible } = useScrollAnimation();

const nodes = [
  { id: 'ai', label: 'AI/ML Core', cx: 450, cy: 120 },
  { id: 'cloud', label: 'Cloud Infrastructure', cx: 200, cy: 220 },
  { id: 'security', label: 'Security Layer', cx: 700, cy: 220 },
  { id: 'identity', label: 'Identity Framework', cx: 300, cy: 360 },
  { id: 'automation', label: 'Automation Engine', cx: 600, cy: 360 },
];

const connections = [
  { from: 'ai', to: 'cloud' },
  { from: 'ai', to: 'security' },
  { from: 'cloud', to: 'identity' },
  { from: 'security', to: 'automation' },
  { from: 'identity', to: 'automation' },
  { from: 'ai', to: 'identity' },
  { from: 'ai', to: 'automation' },
];

function getNode(id: string) {
  return nodes.find(n => n.id === id)!;
}
</script>

<template>
  <section ref="elementRef" class="tech-stack section section--dark grain-overlay">
    <SharedGradientMesh variant="section" />

    <div class="tech-stack__inner section__inner">
      <SharedScrollReveal>
        <span class="section-label">Our Stack</span>
        <h2 class="tech-stack__heading">Built on Modern Infrastructure</h2>
        <p class="tech-stack__intro">
          A composable architecture connecting AI, security, identity, and cloud into one cohesive platform.
        </p>
      </SharedScrollReveal>

      <SharedScrollReveal :delay="200">
        <div class="tech-stack__visual">
          <svg
            viewBox="0 0 900 480"
            class="tech-stack__svg"
            :class="{ 'is-visible': isVisible }"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="var(--color-accent)" stop-opacity="0.3" />
                <stop offset="50%" stop-color="var(--color-accent)" stop-opacity="0.6" />
                <stop offset="100%" stop-color="var(--color-accent)" stop-opacity="0.3" />
              </linearGradient>
              <filter id="node-glow">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <!-- Connection lines -->
            <line
              v-for="(conn, i) in connections"
              :key="`line-${i}`"
              :x1="getNode(conn.from).cx"
              :y1="getNode(conn.from).cy"
              :x2="getNode(conn.to).cx"
              :y2="getNode(conn.to).cy"
              stroke="url(#line-gradient)"
              stroke-width="1"
              class="tech-stack__line"
              :style="{ '--line-delay': `${i * 200 + 400}ms` }"
            />

            <!-- Nodes -->
            <g
              v-for="(node, i) in nodes"
              :key="node.id"
              class="tech-stack__node"
              :style="{ '--node-delay': `${i * 150}ms` }"
            >
              <circle
                :cx="node.cx"
                :cy="node.cy"
                r="6"
                fill="var(--color-accent)"
                filter="url(#node-glow)"
                class="tech-stack__node-dot"
              />
              <circle
                :cx="node.cx"
                :cy="node.cy"
                r="20"
                fill="none"
                stroke="var(--color-accent)"
                stroke-width="0.5"
                stroke-opacity="0.3"
                class="tech-stack__node-ring"
              />
              <text
                :x="node.cx"
                :y="node.cy + 36"
                text-anchor="middle"
                class="tech-stack__node-label"
              >
                {{ node.label }}
              </text>
            </g>
          </svg>
        </div>
      </SharedScrollReveal>
    </div>
  </section>
</template>

<style scoped>
.tech-stack {
  position: relative;
  overflow: hidden;
}

.tech-stack__inner {
  position: relative;
  z-index: 1;
  text-align: center;
}

.tech-stack__heading {
  margin-top: 0.5rem;
  color: var(--color-text-on-dark);
}

.tech-stack__intro {
  margin-top: 1rem;
  font-size: 1.05rem;
  color: var(--color-text-muted-on-dark);
  max-width: 520px;
  margin-left: auto;
  margin-right: auto;
}

.tech-stack__visual {
  margin-top: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.tech-stack__svg {
  width: 100%;
  height: auto;
}

/* Lines */
.tech-stack__line {
  opacity: 0;
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  transition:
    opacity 600ms var(--ease-out),
    stroke-dashoffset 1200ms var(--ease-out);
  transition-delay: var(--line-delay);
}

.tech-stack__svg.is-visible .tech-stack__line {
  opacity: 1;
  stroke-dashoffset: 0;
}

/* Nodes */
.tech-stack__node {
  opacity: 0;
  transition: opacity 500ms var(--ease-out);
  transition-delay: var(--node-delay);
}

.tech-stack__svg.is-visible .tech-stack__node {
  opacity: 1;
}

.tech-stack__node-dot {
  animation: pulse 3s ease-in-out infinite;
  animation-delay: var(--node-delay);
}

.tech-stack__node-ring {
  animation: pulse 3s ease-in-out infinite;
  animation-delay: calc(var(--node-delay) + 500ms);
}

.tech-stack__node-label {
  font-family: var(--font-mono);
  font-size: 11px;
  fill: var(--color-text-muted-on-dark);
  letter-spacing: 0.04em;
}

@media (prefers-reduced-motion: reduce) {
  .tech-stack__line,
  .tech-stack__node {
    opacity: 1 !important;
    stroke-dashoffset: 0 !important;
    transition: none !important;
  }

  .tech-stack__node-dot,
  .tech-stack__node-ring {
    animation: none !important;
  }
}
</style>
