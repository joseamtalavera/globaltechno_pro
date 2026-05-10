<script setup lang="ts">
useSeoMeta({
  title: 'be-working',
  description:
    'Booking platform for Spanish coworking spaces — built end-to-end. Real-time availability, payments, and member portals.',
  ogTitle: 'be-working — Globaltechno work'
});

const stack = [
  'Nuxt 3',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'Prisma',
  'Stripe',
  'AWS',
  'Docker'
];
</script>

<template>
  <div class="case-study">
    <section class="cs-hero section section--light">
      <div class="cs-hero__inner section__inner section__inner--narrow">
        <SharedScrollReveal>
          <p class="cs-hero__eyebrow">
            <NuxtLink to="/work">Work</NuxtLink>
            <span aria-hidden="true">·</span>
            <span>2024</span>
          </p>
          <h1 class="cs-hero__title text-balance">be-working</h1>
          <p class="cs-hero__role">Full-stack build · Booking platform for coworking spaces</p>
          <p class="cs-hero__summary">
            A multi-location booking platform for Spanish coworking operators. Real-time room and desk availability,
            member subscriptions, automated invoicing, and operator-side scheduling — replacing a chaotic mix of
            email threads and spreadsheets.
          </p>
          <a
            href="https://be-working.com"
            target="_blank"
            rel="noopener noreferrer"
            class="cs-hero__live"
          >
            be-working.com <span aria-hidden="true">↗</span>
          </a>
        </SharedScrollReveal>
      </div>
    </section>

    <section class="cs-cover section section--light">
      <div class="cs-cover__inner section__inner">
        <SharedScrollReveal direction="scale">
          <div class="cs-cover__media" aria-hidden="true">
            <span class="cs-cover__title">be-working</span>
            <span class="cs-cover__sub">Coworking, booked.</span>
          </div>
        </SharedScrollReveal>
      </div>
    </section>

    <section class="cs-block section section--light">
      <div class="cs-block__inner section__inner section__inner--narrow">
        <SharedScrollReveal>
          <span class="section-label">Problem</span>
          <h2 class="cs-block__heading text-balance">
            Bookings managed by email. Mistakes by default.
          </h2>
          <p class="cs-block__body">
            Spanish coworking operators were running multi-location businesses on top of email threads, paper
            ledgers, and ad-hoc spreadsheets. Members couldn't see real-time availability. Operators spent hours
            reconciling bookings. Double-bookings were routine. New members were onboarded by hand.
          </p>
          <p class="cs-block__body">
            They needed a single platform that members and operators could trust — one source of truth for who's
            booked where, what's paid, and what's next.
          </p>
        </SharedScrollReveal>
      </div>
    </section>

    <section class="cs-block section section--alt">
      <div class="cs-block__inner section__inner section__inner--narrow">
        <SharedScrollReveal>
          <span class="section-label">Approach</span>
          <h2 class="cs-block__heading text-balance">
            One platform. Three audiences. Zero spreadsheets.
          </h2>
          <p class="cs-block__body">
            We designed the product as three coordinated surfaces sharing a single backend:
          </p>
          <ul class="cs-block__list">
            <li>
              <strong>Public booking site</strong> — real-time availability, instant reservation, Stripe checkout.
            </li>
            <li>
              <strong>Member portal</strong> — subscriptions, booking history, invoices, account self-service.
            </li>
            <li>
              <strong>Operator dashboard</strong> — multi-location scheduling, member management, revenue reports.
            </li>
          </ul>
          <p class="cs-block__body">
            Built on Nuxt 3 SSR for performance and SEO, a Node API with Prisma against PostgreSQL, Stripe for
            payments, role-based access, and deployment on AWS with CI/CD.
          </p>
        </SharedScrollReveal>
      </div>
    </section>

    <section class="cs-block section section--light">
      <div class="cs-block__inner section__inner section__inner--narrow">
        <SharedScrollReveal>
          <span class="section-label">Outcome</span>
          <h2 class="cs-block__heading text-balance">
            Live across multiple cities. Members book themselves. Operators got their evenings back.
          </h2>
          <p class="cs-block__body">
            Since launch, members book directly through the platform without operator intervention. Double-bookings
            stopped happening. Operators reclaimed time previously lost to manual reconciliation. New locations
            onboard in hours, not weeks.
          </p>
        </SharedScrollReveal>
      </div>
    </section>

    <section class="cs-stack section section--light">
      <div class="cs-stack__inner section__inner section__inner--narrow">
        <SharedScrollReveal>
          <span class="section-label">Stack</span>
          <ul class="cs-stack__list">
            <li v-for="item in stack" :key="item" class="cs-stack__item">{{ item }}</li>
          </ul>
        </SharedScrollReveal>
      </div>
    </section>

    <HomeClosingCtaSection />
  </div>
