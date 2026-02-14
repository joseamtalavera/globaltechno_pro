<script setup lang="ts">
interface Props {
  dark?: boolean;
}

withDefaults(defineProps<Props>(), {
  dark: false
});

const email = ref('');
const pending = ref(false);
const success = ref(false);
const error = ref<string | null>(null);

const { subscribeNewsletter } = useApi();

const submit = async () => {
  error.value = null;
  success.value = false;

  if (!email.value || !email.value.includes('@')) {
    error.value = 'Please enter a valid email address.';
    return;
  }

  pending.value = true;

  try {
    await subscribeNewsletter(email.value);
    success.value = true;
    email.value = '';
  } catch (err) {
    const msg =
      err && typeof err === 'object' && 'message' in err
        ? String((err as { message: unknown }).message)
        : 'Unable to subscribe. Please try again.';
    error.value = msg;
  } finally {
    pending.value = false;
  }
};
</script>

<template>
  <form class="newsletter-form" @submit.prevent="submit">
    <div v-if="success" class="newsletter-form__success" role="status">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M5 10l3 3 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      Thanks for subscribing!
    </div>

    <template v-else>
      <div class="newsletter-form__row">
        <input
          v-model="email"
          type="email"
          placeholder="your@email.com"
          required
          :class="['newsletter-form__input', { 'newsletter-form__input--dark': dark }]"
          aria-label="Email address"
        />
        <UiButton
          type="submit"
          variant="filled"
          size="md"
          :disabled="pending"
          :loading="pending"
        >
          {{ pending ? 'Subscribing...' : 'Subscribe' }}
        </UiButton>
      </div>
      <p v-if="error" class="newsletter-form__error" role="alert">{{ error }}</p>
    </template>
  </form>
</template>

<style scoped>
.newsletter-form__row {
  display: flex;
  gap: 0.5rem;
  max-width: 400px;
}

.newsletter-form__input {
  flex: 1;
  min-width: 0;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border-light);
  background: white;
  color: var(--color-text-primary);
  padding: 0.75rem 1rem;
  font-size: 0.925rem;
}

.newsletter-form__input--dark {
  border-color: var(--color-border-dark);
  background: rgba(255, 255, 255, 0.05);
  color: var(--color-text-on-dark);
}

.newsletter-form__input--dark::placeholder {
  color: var(--color-text-muted-on-dark);
}

.newsletter-form__error {
  margin-top: 0.4rem;
  font-size: 0.8rem;
  color: var(--color-danger);
}

.newsletter-form__success {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.925rem;
  font-weight: 500;
  color: var(--color-accent);
}
</style>
