<script setup lang="ts">
interface Props {
  label: string;
  ordinal?: string;
  onDark?: boolean;
}

withDefaults(defineProps<Props>(), {
  ordinal: undefined,
  onDark: false
});
</script>

<template>
  <span class="kicker" :class="{ 'kicker--on-dark': onDark }">
    <span class="kicker__dot" aria-hidden="true" />
    <span class="kicker__label">{{ label }}</span>
    <span v-if="ordinal" class="kicker__ordinal" aria-hidden="true">· {{ ordinal }}</span>
  </span>
</template>

<style scoped>
.kicker {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink-mute);
  line-height: 1;
}

.kicker--on-dark {
  color: var(--ink-faint);
}

.kicker__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  display: inline-block;
  flex-shrink: 0;
}

.kicker__label {
  white-space: nowrap;
}

.kicker__ordinal {
  color: var(--ink-faint);
}
</style>
