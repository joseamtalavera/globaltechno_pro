<script setup lang="ts">
import { contactLeadSchema, type ContactSubmitResponse } from '@globaltechno/shared';

useSeoMeta({
  title: 'Brief',
  description: 'Tell us about your problem and what you need. Direct line to engineering.',
  ogTitle: 'Brief — Globaltechno'
});

const config = useRuntimeConfig();

type ServiceKey = 'full-stack' | 'testing' | 'architecture' | 'not-sure' | 'other';

const step = ref<1 | 2 | 3 | 4>(1);

const form = reactive({
  problem: '',
  needs: [] as ServiceKey[],
  otherNeed: '',
  name: '',
  email: '',
  company: '',
  timeline: '',
  consent: false
});

const pending = ref(false);
const error = ref<string | null>(null);
const success = ref<ContactSubmitResponse | null>(null);

const needs: ReadonlyArray<{ key: ServiceKey; label: string; description: string }> = [
  { key: 'full-stack', label: 'Full-stack build', description: 'Application, end-to-end' },
  { key: 'testing', label: 'Testing & QA', description: 'Automated suites + signed reports' },
  { key: 'architecture', label: 'Architecture', description: 'Design before build' },
  { key: 'not-sure', label: 'Not sure yet', description: 'Help us scope it' },
  { key: 'other', label: 'Something else', description: 'Tell us in your own words' }
];

function toggleNeed(k: ServiceKey): void {
  const i = form.needs.indexOf(k);
  if (i >= 0) form.needs.splice(i, 1);
  else form.needs.push(k);
}

const canProceedStep1 = computed(() => form.problem.trim().length >= 20);
const canProceedStep2 = computed(() => form.needs.length > 0);
const canSubmit = computed(
  () =>
    form.name.trim().length >= 2 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()) &&
    form.consent
);

function next(): void {
  if (step.value === 1 && !canProceedStep1.value) return;
  if (step.value === 2 && !canProceedStep2.value) return;
  if (step.value < 3) {
    step.value = (step.value + 1) as 1 | 2 | 3;
  }
}

function back(): void {
  if (step.value > 1) {
    step.value = (step.value - 1) as 1 | 2 | 3;
  }
}

async function submit(): Promise<void> {
  error.value = null;
  if (!canSubmit.value) {
    error.value = 'Add your name, a valid email, and tick consent to send.';
    return;
  }

  const needsLabels = form.needs
    .map(k => needs.find(n => n.key === k)?.label ?? k)
    .join(', ');

  const otherSuffix =
    form.needs.includes('other') && form.otherNeed.trim()
      ? ` — ${form.otherNeed.trim()}`
      : '';

  const message = [
    `Problem\n${form.problem.trim()}`,
    `Needs: ${needsLabels}${otherSuffix}`,
    form.timeline.trim() ? `Timeline: ${form.timeline.trim()}` : null
  ]
    .filter(Boolean)
    .join('\n\n');

  const payload = {
    name: form.name.trim(),
    email: form.email.trim(),
    company: form.company.trim() || undefined,
    message,
    consent: true as const
  };

  const parsed = contactLeadSchema.safeParse(payload);
  if (!parsed.success) {
    error.value = parsed.error.issues[0]?.message ?? 'Validation failed.';
    return;
  }

  pending.value = true;
  try {
    const response = await $fetch<ContactSubmitResponse>(
      `${config.public.apiBase}/contact`,
      {
        method: 'POST',
        body: { ...parsed.data, serviceInterest: form.needs[0] }
      }
    );
    success.value = response;
    step.value = 4;
  } catch (e) {
    error.value =
      (e as { message?: string })?.message ?? 'Submission failed. Please retry shortly.';
  } finally {
    pending.value = false;
  }
}
</script>

