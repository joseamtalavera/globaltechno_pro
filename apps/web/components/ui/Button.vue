<script setup lang="ts">
interface Props {
  variant?: 'filled' | 'ghost' | 'ghost-light';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  loading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'filled',
  size: 'md',
  type: 'button',
  disabled: false,
  loading: false
});

const isLink = computed(() => props.to || props.href);
const tag = computed(() => {
  if (props.to) return resolveComponent('NuxtLink');
  if (props.href) return 'a';
  return 'button';
});
</script>

<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :type="!isLink ? type : undefined"
    :disabled="disabled || loading"
    class="btn"
    :class="[`btn--${variant}`, `btn--${size}`, { 'btn--loading': loading }]"
  >
    <span class="btn__content">
      <slot />
    </span>
  </component>
</template>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
  border-radius: var(--radius-md);
  font-family: var(--font-body);
  font-weight: 500;
  letter-spacing: -0.01em;
  cursor: pointer;
  text-decoration: none;
  transition:
    background-color var(--duration-fast) ease,
    transform var(--duration-fast) ease,
    box-shadow var(--duration-fast) ease,
    opacity var(--duration-fast) ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn:active {
  transform: translateY(0);
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

/* Sizes */
.btn--sm {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

.btn--md {
  padding: 0.75rem 1.5rem;
  font-size: 0.95rem;
}

.btn--lg {
  padding: 1rem 2rem;
  font-size: 1.05rem;
}

/* Variants */
.btn--filled {
  background-color: var(--color-accent);
  color: var(--color-bg-dark);
}

.btn--filled:hover:not(:disabled) {
  background-color: var(--color-accent-hover);
  box-shadow: 0 4px 20px var(--color-accent-glow);
}

.btn--ghost {
  background: transparent;
  border: 1px solid var(--color-border-dark);
  color: var(--color-text-on-dark);
}

.btn--ghost:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.2);
}

.btn--ghost-light {
  background: transparent;
  border: 1px solid var(--color-border-light);
  color: var(--color-text-primary);
}

.btn--ghost-light:hover:not(:disabled) {
  background: rgba(0, 0, 0, 0.03);
  border-color: var(--color-text-secondary);
}

/* Loading */
.btn--loading .btn__content {
  opacity: 0.6;
}
</style>