</template>

<style scoped>
.cs-hero {
  padding-top: clamp(7rem, 12vw, 10rem);
  padding-bottom: clamp(2rem, 4vw, 4rem);
}

.cs-hero__inner {
  max-width: var(--max-width-narrow);
  margin: 0 auto;
}

.cs-hero__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
}

.cs-hero__eyebrow a {
  color: var(--color-text-secondary);
  border-bottom: 1px solid transparent;
  transition: color var(--duration-fast) ease, border-color var(--duration-fast) ease;
}

.cs-hero__eyebrow a:hover {
  color: var(--color-accent);
  border-bottom-color: var(--color-accent);
}

.cs-hero__title {
  font-size: clamp(3rem, 9vw, 7rem);
  letter-spacing: -0.04em;
  line-height: 1.0;
  margin: 0 0 1.5rem;
}

.cs-hero__role {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  letter-spacing: 0.04em;
  color: var(--color-text-secondary);
  margin-bottom: 2rem;
}

.cs-hero__summary {
  font-size: clamp(1.15rem, 1.7vw, 1.35rem);
  line-height: 1.55;
  color: var(--color-text-primary);
  max-width: 60ch;
  margin-bottom: 2rem;
}

.cs-hero__live {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  letter-spacing: 0.04em;
  color: var(--color-text-primary);
  border-bottom: 1px solid var(--color-text-primary);
  padding-bottom: 2px;
  transition: color var(--duration-fast) ease, border-color var(--duration-fast) ease;
}

.cs-hero__live:hover {
  color: var(--color-accent);
  border-bottom-color: var(--color-accent);
}

/* Cover */
.cs-cover {
  padding-top: 2rem;
  padding-bottom: clamp(4rem, 8vw, 7rem);
}

.cs-cover__media {
  aspect-ratio: 16 / 9;
  border-radius: var(--radius-xl);
  background:
    radial-gradient(ellipse at 25% 20%, var(--color-accent-soft), transparent 55%),
    linear-gradient(135deg, #1A1A2E 0%, #0E0E10 100%);
  color: var(--color-bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  border: 1px solid var(--color-border);
  overflow: hidden;
}

.cs-cover__title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 8vw, 6rem);
  letter-spacing: -0.04em;
  color: var(--color-bg);
}

.cs-cover__sub {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-accent);
}

/* Block sections */
.cs-block__inner {
  max-width: var(--max-width-narrow);
  margin: 0 auto;
}

.cs-block__heading {
  margin: 0.25rem 0 2rem;
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  letter-spacing: -0.025em;
  line-height: 1.1;
}

.cs-block__body {
  font-size: 1.075rem;
  line-height: 1.7;
  color: var(--color-text-primary);
  max-width: 62ch;
  margin-bottom: 1.25rem;
}

.cs-block__body:last-child {
  margin-bottom: 0;
}

.cs-block__list {
  list-style: none;
  margin: 1.5rem 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cs-block__list li {
  position: relative;
  padding-left: 1.75rem;
  font-size: 1.025rem;
  line-height: 1.65;
  color: var(--color-text-primary);
}

.cs-block__list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.7rem;
  width: 14px;
  height: 1px;
  background: var(--color-accent);
}

.cs-block__list li strong {
  font-weight: 500;
  color: var(--color-text-primary);
}

/* Stack */
.cs-stack__inner {
  max-width: var(--max-width-narrow);
  margin: 0 auto;
}

.cs-stack__list {
  list-style: none;
  margin: 1rem 0 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.cs-stack__item {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  padding: 0.4rem 0.85rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  color: var(--color-text-primary);
  background: var(--color-bg-card);
}
</style>
