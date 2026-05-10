<script setup lang="ts">
interface Props {
  variant?: 'filled-ink' | 'ghost-ink' | 'link-ink';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  loading?: boolean;
  magnetic?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'filled-ink',
  size: 'md',
  type: 'button',
  disabled: false,
  loading: false,
  magnetic: false
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
    v-magnetic="magnetic"
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
  gap: 0.6rem;
  border: 1px solid transparent;
  border-radius: var(--radius-full);
  font-family: var(--font-body);
  font-weight: 500;
  letter-spacing: -0.005em;
  white-space: nowrap;
  cursor: pointer;
  text-decoration: none;
  transition:
    background-color 220ms var(--ease),
    color 220ms var(--ease),
    border-color 220ms var(--ease),
    transform 220ms var(--ease),
    box-shadow 220ms var(--ease),
    opacity 220ms var(--ease);
}

.btn:hover:not(:disabled) {
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

/* Arrow companion: any element with .btn__arrow inside the slot lifts
   diagonally on hover. Consumers do <UiButton>Foo <span class="btn__arrow">→</span></UiButton>. */
.btn .btn__arrow {
  display: inline-block;
  transition: transform 240ms var(--ease);
}

.btn:hover:not(:disabled) .btn__arrow {
  transform: translate(2px, -2px);
}

/* Sizes — matched to pivot_global reference (pill, 14px base) */
.btn--sm {
  padding: 0.55rem 1rem;
  font-size: 0.8125rem;
}

.btn--md {
  padding: 0.85rem 1.3rem;
  font-size: 0.875rem;
}

.btn--lg {
  padding: 1rem 1.6rem;
  font-size: 0.95rem;
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
  border-color: var(--line);
  color: var(--ink);
}

.btn--ghost-ink:hover:not(:disabled) {
  border-color: var(--ink);
  background: var(--paper-soft);
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
