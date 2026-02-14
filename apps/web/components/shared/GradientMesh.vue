<script setup lang="ts">
interface Props {
  variant?: 'hero' | 'section' | 'cta';
}

withDefaults(defineProps<Props>(), {
  variant: 'hero'
});
</script>

<template>
  <div class="gradient-mesh" :class="`gradient-mesh--${variant}`" aria-hidden="true">
    <div class="gradient-mesh__blob gradient-mesh__blob--1"></div>
    <div class="gradient-mesh__blob gradient-mesh__blob--2"></div>
    <div class="gradient-mesh__blob gradient-mesh__blob--3"></div>
  </div>
</template>

<style scoped>
.gradient-mesh {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.gradient-mesh__blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.25;
}

/* Hero variant — larger, more dramatic */
.gradient-mesh--hero .gradient-mesh__blob--1 {
  width: 700px;
  height: 700px;
  top: -20%;
  left: -10%;
  background: radial-gradient(circle, var(--color-accent) 0%, transparent 70%);
  animation: meshRotate 25s linear infinite;
}

.gradient-mesh--hero .gradient-mesh__blob--2 {
  width: 500px;
  height: 500px;
  top: 30%;
  right: -5%;
  background: radial-gradient(circle, #1a5cff 0%, transparent 70%);
  animation: meshRotate 30s linear infinite reverse;
  opacity: 0.1;
}

.gradient-mesh--hero .gradient-mesh__blob--3 {
  width: 400px;
  height: 400px;
  bottom: -10%;
  left: 30%;
  background: radial-gradient(circle, var(--color-accent) 0%, transparent 70%);
  animation: meshRotate 20s linear infinite;
  opacity: 0.08;
}

/* Section variant — subtler */
.gradient-mesh--section .gradient-mesh__blob--1 {
  width: 500px;
  height: 500px;
  top: -30%;
  right: -10%;
  background: radial-gradient(circle, var(--color-accent) 0%, transparent 70%);
  animation: meshRotate 30s linear infinite;
  opacity: 0.08;
}

.gradient-mesh--section .gradient-mesh__blob--2 {
  display: none;
}

.gradient-mesh--section .gradient-mesh__blob--3 {
  width: 400px;
  height: 400px;
  bottom: -20%;
  left: -5%;
  background: radial-gradient(circle, #2a4cff 0%, transparent 70%);
  animation: meshRotate 25s linear infinite reverse;
  opacity: 0.06;
}

/* CTA variant — accent-heavy */
.gradient-mesh--cta .gradient-mesh__blob--1 {
  width: 600px;
  height: 600px;
  top: -40%;
  left: 20%;
  background: radial-gradient(circle, var(--color-accent) 0%, transparent 70%);
  animation: meshRotate 20s linear infinite;
  opacity: 0.2;
}

.gradient-mesh--cta .gradient-mesh__blob--2 {
  width: 400px;
  height: 400px;
  bottom: -30%;
  right: 10%;
  background: radial-gradient(circle, var(--color-accent) 0%, transparent 70%);
  animation: meshRotate 25s linear infinite reverse;
  opacity: 0.15;
}

.gradient-mesh--cta .gradient-mesh__blob--3 {
  display: none;
}

@media (prefers-reduced-motion: reduce) {
  .gradient-mesh__blob {
    animation: none !important;
  }
}
</style>
