<script setup lang="ts">
interface Props {
  variant?: 'filled-ink' | 'ghost-ink' | 'link-ink';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  loading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'filled-ink',
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
    color var(--duration-fast) ease,
    border-color var(--duration-fast) ease,
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

.btn--filled-ink {
  background-color: var(--accent);
  color: var(--paper);
}

.btn--filled-ink:hover:not(:disabled) {
  background-color: var(--accent-deep);
  box-shadow: 0 2px 14px var(--accent-glow);
}

.btn--ghost-ink {
  background: transparent;
  border: 1px solid var(--ink);
  color: var(--ink);
}

.btn--ghost-ink:hover:not(:disabled) {
  background: var(--ink);
  color: var(--paper);
}

.btn--link-ink {
  background: transparent;
  border: none;
  color: var(--ink);
  padding: 0;
  border-radius: 0;
  font-weight: 500;
  text-underline-offset: 4px;
  text-decoration-thickness: 1px;
}

.btn--link-ink .btn__content::after {
  content: '→';
  display: inline-block;
  margin-left: 0.4rem;
  transition: transform var(--duration-fast) var(--ease-out);
}

.btn--link-ink:hover:not(:disabled) {
  transform: none;
  text-decoration: underline;
}

.btn--link-ink:hover:not(:disabled) .btn__content::after {
  transform: translateX(3px);
}

/* Loading */
.btn--loading .btn__content {
  opacity: 0.6;
}
</style>
