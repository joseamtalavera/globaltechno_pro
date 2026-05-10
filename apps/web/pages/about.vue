<script setup lang="ts">
useSeoMeta({
  title: 'About',
  description:
    'Globaltechno builds custom software for problems that don\'t fit a template. Engineering-first, no SaaS, no fixed paths.',
  ogTitle: 'About Globaltechno'
});

const principles = [
  {
    number: '01',
    title: 'Listen before we write code.',
    description:
      'We start with the problem, not the toolkit. The first conversation isn\'t a sales pitch — it\'s a working session.'
  },
  {
    number: '02',
    title: 'Architect before we build.',
    description:
      'Constraints, trade-offs, failure modes. We want the hard decisions made before the budget starts burning.'
  },
  {
    number: '03',
    title: 'Build for handoff.',
    description:
      'Production-grade from day one — tested, observable, documented. Your team owns the result, not us.'
  },
  {
    number: '04',
    title: 'Stay technical.',
    description:
      'Engineering leadership talks to you directly. No project managers translating between you and the people writing the code.'
  }
];

const dontDo = [
  'No SaaS products. No license fees, no per-seat pricing.',
  'No fixed methodology. We adapt to your problem instead of forcing it into a template.',
  'No marketing queue. Inbound goes straight to engineering.',
  'No vendor lock-in. The code is yours, on your infra, the day it ships.'
];
</script>

<template>
  <div>
    <section class="about-hero section section--light">
      <div class="about-hero__inner section__inner section__inner--narrow">
        <SharedScrollReveal>
          <span class="section-label">About</span>
          <h1 class="about-hero__title text-balance">
            Built for problems that don't fit a template.
          </h1>
          <p class="about-hero__lead">
            Globaltechno is an engineering studio for companies that bring problems we want to solve.
            Full-stack apps, testing, and software architecture today — web3, cybersecurity, and agentic
            systems on the way.
          </p>
        </SharedScrollReveal>
      </div>
    </section>

    <section class="about-block section section--light">
      <div class="about-block__inner section__inner section__inner--narrow">
        <SharedScrollReveal>
          <span class="section-label">How we work</span>
          <h2 class="about-block__heading text-balance">
            Four principles. Held loosely.
          </h2>
        </SharedScrollReveal>

        <ol class="about-principles">
          <SharedScrollReveal
            v-for="(p, i) in principles"
            :key="p.number"
            :delay="i * 100"
          >
            <li class="about-principles__item">
              <span class="about-principles__number">{{ p.number }}</span>
              <div class="about-principles__body">
                <h3 class="about-principles__title">{{ p.title }}</h3>
                <p class="about-principles__description">{{ p.description }}</p>
              </div>
            </li>
          </SharedScrollReveal>
        </ol>
      </div>
    </section>

    <section class="about-block section section--alt">
      <div class="about-block__inner section__inner section__inner--narrow">
        <SharedScrollReveal>
          <span class="section-label">What we don't do</span>
          <h2 class="about-block__heading text-balance">
            What you won't find here.
          </h2>
        </SharedScrollReveal>

        <ul class="about-dont">
          <SharedScrollReveal
            v-for="(d, i) in dontDo"
            :key="d"
            :delay="i * 80"
          >
            <li class="about-dont__item">{{ d }}</li>
          </SharedScrollReveal>
        </ul>
      </div>
    </section>

    <section class="about-block section section--light">
      <div class="about-block__inner section__inner section__inner--narrow">
        <SharedScrollReveal>
          <span class="section-label">Where we are</span>
          <h2 class="about-block__heading text-balance">
            Tallinn, Estonia. Working across the EU.
          </h2>
          <p class="about-where__body">
            Globaltechno OÜ is registered in Estonia. We work remote-first with clients across Europe and
            beyond, and we run on EU infrastructure by default. If you're navigating NIS2, GDPR, or eIDAS 2.0,
            you're already speaking our language.
          </p>
          <p class="about-where__body">
            Reach us at
            <a href="mailto:hello@globaltechno.eu" class="about-where__email">hello@globaltechno.eu</a>.
          </p>
        </SharedScrollReveal>
      </div>
    </section>

    <HomeClosingCtaSection />
  </div>
</template>

<style scoped>
.about-hero {
  padding-top: clamp(7rem, 12vw, 10rem);
  padding-bottom: clamp(2rem, 4vw, 4rem);
}

.about-hero__inner {
  max-width: var(--max-width-narrow);
  margin: 0 auto;
}

.about-hero__title {
  margin-top: 0.25rem;
  font-size: clamp(2.75rem, 7vw, 6rem);
  letter-spacing: -0.04em;
  line-height: 1.0;
}

.about-hero__lead {
  margin-top: 1.5rem;
  font-size: clamp(1.1rem, 1.6vw, 1.3rem);
  line-height: 1.6;
  color: var(--ink-mute);
  max-width: 60ch;
}

.about-block__inner {
  max-width: var(--max-width-narrow);
  margin: 0 auto;
}

.about-block__heading {
  margin: 0.25rem 0 2.5rem;
  font-size: clamp(1.85rem, 4vw, 2.85rem);
  letter-spacing: -0.025em;
  line-height: 1.1;
}

/* Principles list */
.about-principles {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.about-principles__item {
  display: grid;
  grid-template-columns: 6rem 1fr;
  align-items: baseline;
  gap: 2rem;
  padding: 2rem 0;
  border-top: 1px solid var(--line);
}

.about-principles > :last-child .about-principles__item {
  border-bottom: 1px solid var(--line);
}

.about-principles__number {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
}

.about-principles__title {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3vw, 2.1rem);
  letter-spacing: -0.025em;
  line-height: 1.15;
  color: var(--ink);
  margin-bottom: 0.75rem;
}

.about-principles__description {
  font-size: 1.025rem;
  line-height: 1.6;
  color: var(--ink-mute);
  max-width: 56ch;
}

/* Don't-do list */
.about-dont {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.about-dont__item {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  letter-spacing: -0.025em;
  line-height: 1.25;
  color: var(--ink);
  padding: 1.75rem 0;
  border-top: 1px solid var(--line);
}

.about-dont > :last-child .about-dont__item {
  border-bottom: 1px solid var(--line);
}

/* Where */
.about-where__body {
  font-size: 1.075rem;
  line-height: 1.7;
  color: var(--ink);
  max-width: 62ch;
  margin-bottom: 1rem;
}

.about-where__email {
  color: var(--ink);
  border-bottom: 1px solid var(--ink);
  padding-bottom: 1px;
  transition: color var(--duration-fast) ease, border-color var(--duration-fast) ease;
}

.about-where__email:hover {
  color: var(--accent);
  border-bottom-color: var(--accent);
}

@media (max-width: 640px) {
  .about-principles__item {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1.75rem 0;
  }
}
</style>