<template>
  <div class="brief">
    <section class="brief__hero section section--light">
      <div class="brief__hero-inner section__inner section__inner--narrow">
        <SharedScrollReveal>
          <span class="section-label">Brief</span>
          <h1 class="brief__title text-balance">
            Tell us what's broken,<br>or what's worth building.
          </h1>
          <p class="brief__lead">
            Direct line to engineering. No marketing queue, no sales pitch.
          </p>
        </SharedScrollReveal>
      </div>
    </section>

    <section class="brief__form-section section section--light">
      <div class="brief__form-inner section__inner section__inner--narrow">
        <!-- Progress -->
        <div v-if="step < 4" class="brief__progress">
          <span
            v-for="i in 3"
            :key="i"
            class="brief__progress-dot"
            :class="{
              'brief__progress-dot--active': step === i,
              'brief__progress-dot--done': step > i
            }"
          >
            {{ i }}
          </span>
          <span class="brief__progress-line" />
        </div>

        <Transition name="step" mode="out-in">
          <!-- Step 1: Problem -->
          <div v-if="step === 1" key="step-1" class="brief__step">
            <h2 class="brief__step-title">What's the problem?</h2>
            <p class="brief__step-sub">
              Describe what's broken, blocked, or worth solving. The more specific the better.
            </p>

            <textarea
              v-model="form.problem"
              rows="7"
              placeholder="We're stuck because…"
              autofocus
              class="brief__textarea"
            />

            <div class="brief__hint">
              <span :class="{ 'brief__hint-dim': form.problem.trim().length >= 20 }">
                {{ form.problem.trim().length }} / 20 characters minimum
              </span>
            </div>

            <div class="brief__actions">
              <UiButton
                variant="filled-ink"
                size="lg"
                :disabled="!canProceedStep1"
                @click="next"
              >
                Continue →
              </UiButton>
            </div>
          </div>

          <!-- Step 2: Needs -->
          <div v-else-if="step === 2" key="step-2" class="brief__step">
            <h2 class="brief__step-title">What do you need?</h2>
            <p class="brief__step-sub">Pick what fits. We'll figure out the rest together.</p>

            <div class="brief__chips">
              <button
                v-for="n in needs"
                :key="n.key"
                type="button"
                class="brief__chip"
                :class="{ 'brief__chip--selected': form.needs.includes(n.key) }"
                @click="toggleNeed(n.key)"
              >
                <span class="brief__chip-label">{{ n.label }}</span>
                <span class="brief__chip-description">{{ n.description }}</span>
              </button>
            </div>

            <div v-if="form.needs.includes('other')" class="brief__field">
              <label for="brief-other" class="brief__label">What kind of "something else"?</label>
              <input
                id="brief-other"
                v-model="form.otherNeed"
                type="text"
                placeholder="A short description"
                class="brief__input"
              />
            </div>

            <div class="brief__actions">
              <UiButton variant="ghost-ink" size="lg" @click="back">← Back</UiButton>
              <UiButton
                variant="filled-ink"
                size="lg"
                :disabled="!canProceedStep2"
                @click="next"
              >
                Continue →
              </UiButton>
            </div>
          </div>

          <!-- Step 3: Contact -->
          <div v-else-if="step === 3" key="step-3" class="brief__step">
            <h2 class="brief__step-title">Where do we send the reply?</h2>
            <p class="brief__step-sub">
              Direct intake by engineering. We respond within 2 business days.
            </p>

            <form class="brief__form" @submit.prevent="submit">
              <div class="brief__field-row">
                <div class="brief__field">
                  <label for="brief-name" class="brief__label">
                    Name <span class="brief__required">*</span>
                  </label>
                  <input
                    id="brief-name"
                    v-model="form.name"
                    type="text"
                    autocomplete="name"
                    required
                    class="brief__input"
                  />
                </div>

                <div class="brief__field">
                  <label for="brief-company" class="brief__label">Company</label>
                  <input
                    id="brief-company"
                    v-model="form.company"
                    type="text"
                    autocomplete="organization"
                    class="brief__input"
                  />
                </div>
              </div>

              <div class="brief__field">
                <label for="brief-email" class="brief__label">
                  Email <span class="brief__required">*</span>
                </label>
                <input
                  id="brief-email"
                  v-model="form.email"
                  type="email"
                  autocomplete="email"
                  required
                  class="brief__input"
                />
              </div>

              <div class="brief__field">
                <label for="brief-timeline" class="brief__label">
                  How soon? <span class="brief__optional">(optional)</span>
                </label>
                <input
                  id="brief-timeline"
                  v-model="form.timeline"
                  type="text"
                  placeholder="e.g. starting in 2 weeks, exploratory, ASAP…"
                  class="brief__input"
                />
              </div>

              <label class="brief__consent">
                <input v-model="form.consent" type="checkbox" required />
                <span>I consent to processing this brief for response purposes.</span>
              </label>

              <p v-if="error" class="brief__error" role="alert">{{ error }}</p>

              <div class="brief__actions">
                <UiButton variant="ghost-ink" size="lg" type="button" @click="back">
                  ← Back
                </UiButton>
                <UiButton
                  variant="filled-ink"
                  size="lg"
                  type="submit"
                  :disabled="!canSubmit || pending"
                  :loading="pending"
                >
                  {{ pending ? 'Sending…' : 'Send brief →' }}
                </UiButton>
              </div>
            </form>
          </div>

          <!-- Step 4: Success -->
          <div v-else key="step-4" class="brief__step brief__success">
            <div class="brief__check" aria-hidden="true">
              <svg viewBox="0 0 64 64" width="64" height="64">
                <circle
                  cx="32"
                  cy="32"
                  r="30"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="brief__check-circle"
                />
                <path
                  d="M20 33 L29 42 L46 22"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="brief__check-tick"
                />
              </svg>
            </div>

            <h2 class="brief__step-title">Brief received.</h2>
            <p class="brief__step-sub">
              We'll be back shortly.
              <span v-if="success?.id">Reference {{ success.id }}.</span>
            </p>

            <div class="brief__actions">
              <UiButton variant="ghost-ink" size="lg" to="/work">See our work</UiButton>
              <UiButton variant="link-ink" to="/">Back to home</UiButton>
            </div>
          </div>
        </Transition>
      </div>
    </section>
  </div>
