<script setup lang="ts">
const { accent, theme, ACCENTS, cycleAccent, toggleTheme } = useTheme();
const accentName = computed(() => ACCENTS[accent.value]?.name ?? 'Clay');
const isDark = computed(() => theme.value === 'dark');
</script>

<template>
  <div class="theme-switcher" aria-label="Theme controls">
    <button
      class="theme-switcher__btn theme-switcher__accent"
      type="button"
      :aria-label="`Cycle accent — current: ${accentName}`"
      :title="`Accent: ${accentName}`"
      @click="cycleAccent"
    >
      <span class="theme-switcher__dot" aria-hidden="true" />
      <span class="theme-switcher__label">{{ accentName }}</span>
    </button>

    <button
      class="theme-switcher__btn theme-switcher__theme"
      type="button"
      :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
      :title="`${isDark ? 'Light' : 'Dark'} mode`"
      @click="toggleTheme"
    >
      <span aria-hidden="true">{{ isDark ? '☀' : '☾' }}</span>
    </button>
  </div>
</template>

<style scoped>
.theme-switcher {
  position: fixed;
  bottom: 1.25rem;
  left: 1.25rem;
  z-index: 90;
  display: inline-flex;
  align-items: stretch;
  gap: 0.4rem;
  pointer-events: none;
}

.theme-switcher__btn {
  pointer-events: auto;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink-mute);
  background: var(--paper-soft);
  border: 1px solid var(--line);
  border-radius: var(--radius-full);
  padding: 0.45rem 0.8rem;
  cursor: pointer;
  transition:
    color var(--duration-fast) ease,
    border-color var(--duration-fast) ease,
    background var(--duration-fast) ease,
    transform var(--duration-fast) ease;
}

.theme-switcher__btn:hover {
  color: var(--ink);
  border-color: var(--ink-faint);
  transform: translateY(-1px);
}

.theme-switcher__theme {
  padding: 0.45rem 0.6rem;
  font-size: 0.85rem;
  letter-spacing: 0;
}

.theme-switcher__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 2px var(--accent-wash);
}

.theme-switcher__label {
  display: inline-block;
}

@media (max-width: 640px) {
  .theme-switcher {
    bottom: 0.75rem;
    left: 0.75rem;
  }

  .theme-switcher__label {
    display: none;
  }

  .theme-switcher__accent {
    padding: 0.45rem 0.55rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .theme-switcher__btn:hover {
    transform: none;
  }
}
</style>
