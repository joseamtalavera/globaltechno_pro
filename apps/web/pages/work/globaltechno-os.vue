<script setup lang="ts">
useSeoMeta({
  title: 'Globaltechno OS',
  description:
    'The internal platform we run our studio on — project intake, scoping, and shipping rituals as one tool. Currently in private beta with four design partners.',
  ogTitle: 'Globaltechno OS — Globaltechno work'
});

const stack = [
  'Nuxt 3',
  'TypeScript',
  'NestJS',
  'PostgreSQL',
  'Prisma',
  'Redis',
  'AWS',
  'Terraform'
];
</script>

<template>
  <div class="case-study">
    <section class="cs-hero section section--light">
      <div class="cs-hero__inner section__inner section__inner--narrow">
        <SharedScrollReveal>
          <SharedKicker label="Work · 2026" ordinal="03" />
          <h1 class="cs-hero__title text-balance">
            Globaltechno OS — <em>our own</em><br>runway.
          </h1>
          <p class="cs-hero__role">Internal product · Studio operating system</p>
          <p class="cs-hero__summary">
            The platform we run our studio on: project intake, scoping, and shipping
            rituals as one tool. We're piloting it with a handful of teams before
            opening it up.
          </p>
          <div class="cs-hero__meta-row">
            <span class="pill pill--coming">
              <span class="pill__dot" aria-hidden="true" />
              Private beta · 4 of 8 partners
            </span>
          </div>
        </SharedScrollReveal>
      </div>
    </section>

    <section class="cs-cover section section--light">
      <div class="cs-cover__inner section__inner">
        <SharedScrollReveal direction="scale">
          <div class="cs-cover__media" aria-hidden="true">
            <span class="cs-cover__glyph">/ /</span>
            <span class="cs-cover__title">Globaltechno OS</span>
            <span class="cs-cover__sub">In flight.</span>
          </div>
        </SharedScrollReveal>
      </div>
    </section>

    <section class="cs-block section section--light">
      <div class="cs-block__inner section__inner section__inner--narrow">
        <SharedScrollReveal>
          <SharedKicker label="Problem" ordinal="01" />
          <h2 class="cs-block__heading text-balance">
            Studio admin <em>fades</em> with every project.
          </h2>
          <p class="cs-block__body">
            We were running intake in email threads, scoping in Notion, sprints in
            Linear, hand-offs in PDFs. Different tools for every phase, no shared
            spine, knowledge thinning out the moment an engagement ended.
          </p>
          <p class="cs-block__body">
            We needed one place where every brief, scope week, sprint, and hand-off
            lived — and where the next call could pull from the last one.
          </p>
        </SharedScrollReveal>
      </div>
    </section>

    <section class="cs-block section section--alt">
      <div class="cs-block__inner section__inner section__inner--narrow">
        <SharedScrollReveal>
          <SharedKicker label="Approach" ordinal="02" />
          <h2 class="cs-block__heading text-balance">
            One spine. <em>Four rituals.</em>
          </h2>
          <p class="cs-block__body">
            Globaltechno OS models the four phases of an engagement as first-class
            objects, each with its own shape and its own deliverable:
          </p>
          <ul class="cs-block__list">
            <li>
              <strong>Problem call</strong> — 90-minute intake notes auto-structured
              into a brief.
            </li>
            <li>
              <strong>Scope week</strong> — fixed-price proposals composed from the
              brief, traced back to specific elicited requirements.
            </li>
            <li>
              <strong>Build sprint</strong> — sprint board with weekly demo logs
              and signed acceptance per increment.
            </li>
            <li>
              <strong>Hand-off</strong> — code, infra, docs, and a 30-day support
              window bundled as a permanent project record.
            </li>
          </ul>
          <p class="cs-block__body">
            Built dogfood-first: we use it on every Globaltechno engagement, then
            roll changes to design partners once they survive a real project.
          </p>
        </SharedScrollReveal>
      </div>
    </section>

    <section class="cs-block section section--light">
      <div class="cs-block__inner section__inner section__inner--narrow">
        <SharedScrollReveal>
          <SharedKicker label="Outcome — early signals" ordinal="03" />
          <h2 class="cs-block__heading text-balance">
            Four partners shipping. <em>Two more in scope.</em>
          </h2>
          <p class="cs-block__body">
            Four design partners are running their engagements through the OS today.
            Two more are in scope week, with two slots remaining before we close
            cohort one.
          </p>
          <p class="cs-block__body">
            Early signals: brief-to-scope-proposal time dropped from days to hours;
            requirement traceability went from <em>"trust us"</em> to a clickable
            chain from problem call to merged commit; hand-off package became a
            single artefact instead of three Drive folders.
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

    <section class="cs-cta section section--alt">
      <div class="cs-cta__inner section__inner section__inner--narrow">
        <SharedScrollReveal>
          <SharedKicker label="Cohort one" ordinal="05" />
          <h2 class="cs-cta__title text-balance">
            Two slots left. <em>Want one?</em>
          </h2>
          <p class="cs-cta__lede">
            Design partners are studios and teams who run real projects through
            the OS, give us blunt feedback, and get cohort-one pricing in return.
          </p>
          <UiButton
            variant="filled-ink"
            size="lg"
            to="/contact?interest=globaltechno-os"
            magnetic
          >
            Ask for an invite <span class="btn__arrow">↗</span>
          </UiButton>
        </SharedScrollReveal>
      </div>
    </section>
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
  margin-bottom: 1.5rem;
}

.cs-hero__meta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
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
    radial-gradient(ellipse at 50% 50%, var(--accent-wash), transparent 55%),
    repeating-linear-gradient(
      45deg,
      var(--paper-soft) 0,
      var(--paper-soft) 18px,
      var(--paper-deep) 18px,
      var(--paper-deep) 19px
    );
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
  color: var(--accent);
  letter-spacing: 0.1em;
  font-weight: 500;
}

.cs-cover__title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 7vw, 5rem);
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

/* Blocks */
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

.cs-block__body em {
  font-style: italic;
  color: var(--accent);
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

/* Bespoke CTA tail */
.cs-cta__inner {
  max-width: var(--max-width-narrow);
  margin: 0 auto;
}

.cs-cta__title {
  font-family: var(--font-display);
  font-size: clamp(2.25rem, 6vw, 4.5rem);
  letter-spacing: -0.035em;
  line-height: 1.0;
  color: var(--ink);
  margin: 0.6rem 0 1.25rem;
}

.cs-cta__title em {
  font-style: italic;
  color: var(--accent);
}

.cs-cta__lede {
  font-family: var(--font-body);
  font-size: clamp(1.05rem, 1.5vw, 1.2rem);
  line-height: 1.6;
  color: var(--ink-mute);
  max-width: 56ch;
  margin: 0 0 2rem;
}
</style>
