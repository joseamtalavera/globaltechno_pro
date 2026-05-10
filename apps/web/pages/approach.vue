<script setup lang="ts">
useSeoMeta({
  title: 'Approach',
  description:
    'How Globaltechno actually engineers the work — Requirements Engineering threaded through an Agile SDLC, with traceability from problem to released change.',
  ogTitle: 'Approach — Globaltechno'
});

interface Step {
  num: string;
  title: string;
  body: string;
  artefact: string;
}

const steps: Step[] = [
  {
    num: '01',
    title: 'Elicit',
    body:
      'Stakeholder interviews, system-context modelling, sources-of-requirements mapping. We start from real failure modes — what currently breaks, who feels it, what success looks like — not idealised scenarios.',
    artefact: 'Stakeholder map · System context diagram · Source register'
  },
  {
    num: '02',
    title: 'Document',
    body:
      'Glossary, use cases, functional and non-functional requirements, conceptual model. Every requirement is traceable, prioritised (MoSCoW), and held at the maturity level the project actually needs — typically level 3 (complete, correct, agreed) before sprint zero.',
    artefact: 'Requirements specification · Glossary · Conceptual model'
  },
  {
    num: '03',
    title: 'Build',
    body:
      'Short Agile sprints (one to two weeks) with weekly demos and test-first discipline. Every commit ties back to a numbered requirement; every requirement to a release. The sprint board is the requirement specification, animated.',
    artefact: 'Sprint board · Test suite · Demo recording per sprint'
  },
  {
    num: '04',
    title: 'Validate',
    body:
      'Continuous test feedback in CI, eval harness for AI work, signed compliance reports for regulated lanes. Evidence that the thing actually solves the thing the requirement said it should.',
    artefact: 'Test reports · Signed PDFs (NIS2 / GDPR / eIDAS 2.0)'
  },
  {
    num: '05',
    title: 'Reconcile',
    body:
      'As reality changes — and it does — so do requirements. We track status, maturity level, reason for change, and impact on neighbouring requirements so the project stays defensible to investors, auditors, and future engineers.',
    artefact: 'Change log · Updated traceability matrix'
  }
];

const principles = [
  {
    title: 'Traceability is the spine.',
    body:
      'Every line of merged code can be walked back to a stakeholder need. Every stakeholder need can be walked forward to a released change. That chain is the artefact regulators and investors actually want.'
  },
  {
    title: 'Documentation is a living instrument.',
    body:
      'Requirements are not a contract that gets signed and shelved. They\'re re-checked at every sprint boundary; the matrix is updated, not appended.'
  },
  {
    title: 'Agile within rigour, not against it.',
    body:
      'Short sprints don\'t mean abandoning specification. They mean keeping the specification alive — small enough to update, complete enough to defend.'
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
            Requirements Engineering<br>
            inside an <em>Agile SDLC</em>.
          </h1>
          <p class="page-head__lede">
            Every engagement starts by eliciting and documenting requirements
            before code. We then run short Agile sprints with continuous test
            feedback — keeping traceability from <em>problem → requirement →
            ticket → commit → released change</em>. The outcome is a system you
            can defend to investors, regulators, and your own engineers.
          </p>
        </SharedScrollReveal>
      </div>
    </section>

    <!-- Five-step engineering loop -->
    <section class="loop section section--light">
      <div class="loop__inner section__inner section__inner--narrow">
        <SharedScrollReveal>
          <div class="loop__head">
            <SharedKicker label="The loop" ordinal="01" />
            <h2 class="loop__title text-balance">
              Five disciplines, one continuous loop.
            </h2>
          </div>
        </SharedScrollReveal>

        <ol class="loop__steps">
          <SharedScrollReveal
            v-for="(s, i) in steps"
            :key="s.num"
            :delay="i * 80"
          >
            <li :id="`step-${s.num}`" class="loop-step">
              <div class="loop-step__head">
                <span class="loop-step__num">{{ s.num }}</span>
                <h3 class="loop-step__title">{{ s.title }}</h3>
              </div>
              <p class="loop-step__body">{{ s.body }}</p>
              <p class="loop-step__artefact">
                <span class="loop-step__artefact-label">Artefacts —</span>
                {{ s.artefact }}
              </p>
            </li>
          </SharedScrollReveal>
        </ol>
      </div>
    </section>

    <!-- Why this way -->
    <section class="why section section--alt">
      <div class="why__inner section__inner section__inner--narrow">
        <SharedScrollReveal>
          <div class="why__head">
            <SharedKicker label="Why this way" ordinal="02" />
            <h2 class="why__title text-balance">
              Three things we believe<br>about <em>how the work gets engineered</em>.
            </h2>
          </div>
        </SharedScrollReveal>

        <ul class="why__list">
          <SharedScrollReveal
            v-for="(p, i) in principles"
            :key="p.title"
            :delay="i * 90"
          >
            <li class="why-item">
              <h3 class="why-item__title">{{ p.title }}</h3>
              <p class="why-item__body">{{ p.body }}</p>
            </li>
          </SharedScrollReveal>
        </ul>
      </div>
    </section>

    <!-- Reference -->
    <section class="ref section section--light">
      <div class="ref__inner section__inner section__inner--narrow">
        <SharedScrollReveal>
          <SharedKicker label="Reference" ordinal="03" />
          <p class="ref__body">
            Our RE practice is grounded in the IU course book
            <em>Requirements Engineering</em> (DLBCSRE01) and SWEBOK's
            requirements knowledge area. The cadence is Agile — typically Scrum
            or Kanban — adapted to the project's regulatory surface.
          </p>
          <p class="ref__body">
            For the lanes we work in, see <NuxtLink to="/" class="ref__link">the home page</NuxtLink>.
            For projects that have used this loop end-to-end, see <NuxtLink to="/work" class="ref__link">selected work</NuxtLink>.
          </p>
        </SharedScrollReveal>
      </div>
    </section>

    <HomeClosingCtaSection />
  </div>
</template>

<style scoped>
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
  font-size: clamp(2.75rem, 8vw, 6.5rem);
  letter-spacing: -0.04em;
  line-height: 0.98;
  margin: 0.6rem 0 1.5rem;
  color: var(--ink);
}

.page-head__title em {
  font-style: italic;
  color: var(--accent);
}

.page-head__lede {
  font-family: var(--font-body);
  font-size: clamp(1.05rem, 1.5vw, 1.2rem);
  line-height: 1.65;
  color: var(--ink-2);
  max-width: 64ch;
}

.page-head__lede em {
  font-style: italic;
  color: var(--accent);
}

/* ============================================================== Loop */
.loop__inner {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: var(--max-width-narrow);
  margin: 0 auto;
}

.loop__title {
  font-family: var(--font-display);
  font-size: clamp(1.85rem, 4vw, 2.85rem);
  line-height: 1.05;
  letter-spacing: -0.025em;
  margin: 0.6rem 0 0;
  color: var(--ink);
}

.loop__steps {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
  border-top: 1px solid var(--line);
}

.loop-step {
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 1.5rem 2rem;
  padding: 2rem 0;
  border-bottom: 1px solid var(--line);
  align-items: start;
}

.loop-step__head {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
}

.loop-step__num {
  font-family: var(--font-display);
  font-style: italic;
  font-size: clamp(2.75rem, 5vw, 4rem);
  line-height: 1;
  color: var(--accent);
  letter-spacing: -0.02em;
}

.loop-step__title {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-mute);
  margin: 0;
  font-weight: 500;
}

