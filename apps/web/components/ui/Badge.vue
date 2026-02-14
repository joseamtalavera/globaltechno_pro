<script setup lang="ts">
interface Props {
  label: string;
  variant?: 'default' | 'accent' | 'dark';
}

withDefaults(defineProps<Props>(), {
  variant: 'default'
});
</script>

<template>
  <span class="badge" :class="`badge--${variant}`">{{ label }}</span>
</template>

<style scoped>
.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.7rem;
  border-radius: var(--radius-full);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  line-height: 1.4;
}

.badge--default {
  border: 1px solid var(--color-border-light);
  color: var(--color-text-secondary);
  background: transparent;
}

.badge--accent {
  border: 1px solid var(--color-accent);
  color: var(--color-accent);
  background: var(--color-accent-subtle);
}

.badge--dark {
  border: 1px solid var(--color-border-dark);
  color: var(--color-text-muted-on-dark);
  background: rgba(255, 255, 255, 0.03);
}
</style>
