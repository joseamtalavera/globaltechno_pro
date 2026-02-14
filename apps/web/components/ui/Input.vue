<script setup lang="ts">
interface Props {
  modelValue: string;
  label?: string;
  type?: 'text' | 'email' | 'tel' | 'url';
  placeholder?: string;
  error?: string;
  required?: boolean;
  dark?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  required: false,
  dark: false
});

defineEmits<{
  'update:modelValue': [value: string];
}>();

const inputId = computed(() =>
  props.label ? `input-${props.label.toLowerCase().replace(/\s+/g, '-')}` : undefined
);
</script>

<template>
  <div class="input-group" :class="{ 'input-group--dark': dark, 'input-group--error': error }">
    <label v-if="label" :for="inputId" class="input-group__label">
      {{ label }}
      <span v-if="required" class="input-group__required" aria-label="required">*</span>
    </label>
    <input
      :id="inputId"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :required="required"
      class="input-group__input"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <p v-if="error" class="input-group__error" role="alert">{{ error }}</p>
  </div>
</template>

<style scoped>
.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.input-group__label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-primary);
}

.input-group--dark .input-group__label {
  color: var(--color-text-on-dark);
}

.input-group__required {
  color: var(--color-accent);
  margin-left: 0.15rem;
}

.input-group__input {
  width: 100%;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border-light);
  background: white;
  color: var(--color-text-primary);
  padding: 0.8rem 1rem;
  font-size: 0.95rem;
  transition: border-color var(--duration-fast) ease;
}

.input-group--dark .input-group__input {
  border-color: var(--color-border-dark);
  background: rgba(255, 255, 255, 0.05);
  color: var(--color-text-on-dark);
}

.input-group--error .input-group__input {
  border-color: var(--color-danger);
}

.input-group__error {
  font-size: 0.8rem;
  color: var(--color-danger);
}
</style>
