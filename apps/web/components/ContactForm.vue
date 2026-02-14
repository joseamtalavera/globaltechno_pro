<script setup lang="ts">
import { contactLeadSchema, type ContactSubmitResponse } from '@globaltechno/shared';

const config = useRuntimeConfig();

const form = reactive({
  name: '',
  company: '',
  email: '',
  message: '',
  consent: false
});

const pending = ref(false);
const error = ref<string | null>(null);
const success = ref<ContactSubmitResponse | null>(null);

const submit = async (): Promise<void> => {
  error.value = null;
  success.value = null;

  const parsed = contactLeadSchema.safeParse({
    ...form,
    company: form.company || undefined,
    consent: form.consent
  });

  if (!parsed.success) {
    error.value = parsed.error.issues[0]?.message ?? 'Invalid form values';
    return;
  }

  pending.value = true;

  try {
    const response = await $fetch<ContactSubmitResponse>(`${config.public.apiBase}/contact`, {
      method: 'POST',
      body: parsed.data
    });

    success.value = response;
    form.name = '';
    form.company = '';
    form.email = '';
    form.message = '';
    form.consent = false;
  } catch (submitError) {
    const statusMessage =
      submitError && typeof submitError === 'object' && 'message' in submitError
        ? String((submitError as { message: unknown }).message)
        : 'Unable to submit. Please retry later.';
    error.value = statusMessage;
  } finally {
    pending.value = false;
  }
};
</script>

<template>
  <form class="contact-form" @submit.prevent="submit">
    <h3 class="contact-form__title">Project Inquiry</h3>
    <p class="contact-form__intro">Share technical objectives, constraints, and expected outcomes.</p>

    <div class="contact-form__row">
      <div class="contact-form__field">
        <label for="cf-name">Name <span class="contact-form__required">*</span></label>
        <input id="cf-name" v-model="form.name" autocomplete="name" required />
      </div>
      <div class="contact-form__field">
        <label for="cf-company">Company</label>
        <input id="cf-company" v-model="form.company" autocomplete="organization" />
      </div>
    </div>

    <div class="contact-form__field">
      <label for="cf-email">Email <span class="contact-form__required">*</span></label>
      <input id="cf-email" v-model="form.email" type="email" autocomplete="email" required />
    </div>

    <div class="contact-form__field">
      <label for="cf-message">Message <span class="contact-form__required">*</span></label>
      <textarea id="cf-message" v-model="form.message" rows="6" required />
    </div>

    <label class="contact-form__consent">
      <input v-model="form.consent" type="checkbox" required />
      <span>I consent to processing this inquiry for response purposes.</span>
    </label>

    <div class="contact-form__actions">
      <UiButton type="submit" variant="filled" size="md" :disabled="pending" :loading="pending">
        {{ pending ? 'Sending...' : 'Submit Inquiry' }}
      </UiButton>
    </div>

    <p v-if="error" class="contact-form__error" role="alert">{{ error }}</p>
    <p v-if="success" class="contact-form__success" role="status">
      Inquiry received. Reference {{ success.id }}.
    </p>
  </form>
</template>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2rem;
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-lg);
  background: white;
}

.contact-form__title {
  color: var(--color-text-primary);
  margin-bottom: -0.25rem;
}

.contact-form__intro {
  color: var(--color-text-secondary);
  font-size: 0.9rem;
}

.contact-form__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.contact-form__field {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.contact-form__field label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-primary);
}

.contact-form__required {
  color: var(--color-accent);
}

.contact-form__consent {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  cursor: pointer;
}

.contact-form__consent input[type="checkbox"] {
  width: auto;
  margin-top: 0.15rem;
  accent-color: var(--color-accent);
}

.contact-form__actions {
  margin-top: 0.25rem;
}

.contact-form__error {
  font-size: 0.875rem;
  color: var(--color-danger);
}

.contact-form__success {
  font-size: 0.875rem;
  color: var(--color-success);
  font-weight: 500;
}

@media (max-width: 640px) {
  .contact-form__row {
    grid-template-columns: 1fr;
  }
}
</style>