.loop-step__body {
  font-family: var(--font-body);
  font-size: 1.075rem;
  line-height: 1.7;
  color: var(--ink);
  max-width: 60ch;
  margin: 0 0 1rem;
}

.loop-step__artefact {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  color: var(--ink-mute);
  margin: 0;
  padding-top: 0.5rem;
  border-top: 1px dashed var(--line);
  max-width: 64ch;
}

.loop-step__artefact-label {
  color: var(--ink);
  margin-right: 0.4rem;
}

@media (max-width: 720px) {
  .loop-step {
    grid-template-columns: 1fr;
    gap: 0.75rem;
    padding: 1.75rem 0;
  }
  .loop-step__head {
    flex-direction: row;
    align-items: baseline;
    gap: 1rem;
  }
}

/* ============================================================== Why */
.why__inner {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  max-width: var(--max-width-narrow);
  margin: 0 auto;
}

.why__title {
  font-family: var(--font-display);
  font-size: clamp(1.85rem, 4vw, 2.85rem);
  line-height: 1.1;
  letter-spacing: -0.025em;
  margin: 0.6rem 0 0;
  color: var(--ink);
}

.why__title em {
  font-style: italic;
  color: var(--accent);
}

.why__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.why-item {
  padding: 1.6rem 1.5rem;
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
}

.why-item__title {
  font-family: var(--font-display);
  font-size: 1.4rem;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: var(--ink);
  margin: 0 0 0.6rem;
}

.why-item__body {
  font-family: var(--font-body);
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--ink-mute);
  margin: 0;
}

@media (max-width: 980px) {
  .why__list { grid-template-columns: 1fr; }
}

/* ============================================================== Reference */
.ref__inner {
  max-width: var(--max-width-narrow);
  margin: 0 auto;
}

.ref__body {
  font-family: var(--font-body);
  font-size: 1.025rem;
  line-height: 1.7;
  color: var(--ink-mute);
  max-width: 62ch;
  margin: 0 0 1.25rem;
}

.ref__body em {
  font-style: italic;
  color: var(--ink);
}

.ref__body:last-child {
  margin-bottom: 0;
}

.ref__link {
  color: var(--ink);
  border-bottom: 1px solid var(--ink);
  padding-bottom: 1px;
  transition: color var(--duration-fast) ease, border-color var(--duration-fast) ease;
}

.ref__link:hover {
  color: var(--accent);
  border-bottom-color: var(--accent);
}
</style>
