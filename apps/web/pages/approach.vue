<script setup lang="ts">
useSeoMeta({
  title: 'Approach',
  description:
    'Six lanes — three live today, three opening next. Requirements Engineering inside an Agile SDLC, with traceability from problem to released change.',
  ogTitle: 'Approach — Globaltechno'
});

interface Lane {
  id: string;
  num: string;
  status: 'now' | 'coming';
  title: string;
  desc: string;
  kicker: string;
  iconPaths: string;
}

const lanes: Lane[] = [
  {
    id: 'web',
    num: '01 / Now',
    status: 'now',
    title: 'Web platforms',
    desc:
      'End-to-end product engineering — Next/Nuxt front, Node/Python back, infra you can actually maintain.',
    kicker: 'Stack — TS · Nuxt · Postgres',
    iconPaths:
      '<rect x="3" y="6" width="30" height="22" rx="2"/><path d="M3 12h30M9 18h12M9 22h6"/>'
  },
  {
    id: 'testing',
    num: '02 / Now',
    status: 'now',
    title: 'Test infrastructure',
    desc:
      'QA platforms, harnesses and pipelines built around how your team actually ships. Codewright.co is one of ours.',
    kicker: 'Stack — Playwright · k6 · CI',
    iconPaths:
      '<path d="M6 30V12l12-6 12 6v18"/><path d="M6 18l12 6 12-6M18 24v6"/><circle cx="18" cy="12" r="2.4" fill="currentColor"/>'
  },
  {
    id: 'architecture',
    num: '03 / Now',
    status: 'now',
    title: 'System architecture',
    desc:
      'Boring choices made well. Service boundaries, data shapes and on-call ergonomics that survive year three.',
    kicker: 'Stack — Postgres · Redis · K8s',
    iconPaths:
      '<rect x="4" y="4" width="12" height="12" rx="1.5"/><rect x="20" y="4" width="12" height="12" rx="1.5"/><rect x="4" y="20" width="12" height="12" rx="1.5"/><rect x="20" y="20" width="12" height="12" rx="1.5"/><path d="M16 10h4M10 16v4M26 16v4M16 26h4"/>'
  },
  {
    id: 'web3',
    num: '04 / Next',
    status: 'coming',
    title: 'Web3 & on-chain',
    desc:
      'Practical contracts, signing flows and bridges. Skipping the hype — building the parts that need to be on-chain.',
    kicker: 'Design partners — open',
    iconPaths:
      '<path d="M18 4l14 8v12l-14 8L4 24V12z"/><path d="M18 4v28M4 12l14 8 14-8"/>'
  },
  {
    id: 'cyber',
    num: '05 / Next',
    status: 'coming',
    title: 'Cybersecurity',
    desc:
      'Threat modelling, audits and hardening for product teams. Not a checklist — a defensible posture.',
    kicker: 'Design partners — open',
    iconPaths:
      '<path d="M18 4l12 5v9c0 7-5 13-12 14C11 31 6 25 6 18V9l12-5z"/><path d="M13 18l4 4 7-7"/>'
  },
  {
    id: 'agents',
    num: '06 / Next',
    status: 'coming',
    title: 'AI agents',
    desc:
      'Agents that actually run inside your stack — not chatbots. Tool use, evaluations and on-call hand-offs.',
    kicker: 'Design partners — open',
    iconPaths:
      '<circle cx="18" cy="14" r="6"/><path d="M8 30c0-5 4-8 10-8s10 3 10 8"/><path d="M18 8v-3M12 11l-2-2M24 11l2-2"/>'
  }
];

const principles = [
  { num: '01', title: 'Smaller, sooner.',     body: 'The first working version is the best brief. Anything we can ship in week two is worth more than a month of slides.' },
  { num: '02', title: 'Boring on purpose.',   body: 'We pick technology that\'s been load-bearing for a decade unless there\'s a real reason not to. Year three is a feature.' },
  { num: '03', title: 'One throat to choke.', body: 'One senior on the project, end to end. No agency layers, no junior sponge.' },
  { num: '04', title: 'Stop after any sprint.', body: 'You can pause or end at any sprint boundary. Lock-in is a smell, not a feature.' },
  { num: '05', title: 'Tests before stories.', body: 'If we can\'t write a failing test for the bug, we don\'t really understand the bug yet.' },
  { num: '06', title: 'No retainers.',         body: 'We charge for the thing we ship, not the time we spend. Misalignment is invisible until it isn\'t.' }
];

