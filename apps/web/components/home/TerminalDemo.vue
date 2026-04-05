<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';

interface TerminalExample {
  prompt: string;
  steps: string[];
}

const props = defineProps<{
  label?: string;
  heading: string;
  subheading?: string;
  examples: TerminalExample[];
}>();

const currentIndex = ref(0);
const typedText = ref('');
const visibleSteps = ref<number>(0);
const phase = ref<'typing' | 'responding' | 'waiting'>('typing');

let typingInterval: ReturnType<typeof setInterval> | null = null;
let stepTimeout: ReturnType<typeof setTimeout> | null = null;
let phaseTimeout: ReturnType<typeof setTimeout> | null = null;

const runExample = (index: number) => {
  const example = props.examples[index];
  if (!example) return;

  // Reset
  typedText.value = '';
  visibleSteps.value = 0;
  phase.value = 'typing';

  // Clear any running timers
  if (typingInterval) clearInterval(typingInterval);
  if (stepTimeout) clearTimeout(stepTimeout);
  if (phaseTimeout) clearTimeout(phaseTimeout);

  // Phase 1: Type the prompt character by character
  let charIndex = 0;
  typingInterval = setInterval(() => {
    if (charIndex < example.prompt.length) {
      typedText.value = example.prompt.slice(0, charIndex + 1);
      charIndex++;
    } else {
      if (typingInterval) clearInterval(typingInterval);
      // Phase 2: Show steps one by one
      phase.value = 'responding';
      const showStep = (stepIdx: number) => {
        if (stepIdx >= example.steps.length) {
          phase.value = 'waiting';
          phaseTimeout = setTimeout(() => {
            currentIndex.value = (currentIndex.value + 1) % props.examples.length;
          }, 2500);
          return;
        }
        visibleSteps.value = stepIdx + 1;
        stepTimeout = setTimeout(() => showStep(stepIdx + 1), 600);
      };
      setTimeout(() => showStep(0), 400);
    }
  }, 25);
};

const selectExample = (index: number) => {
  currentIndex.value = index;
};

watch(currentIndex, (newIndex) => {
  runExample(newIndex);
});

onMounted(() => {
  runExample(0);
});

onUnmounted(() => {
  if (typingInterval) clearInterval(typingInterval);
  if (stepTimeout) clearTimeout(stepTimeout);
  if (phaseTimeout) clearTimeout(phaseTimeout);
});
</script>

<template>
  <section class="terminal-demo section section--dark grain-overlay">
    <SharedGradientMesh variant="section" />
    <div class="terminal-demo__inner section__inner">
      <SharedScrollReveal>
        <div class="terminal-demo__header">
          <span v-if="label" class="section-label">{{ label }}</span>
          <h2 class="terminal-demo__heading">{{ heading }}</h2>
          <p v-if="subheading" class="terminal-demo__subheading">{{ subheading }}</p>
        </div>
      </SharedScrollReveal>

      <SharedScrollReveal :delay="200">
        <div class="terminal">
          <!-- Terminal chrome -->
          <div class="terminal__chrome">
            <div class="terminal__dots">
              <span class="terminal__dot" style="background:#ff5f57"></span>
              <span class="terminal__dot" style="background:#febc2e"></span>
              <span class="terminal__dot" style="background:#28c840"></span>
            </div>
            <div class="terminal__title">agent://console</div>
          </div>

          <!-- Terminal body -->
          <div class="terminal__body">
            <!-- Prompt line -->
            <div class="terminal__line terminal__line--prompt">
              <span class="terminal__prefix">$</span>
              <span class="terminal__text">{{ typedText }}</span>
              <span v-if="phase === 'typing'" class="terminal__cursor"></span>
            </div>

            <!-- Response steps -->
            <div class="terminal__steps">
              <div
                v-for="(step, i) in examples[currentIndex]?.steps || []"
                :key="`${currentIndex}-${i}`"
                class="terminal__line terminal__line--step"
                :class="{ 'is-visible': i < visibleSteps }"
              >
                <span class="terminal__check">✓</span>
                <span class="terminal__text">{{ step }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Example selector -->
        <div class="terminal-demo__selector" role="tablist">
          <button
            v-for="(example, i) in examples"
            :key="i"
            class="selector-dot"
            :class="{ 'is-active': i === currentIndex }"
            :aria-label="`Example ${i + 1}`"
            :aria-selected="i === currentIndex"
            @click="selectExample(i)"
          />
        </div>
      </SharedScrollReveal>
    </div>
  </section>
</template>

<style scoped>
.terminal-demo {
  position: relative;
  overflow: hidden;
}

.terminal-demo__inner {
  position: relative;
  z-index: 1;
}

.terminal-demo__header {
  text-align: center;
  max-width: 640px;
  margin: 0 auto 3rem;
}

.terminal-demo__heading {
  margin-top: 0.75rem;
  color: var(--color-text-on-dark);
}

.terminal-demo__subheading {
  margin-top: 1rem;
  color: var(--color-text-muted-on-dark);
  font-size: 1.05rem;
  line-height: 1.7;
}

.terminal {
  max-width: 780px;
  margin: 0 auto;
  background: #1a1a1d;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.4);
}

.terminal__chrome {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  background: #222226;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.terminal__dots {
  display: flex;
  gap: 0.5rem;
}

.terminal__dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.terminal__title {
  font-family: var(--font-mono, monospace);
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.4);
}

.terminal__body {
  padding: 1.5rem 1.25rem;
  font-family: var(--font-mono, "JetBrains Mono", monospace);
  font-size: 0.875rem;
  line-height: 1.7;
  min-height: 280px;
}

.terminal__line {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  color: rgba(255, 255, 255, 0.9);
}

.terminal__line--prompt {
  color: var(--color-accent);
  margin-bottom: 1rem;
}

.terminal__prefix {
  color: var(--color-accent);
  font-weight: 700;
}

.terminal__text {
  color: rgba(255, 255, 255, 0.92);
}

.terminal__cursor {
  display: inline-block;
  width: 8px;
  height: 1rem;
  background: var(--color-accent);
  animation: cursorBlink 1s infinite;
  margin-left: 2px;
}

.terminal__steps {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.terminal__line--step {
  opacity: 0;
  transform: translateX(-8px);
  transition: opacity 0.3s var(--ease-out), transform 0.3s var(--ease-out);
  color: rgba(255, 255, 255, 0.7);
}

.terminal__line--step.is-visible {
  opacity: 1;
  transform: translateX(0);
}

.terminal__check {
  color: var(--color-accent);
  font-weight: 700;
  flex-shrink: 0;
}

.terminal-demo__selector {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 1.5rem;
}

.selector-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  padding: 0;
  cursor: pointer;
  transition: background var(--duration-normal) var(--ease-out), transform var(--duration-normal) var(--ease-out);
}

.selector-dot:hover {
  background: rgba(255, 255, 255, 0.4);
}

.selector-dot.is-active {
  background: var(--color-accent);
  transform: scale(1.3);
}

@media (max-width: 640px) {
  .terminal__body {
    font-size: 0.75rem;
    padding: 1.25rem 1rem;
  }
}
</style>
