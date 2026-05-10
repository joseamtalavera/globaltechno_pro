<script setup lang="ts">
useSeoMeta({
  title: 'be-working',
  description:
    'A workplace platform for teams that don\'t want a Slack-shaped solution. Site, app shell and onboarding rebuilt around a single editorial idea: less surface, more signal.',
  ogTitle: 'be-working — Globaltechno work'
});

const stack = [
  'Next.js',
  'TypeScript',
  'Tailwind',
  'Node.js',
  'PostgreSQL',
  'Prisma',
  'Stripe',
  'Vercel'
];
</script>

<template>
  <div class="case-study">
    <section class="cs-hero section section--light">
      <div class="cs-hero__inner section__inner section__inner--narrow">
        <SharedScrollReveal>
          <SharedKicker label="Work · 2025" ordinal="02" />
          <h1 class="cs-hero__title text-balance">
            be-working — <em>workspace</em>,<br>reduced.
          </h1>
          <p class="cs-hero__role">Product + web · Workplace platform for distributed teams</p>
          <p class="cs-hero__summary">
            A workplace platform for teams that don't want a Slack-shaped solution.
            We rebuilt the site, app shell and onboarding around a single editorial
            idea: less surface, more signal.
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
            <span class="cs-cover__glyph">B / W</span>
            <span class="cs-cover__title">be-working</span>
            <span class="cs-cover__sub">Workspace, reduced.</span>
          </div>
        </SharedScrollReveal>
      </div>
    </section>

    <section class="cs-block section section--light">
      <div class="cs-block__inner section__inner section__inner--narrow">
        <SharedScrollReveal>
          <SharedKicker label="Problem" ordinal="01" />
          <h2 class="cs-block__heading text-balance">
            Bookings managed by email. <em>Mistakes by default.</em>
          </h2>
          <p class="cs-block__body">
            Spanish coworking operators were running multi-location businesses on
            top of email threads, paper ledgers, and ad-hoc spreadsheets. Members
            couldn't see real-time availability. Operators spent hours reconciling
            bookings. Double-bookings were routine. New members were onboarded by
            hand.
          </p>
          <p class="cs-block__body">
            They needed a single platform that members and operators could trust —
            one source of truth for who's booked where, what's paid, and what's next.
          </p>
        </SharedScrollReveal>
      </div>
    </section>

    <section class="cs-block section section--alt">
      <div class="cs-block__inner section__inner section__inner--narrow">
        <SharedScrollReveal>
          <SharedKicker label="Approach" ordinal="02" />
          <h2 class="cs-block__heading text-balance">
            One platform. Three audiences. <em>Zero spreadsheets.</em>
          </h2>
          <p class="cs-block__body">
            We designed the product as three coordinated surfaces sharing a single
            backend:
          </p>
          <ul class="cs-block__list">
            <li>
              <strong>Public booking site</strong> — real-time availability, instant
              reservation, Stripe checkout.
            </li>
            <li>
              <strong>Member portal</strong> — subscriptions, booking history,
              invoices, account self-service.
            </li>
            <li>
              <strong>Operator dashboard</strong> — multi-location scheduling,
              member management, revenue reports.
            </li>
          </ul>
          <p class="cs-block__body">
            Built on Next.js for performance and SEO, a Node API with Prisma against
            PostgreSQL, Stripe for payments, role-based access, and deployment on
            Vercel with CI/CD.
          </p>
        </SharedScrollReveal>
      </div>
    </section>

    <section class="cs-block section section--light">
      <div class="cs-block__inner section__inner section__inner--narrow">
        <SharedScrollReveal>
          <SharedKicker label="Outcome" ordinal="03" />
          <h2 class="cs-block__heading text-balance">
            Live across multiple cities. <em>Members book themselves.</em>
          </h2>
          <p class="cs-block__body">
            Since launch, members book directly through the platform without
            operator intervention. Double-bookings stopped happening. Operators
            reclaimed time previously lost to manual reconciliation. New locations
            onboard in hours, not weeks.
          </p>
        </SharedScrollReveal>
      </div>
    </section>

    <section class="cs-stack section section--light">
      <div class="cs-stack__inner section__inner section__inner--narrow">
        <SharedScrollReveal>
          <SharedKicker label="Stack" ordinal="04" />
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

.cs-hero__title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 9vw, 7.5rem);
  letter-spacing: -0.04em;
  line-height: 0.95;
  margin: 0.6rem 0 1.5rem;
  color: var(--ink);
}

.cs-hero__title em {
  font-style: italic;
  color: var(--accent);
}

.cs-hero__role {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  letter-spacing: 0.04em;
  color: var(--ink-mute);
  margin-bottom: 2rem;
}

.cs-hero__summary {
  font-family: var(--font-display);
  font-size: clamp(1.25rem, 1.8vw, 1.55rem);
  line-height: 1.45;
  color: var(--ink-2);
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
  color: var(--ink);
  border-bottom: 1px solid var(--ink);
  padding-bottom: 2px;
  transition: color var(--duration-fast) ease, border-color var(--duration-fast) ease;
}

.cs-hero__live:hover {
  color: var(--accent);
  border-bottom-color: var(--accent);
}

.cs-cover {
  padding-top: 2rem;
  padding-bottom: clamp(4rem, 8vw, 7rem);
}

.cs-cover__media {
  aspect-ratio: 16 / 9;
  border-radius: var(--radius-xl);
  background:
    radial-gradient(ellipse at 25% 70%, var(--accent-wash), transparent 55%),
    linear-gradient(135deg, var(--paper-soft), var(--paper-deep));
  color: var(--ink);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border: 1px solid var(--line);
  overflow: hidden;
}

.cs-cover__glyph {
  font-family: var(--font-mono);
  font-size: clamp(2rem, 5vw, 4rem);
  letter-spacing: 0.05em;
  color: var(--ink);
  font-weight: 500;
}

.cs-cover__title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 8vw, 6rem);
  letter-spacing: -0.04em;
  color: var(--ink);
}

.cs-cover__sub {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
}

.cs-block__inner {
  max-width: var(--max-width-narrow);
  margin: 0 auto;
}

.cs-block__heading {
  margin: 0.6rem 0 2rem;
  font-size: clamp(1.85rem, 4vw, 2.85rem);
  letter-spacing: -0.025em;
  line-height: 1.05;
  font-family: var(--font-display);
  color: var(--ink);
}

.cs-block__heading em {
  font-style: italic;
  color: var(--accent);
}

.cs-block__body {
  font-family: var(--font-body);
  font-size: 1.075rem;
  line-height: 1.7;
  color: var(--ink);
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
  color: var(--ink);
}

.cs-block__list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.7rem;
  width: 14px;
  height: 1px;
  background: var(--accent);
}

.cs-block__list li strong {
  font-weight: 500;
  color: var(--ink);
}

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
  padding: 0.45rem 0.9rem;
  border: 1px solid var(--line);
  border-radius: var(--radius-full);
  color: var(--ink);
  background: var(--paper-soft);
  transition:
    border-color var(--duration-fast) ease,
    transform var(--duration-fast) ease;
}

.cs-stack__item:hover {
  border-color: var(--ink);
  transform: translateY(-1px);
}
</style>