const methodology = [
  {
    num: '01',
    title: 'Elicit',
    body: 'Stakeholder interviews, system-context modelling, sources-of-requirements mapping. We start from real failure modes, not idealised scenarios.'
  },
  {
    num: '02',
    title: 'Document',
    body: 'Glossary, use cases, NFRs, conceptual model. Traceable artefacts at maturity level 3 — complete, correct, agreed.'
  },
  {
    num: '03',
    title: 'Build',
    body: 'Agile sprints, weekly demos, test-first. Every commit ties back to a requirement; every requirement to a release.'
  },
  {
    num: '04',
    title: 'Validate',
    body: 'Continuous test feedback, eval harness for AI work, signed compliance reports. Evidence that the thing actually solves the thing.'
  },
  {
    num: '05',
    title: 'Reconcile',
    body: 'As reality changes, so do requirements. We track status, maturity, and reasons for change so the project stays defensible to investors and auditors.'
  }
];
</script>

<template>
  <div>
    <section class="page-head section section--light">
      <div class="page-head__inner section__inner section__inner--narrow">
        <SharedScrollReveal>
          <SharedKicker label="Approach" ordinal="00" />
          <h1 class="page-head__title text-balance">
            Six lanes. <em>Three live today.</em><br>
            Three opening next.
          </h1>
          <p class="page-head__lede">
            One catalogue. Pick a lane to skim, or scroll the whole thing —
            each entry is a self-contained brief on what we ship and how to start.
          </p>
        </SharedScrollReveal>
      </div>
    </section>

    <section class="caps section section--light">
      <div class="caps__inner section__inner section__inner--narrow">
        <div class="caps__grid">
          <SharedScrollReveal
            v-for="(lane, i) in lanes"
            :key="lane.id"
            :delay="i * 60"
          >
            <article
              :id="lane.id"
              class="cap"
              :class="{ 'cap--coming': lane.status === 'coming' }"
            >
              <span class="cap__tag">{{ lane.status === 'now' ? 'Live' : 'Coming' }}</span>
              <span class="cap__num">{{ lane.num }}</span>

              <div class="cap__icon" aria-hidden="true">
                <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" v-html="lane.iconPaths" />
              </div>

              <h2 class="cap__title">{{ lane.title }}</h2>
              <p class="cap__desc">{{ lane.desc }}</p>

              <span class="cap__kicker">{{ lane.kicker }}</span>
            </article>
          </SharedScrollReveal>
        </div>
      </div>
    </section>

    <section class="methodology section section--alt">
      <div class="methodology__inner section__inner section__inner--narrow">
        <SharedScrollReveal>
          <SharedKicker label="How we engineer it" ordinal="07" />
          <h2 class="methodology__title text-balance">
            Requirements Engineering inside an <em>Agile SDLC</em>.
          </h2>
          <p class="methodology__lede">
            Every engagement starts with eliciting and documenting requirements before
            code. We then run short sprints with continuous test feedback, keeping
            traceability from <em>problem → requirement → ticket → commit → released
            change</em>. The outcome is a system you can defend to investors,
            regulators, and your own engineers.
          </p>
        </SharedScrollReveal>

        <ol class="methodology__steps">
          <SharedScrollReveal
            v-for="(m, i) in methodology"
            :key="m.num"
            :delay="i * 80"
          >
            <li class="methodology-step">
              <span class="methodology-step__num">{{ m.num }}</span>
              <h3 class="methodology-step__title">{{ m.title }}</h3>
              <p class="methodology-step__body">{{ m.body }}</p>
            </li>
          </SharedScrollReveal>
        </ol>
      </div>
    </section>

    <section class="principles section section--light">
      <div class="principles__inner section__inner section__inner--narrow">
        <SharedScrollReveal>
          <SharedKicker label="Six things we believe" ordinal="08" />
          <h2 class="principles__title text-balance">
            How we make <em>every</em> decision on a project.
          </h2>
        </SharedScrollReveal>

        <div class="principles__grid">
          <SharedScrollReveal
            v-for="(p, i) in principles"
            :key="p.num"
            :delay="i * 80"
          >
            <article class="principle">
              <span class="principle__num">{{ p.num }}</span>
              <div>
                <h3 class="principle__title">{{ p.title }}</h3>
                <p class="principle__body">{{ p.body }}</p>
              </div>
            </article>
          </SharedScrollReveal>
        </div>
      </div>
    </section>

    <HomeClosingCtaSection />
  </div>
</template>

<style scoped>
/* ============================================================== Page head */
.page-head {
  padding-top: clamp(7rem, 12vw, 10rem);
  padding-bottom: clamp(2rem, 4vw, 4rem);
}

.page-head__inner {
  max-width: var(--max-width-narrow);
  margin: 0 auto;
}

.page-head__title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 9vw, 8rem);
  letter-spacing: -0.04em;
  line-height: 0.95;
  margin: 0.6rem 0 1.4rem;
  color: var(--ink);
}

.page-head__title em {
  font-style: italic;
  color: var(--accent);
}

