<script setup lang="ts">
useSeoMeta({
  title: 'Approach',
  description:
    'Six lanes — three live today, three opening next. Requirements Engineering inside an Agile SDLC, with traceability from problem to released change.',
  ogTitle: 'Approach — Globaltechno'
});

interface LedgerCol {
  heading: string;
  items: string[];
}

interface Ledger {
  id: string;
  num: string;
  status: 'now' | 'coming';
  statusLabel: string;
  tag: string;
  title: string;
  emphasis: string;
  lede: string;
  cols: [LedgerCol, LedgerCol, LedgerCol];
}

const lanes: Ledger[] = [
  {
    id: 'web',
    num: '01',
    status: 'now',
    statusLabel: 'Now · Live',
    tag: '8 partners shipped',
    title: 'Web',
    emphasis: 'platforms',
    lede:
      'Production-grade web applications shipped end-to-end. We design the schema, write the API, ship the UI, and stand up the infra. No throwaway code. No half-finished frontends.',
    cols: [
      {
        heading: 'Focus',
        items: [
          'Customer-facing web platforms',
          'Member portals + ops dashboards',
          'Payments, scheduling, content',
          'Multi-region deployment'
        ]
      },
      {
        heading: 'Stack',
        items: [
          'Nuxt 3 / Next.js / Remix',
          'Node + NestJS / Express',
          'PostgreSQL via Prisma',
          'AWS (ECS, RDS, CloudFront)'
        ]
      },
      {
        heading: 'How to engage',
        items: [
          'Problem call: 90 minutes',
          'Scope week: paid, fixed price',
          'Build sprints: 2–6 weeks each',
          'Hand-off + 30-day support'
        ]
      }
    ]
  },
  {
    id: 'testing',
    num: '02',
    status: 'now',
    statusLabel: 'Now · Live',
    tag: 'Compliance-ready',
    title: 'Testing &',
    emphasis: 'QA',
    lede:
      'Test infrastructure your investors and regulators trust. Automated regression, performance, accessibility, and human-supervised compliance sign-off.',
    cols: [
      {
        heading: 'Diagnose',
        items: [
          'Coverage + gap audit',
          'Risk-weighted test plan',
          'Tooling fit assessment'
        ]
      },
      {
        heading: 'Build',
        items: [
          'Unit / integration / E2E suites',
          'Performance + a11y harness',
          'CI orchestration + flake tracking'
        ]
      },
      {
        heading: 'Prove',
        items: [
          'Signed PDF report (NIS2 / GDPR / eIDAS 2.0)',
          'Pen test on request',
          'Continuous attestation'
        ]
      }
    ]
  },
  {
    id: 'architecture',
    num: '03',
    status: 'now',
    statusLabel: 'Now · Live',
    tag: '2-week typical',
    title: 'Software',
    emphasis: 'architecture',
    lede:
      'System design before you spend the build budget. Constraint mapping, trade-off analysis, integration plan, scaling story — the things you want decided before code starts.',
    cols: [
      {
        heading: 'Output',
        items: [
          'Architecture document + decision log',
          'Tech stack proposal with reasoning',
          'Risk + cost estimate',
          'Reference implementation if useful'
        ]
      },
      {
        heading: 'Method',
        items: [
          'Stakeholder + constraint workshop',
          'Cross-team trade-off sessions',
          'Iterated review with engineering'
        ]
      },
      {
        heading: 'When',
        items: [
          'Greenfield kick-off',
          'Pre-funding due diligence',
          'Pre-rewrite triage'
        ]
      }
    ]
  },
  {
    id: 'web3',
    num: '04',
    status: 'coming',
    statusLabel: 'Next · Design partners open',
    tag: '2 pilots in flight',
    title: 'Web3 &',
    emphasis: 'on-chain',
    lede:
      'We\'re picking the parts of Web3 that genuinely need to be on-chain — signing, settlement, provenance — and shipping them as plain-looking software for non-crypto teams.',
    cols: [
      {
        heading: 'Focus',
        items: [
          'Legal-grade signing',
          'Settlement bridges',
          'Provenance + audit trails'
        ]
      },
      {
        heading: 'Stack',
        items: [
          'EVM + L2s',
          'Account abstraction',
          'Off-chain indexers'
        ]
      },
      {
        heading: 'How to engage',
        items: [
          'Design partner: 2 slots',
          '2-week problem call',
          'Pilot in 6–8 weeks'
        ]
      }
    ]
  },
  {
    id: 'cyber',
    num: '05',
    status: 'coming',
    statusLabel: 'Next · Design partners open',
    tag: 'Hiring lead',
    title: 'Cyber',
    emphasis: 'security',
    lede:
      'A practice for product teams, not a checklist for auditors. Threat-model, harden, prove — done with the team, not at them.',
    cols: [
      {
        heading: 'Diagnose',
        items: [
          'Threat model w/ engineers',
          'Lightweight pentest',
          'Posture scorecard'
        ]
      },
      {
        heading: 'Harden',
        items: [
          'Authn/z rebuilds',
          'Secrets + key mgmt',
          'Supply-chain controls'
        ]
      },
      {
        heading: 'Prove',
        items: [
          'Continuous attestation',
          'SOC2-friendly evidence',
          'Tabletop exercises'
        ]
      }
    ]
  },
  {
    id: 'agents',
    num: '06',
    status: 'coming',
    statusLabel: 'Next · Design partners open',
    tag: '3 pilots in flight',
    title: 'AI',
    emphasis: 'agents',
    lede:
      'Agents that run inside your stack — not chatbots in front of it. Tool use, deterministic guardrails, evals, and on-call hand-offs to humans when they should.',
    cols: [
      {
        heading: 'Build',
        items: [
          'Toolset + memory design',
          'Deterministic guards',
          'Cost-aware routing'
        ]
      },
      {
        heading: 'Trust',
        items: [
          'Eval harness, not vibes',
          'Replayable traces',
          'Human-in-loop hand-offs'
        ]
      },
      {
        heading: 'Ship',
        items: [
          '4-week proof-of-life',
          'Monitoring + drift alerts',
          'Rollback by design'
        ]
      }
    ]
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

    <section class="ledger-list section section--light">
      <div class="ledger-list__inner section__inner">
        <SharedScrollReveal
          v-for="lane in lanes"
          :key="lane.id"
        >
          <article
            :id="lane.id"
            class="ledger"
            :class="{ 'ledger--coming': lane.status === 'coming' }"
          >
            <div class="ledger__meta">
              <span class="ledger__num">{{ lane.num }}</span>
              <span class="pill" :class="`pill--${lane.status}`">
                <span class="pill__dot" aria-hidden="true" />
                {{ lane.statusLabel }}
              </span>
              <span class="ledger__tag-static">{{ lane.tag }}</span>
            </div>

            <div class="ledger__body">
              <h2 class="ledger__title text-balance">
                {{ lane.title }} <em>{{ lane.emphasis }}</em>.
              </h2>
              <p class="ledger__lede">{{ lane.lede }}</p>

              <div class="ledger__cols">
                <div v-for="col in lane.cols" :key="col.heading" class="ledger__col">
                  <h4 class="ledger__col-heading">{{ col.heading }}</h4>
                  <ul class="ledger__col-list">
                    <li v-for="item in col.items" :key="item">{{ item }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </SharedScrollReveal>
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

/* ============================================================== Ledgers */
.ledger-list {
  padding-top: 2rem;
}

.ledger-list__inner {
  display: flex;
  flex-direction: column;
}

.ledger {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: clamp(2rem, 4vw, 4rem);
  padding: clamp(2.5rem, 5vw, 4rem) 0;
  border-bottom: 1px solid var(--line);
  position: relative;
}

.ledger:last-of-type {
  border-bottom: 0;
}

.ledger--coming {
  background:
    linear-gradient(180deg, transparent, var(--accent-wash) 100%);
}

.ledger__meta {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  padding-top: 0.4rem;
  position: sticky;
  top: 5rem;
  align-self: start;
  height: fit-content;
}

.ledger__num {
  font-family: var(--font-display);
  font-style: italic;
  font-size: clamp(3.5rem, 7vw, 5.5rem);
  line-height: 1;
  color: var(--accent);
  letter-spacing: -0.03em;
}

.ledger__tag-static {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink-faint);
}

.ledger__body {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.ledger__title {
  font-family: var(--font-display);
  font-size: clamp(2.25rem, 5vw, 4rem);
  letter-spacing: -0.03em;
  line-height: 1;
  color: var(--ink);
  margin: 0;
}

.ledger__title em {
  font-style: italic;
  color: var(--accent);
}

.ledger__lede {
  font-family: var(--font-body);
  font-size: clamp(1.05rem, 1.5vw, 1.2rem);
  line-height: 1.55;
  color: var(--ink-2);
  max-width: 60ch;
  margin: 0;
}

.ledger__cols {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 1rem;
  padding-top: 1.5rem;
  border-top: 1px dashed var(--line);
}

.ledger__col-heading {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-faint);
  margin: 0 0 0.85rem;
  font-weight: 500;
}

.ledger__col-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.ledger__col-list li {
  position: relative;
  padding-left: 1rem;
  font-size: 0.92rem;
  line-height: 1.5;
  color: var(--ink);
}

.ledger__col-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.65rem;
  width: 8px;
  height: 1px;
  background: var(--accent);
}

@media (max-width: 900px) {
  .ledger {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
  .ledger__meta {
    position: static;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
  }
  .ledger__num {
    font-size: 3rem;
  }
  .ledger__cols {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
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