</template>

<style scoped>
.brief__hero {
  padding-top: clamp(7rem, 12vw, 10rem);
  padding-bottom: clamp(2rem, 4vw, 4rem);
}

.brief__hero-inner {
  max-width: var(--max-width-narrow);
  margin: 0 auto;
}

.brief__title {
  margin-top: 0.25rem;
  font-size: clamp(2.5rem, 7vw, 5.5rem);
  letter-spacing: -0.035em;
  line-height: 1.0;
}

.brief__lead {
  margin-top: 1.25rem;
  font-size: clamp(1.05rem, 1.5vw, 1.25rem);
  line-height: 1.6;
  color: var(--ink-mute);
}

.brief__form-section {
  padding-top: 2rem;
  padding-bottom: clamp(5rem, 10vw, 9rem);
}

.brief__form-inner {
  max-width: var(--max-width-narrow);
  margin: 0 auto;
}

/* Progress */
.brief__progress {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--line);
}

.brief__progress-dot {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid var(--ink-faint);
  background: var(--paper-soft);
  color: var(--ink-faint);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 500;
  transition:
    background var(--duration-fast) ease,
    color var(--duration-fast) ease,
    border-color var(--duration-fast) ease;
  z-index: 1;
}

.brief__progress-dot--active {
  background: var(--ink);
  color: var(--paper);
  border-color: var(--ink);
}

.brief__progress-dot--done {
  background: var(--accent);
  color: var(--paper);
  border-color: var(--accent);
}

.brief__progress-line {
  display: none;
}

/* Step container */
.brief__step {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.brief__step-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4.5vw, 3.25rem);
  letter-spacing: -0.03em;
  line-height: 1.05;
  color: var(--ink);
  margin: 0;
}

.brief__step-sub {
  font-size: 1.05rem;
  line-height: 1.55;
  color: var(--ink-mute);
  max-width: 56ch;
  margin: -0.25rem 0 1.25rem;
}

/* Textarea */
.brief__textarea {
  width: 100%;
  min-height: 220px;
  font-family: var(--font-body);
  font-size: 1.05rem;
  line-height: 1.6;
  resize: vertical;
}

.brief__hint {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-faint);
  margin-top: -0.5rem;
}

.brief__hint-dim {
  color: var(--success);
}

/* Chips */
.brief__chips {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.85rem;
  margin-top: 0.5rem;
}

.brief__chip {
  position: relative;
  text-align: left;
  background: var(--paper-soft);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  padding: 1.1rem 1.25rem;
  cursor: pointer;
  transition:
    background var(--duration-fast) ease,
    border-color var(--duration-fast) ease,
    transform var(--duration-fast) ease;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.brief__chip:hover {
  border-color: var(--ink-faint);
  transform: translateY(-1px);
}

.brief__chip--selected {
  background: var(--accent-wash);
  border-color: var(--accent);
}

.brief__chip-label {
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 500;
  color: var(--ink);
}

.brief__chip-description {
  font-size: 0.85rem;
  color: var(--ink-mute);
  line-height: 1.4;
}

/* Form fields */
.brief__form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.brief__field-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.brief__field {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.brief__label {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-mute);
  font-weight: 500;
}

.brief__required {
  color: var(--accent);
}

.brief__optional {
  color: var(--ink-faint);
  text-transform: none;
  letter-spacing: 0;
  font-size: 0.72rem;
}

.brief__input {
  width: 100%;
}

.brief__consent {
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--ink-mute);
  cursor: pointer;
  margin-top: 0.5rem;
}

.brief__consent input[type='checkbox'] {
  width: auto;
  margin-top: 0.2rem;
  accent-color: var(--accent);
}

.brief__error {
  font-size: 0.9rem;
  color: var(--danger);
  margin-top: -0.25rem;
}

/* Actions */
.brief__actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
}

/* Success */
.brief__success {
  align-items: flex-start;
}

.brief__check {
  color: var(--accent);
  margin-bottom: 1rem;
}

.brief__check-circle {
  stroke-dasharray: 188;
  stroke-dashoffset: 188;
  animation: brief-circle 0.7s var(--ease-out) forwards;
}

.brief__check-tick {
  stroke-dasharray: 60;
  stroke-dashoffset: 60;
  animation: brief-tick 0.45s var(--ease-out) 0.55s forwards;
}

@keyframes brief-circle {
  to { stroke-dashoffset: 0; }
}

@keyframes brief-tick {
  to { stroke-dashoffset: 0; }
}

/* Step transitions */
.step-enter-active,
.step-leave-active {
  transition: opacity 320ms var(--ease-out), transform 320ms var(--ease-out);
}

.step-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.step-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 640px) {
  .brief__chips,
  .brief__field-row {
    grid-template-columns: 1fr;
  }

  .brief__actions {
    flex-direction: column-reverse;
    align-items: stretch;
  }

  .brief__actions .btn {
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .brief__check-circle,
  .brief__check-tick {
    animation-duration: 0.01ms !important;
    stroke-dashoffset: 0 !important;
  }
}
</style>