.page-head__lede {
  font-family: var(--font-body);
  font-size: clamp(1.05rem, 1.5vw, 1.2rem);
  line-height: 1.6;
  color: var(--ink-mute);
  max-width: 56ch;
}

/* ============================================================== Caps grid */
.caps {
  padding-top: 2rem;
}

.caps__inner {
  max-width: var(--max-width-narrow);
  margin: 0 auto;
}

.caps__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  border-top: 1px solid var(--line);
  border-left: 1px solid var(--line);
}

.cap {
  position: relative;
  padding: clamp(1.6rem, 3vw, 2.4rem);
  background: var(--paper);
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  overflow: hidden;
  transition: background 360ms var(--ease);
}

.cap:hover {
  background: var(--paper-soft);
}

.cap__num {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--ink-mute);
  letter-spacing: 0.1em;
  display: inline-block;
}

.cap__icon {
  width: 36px;
  height: 36px;
  margin-top: 0.4rem;
  color: var(--ink);
}

.cap__icon svg {
  width: 100%;
  height: 100%;
  stroke-width: 1.2;
}

.cap__title {
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 2.6vw, 2.2rem);
  line-height: 1.1;
  letter-spacing: -0.015em;
  margin: 1.4rem 0 0.6rem;
  color: var(--ink);
}

.cap__desc {
  color: var(--ink-mute);
  font-size: 14.5px;
  line-height: 1.6;
  margin: 0 0 2.4rem;
  max-width: 32ch;
}

.cap__kicker {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-mute);
}

.cap__tag {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-mute);
  padding: 4px 8px;
  border: 1px solid var(--line);
  border-radius: var(--radius-full);
  background: var(--paper);
}

/* Coming cards */
.cap--coming .cap__title,
.cap--coming .cap__desc,
.cap--coming .cap__num,
.cap--coming .cap__kicker {
  color: var(--ink-faint);
}

.cap--coming .cap__icon {
  color: var(--ink-faint);
}

.cap--coming .cap__tag {
  color: var(--accent);
  border-color: color-mix(in oklch, var(--accent) 40%, var(--paper));
  background: var(--accent-wash);
}

.cap--coming::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    135deg,
    transparent 0 7px,
    color-mix(in oklch, var(--ink) 4%, transparent) 7px 8px
  );
  pointer-events: none;
  opacity: 0.7;
}

@media (max-width: 980px) {
  .caps__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .caps__grid { grid-template-columns: 1fr; }
}

/* ============================================================== Methodology */
.methodology__inner {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: var(--max-width-narrow);
  margin: 0 auto;
}

.methodology__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3.75rem);
  line-height: 1;
  letter-spacing: -0.03em;
  margin: 0.6rem 0 1.25rem;
  color: var(--ink);
}

.methodology__title em {
  font-style: italic;
  color: var(--accent);
}

.methodology__lede {
  font-family: var(--font-body);
  font-size: clamp(1.05rem, 1.5vw, 1.2rem);
  line-height: 1.6;
  color: var(--ink-2);
  max-width: 64ch;
}

.methodology__lede em {
  font-style: italic;
  color: var(--accent);
}

.methodology__steps {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.75rem;
}

.methodology-step {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.4rem 1.1rem 1.5rem;
  background: var(--paper-soft);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
}

.methodology-step__num {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  color: var(--accent);
}

.methodology-step__title {
  font-family: var(--font-display);
  font-size: 1.4rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--ink);
}

.methodology-step__body {
  font-family: var(--font-body);
  font-size: 0.85rem;
  color: var(--ink-mute);
  line-height: 1.5;
  margin: 0;
}

@media (max-width: 1100px) {
  .methodology__steps { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 720px) {
  .methodology__steps { grid-template-columns: 1fr; }
}

/* ============================================================== Principles */
.principles__inner {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: var(--max-width-narrow);
  margin: 0 auto;
}

.principles__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3.75rem);
  line-height: 1;
  letter-spacing: -0.03em;
  margin: 0.6rem 0 0;
  color: var(--ink);
}

.principles__title em {
  font-style: italic;
  color: var(--accent);
}

.principles__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.principle {
  display: grid;
  grid-template-columns: 4rem 1fr;
  gap: 1rem;
  padding: 1.6rem 1.5rem;
  background: var(--paper-soft);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
}

.principle__num {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 2.25rem;
  line-height: 1;
  color: var(--accent);
}

.principle__title {
  font-family: var(--font-display);
  font-size: 1.5rem;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: var(--ink);
  margin: 0 0 0.4rem;
}

.principle__body {
  font-family: var(--font-body);
  font-size: 0.92rem;
  color: var(--ink-mute);
  line-height: 1.55;
  margin: 0;
}

@media (max-width: 720px) {
  .principles__grid { grid-template-columns: 1fr; }
  .principle { grid-template-columns: 3rem 1fr; }
}
</style>
