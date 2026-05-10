<script setup lang="ts">
useSeoMeta({
  title: 'Solutions',
  description:
    'Full-stack apps, testing, and software architecture today. Web3, cybersecurity, and agentic systems coming next.',
  ogTitle: 'Solutions — Globaltechno'
});

interface Solution {
  number: string;
  title: string;
  description: string;
  status: 'now' | 'coming';
  detail: string;
  deliverables: string[];
  whenToUse?: string;
  timeframe?: string;
}

const solutions: Solution[] = [
  {
    number: '01',
    title: 'Full-stack web apps',
    description: 'Production-grade applications, end-to-end. From schema to deploy.',
    status: 'now',
    detail:
      'End-to-end web applications. We design the schema, write the API, ship the UI, and stand up the infra. No throwaway code. No half-finished frontends.',
    deliverables: [
      'Working production app on your infra',
      'API + persistence (PostgreSQL, Prisma, your stack)',
      'CI/CD pipeline and observability',
      'Documentation handed to your team'
    ],
    whenToUse: 'When you need an application built and don\'t want to glue four agencies together.'
  },
  {
    number: '02',
    title: 'Testing & QA',
    description: 'Automated regression, integration, and signed compliance reports.',
    status: 'now',
    detail:
      'Test infrastructure that your investors, customers, and regulators trust. Automated regression, performance, accessibility, and human-supervised compliance sign-off.',
    deliverables: [
      'Automated test suites (unit, integration, E2E)',
      'Signed PDF reports tied to NIS2 / GDPR / eIDAS 2.0',
      'Performance + accessibility audits',
      'Penetration testing on request'
    ],
    whenToUse: 'When AI-generated code needs sign-off, or when an investor or enterprise customer wants proof.'
  },
  {
    number: '03',
    title: 'Software architecture',
    description: 'System design and technical decisions for what you build next.',
    status: 'now',
    detail:
      'System design before you spend the build budget. Constraint mapping, trade-off analysis, integration plan, scaling story, the things you want decided before code starts.',
    deliverables: [
      'Architecture document and decision log',
      'Tech stack proposal with reasoning',
      'Risk and cost estimate',
      'Reference implementation if useful'
    ],
    whenToUse: 'When the path forward isn\'t obvious, or when your team is split on direction.'
  },
  {
    number: '04',
    title: 'Web3 & on-chain',
    description: 'Smart contracts, indexers, wallet flows, and chain-aware backends.',
    status: 'coming',
    detail:
      'Once we open this lane: smart contracts, indexers, wallet flows, and chain-aware backends with the same testing posture we apply to web2.',
    deliverables: [
      'Smart contract design + audit',
      'Indexer + event pipeline',
      'Wallet integration + signing flows',
      'Chain-aware backend services'
    ],
    timeframe: 'Available H2 2026'
  },
  {
    number: '05',
    title: 'Cybersecurity',
    description: 'Threat modeling, audits, and incident response built into delivery.',
    status: 'coming',
    detail:
      'Security treated as architecture, not afterthought. Threat modeling at design time, audits before launch, incident response when it matters.',
    deliverables: [
      'Threat model and security architecture review',
      'Pre-launch audit + remediation plan',
      'Detection + response playbooks',
      'Compliance mapping (NIS2, ISO 27001 patterns)'
    ],
    timeframe: 'Available H2 2026'
  },
  {
    number: '06',
    title: 'Agentic systems',
    description: 'Production AI agents with policy, guardrails, and observability.',
    status: 'coming',
    detail:
      'Production AI agents with policy, guardrails, and observability — not demos. Bounded autonomy, escalation paths, and humans in the right loops.',
    deliverables: [
      'Agent design with policy + escalation logic',
      'Tool integration and tool-use guardrails',
      'Observability + audit trail',
      'Safety review + rollback strategy'
    ],
    timeframe: 'Available H2 2026'
  }
];

const expanded = ref<string | null>(null);

function toggle(num: string): void {
  expanded.value = expanded.value === num ? null : num;
}
</script>

<template>
  <div>
    <section class="solutions-hero section section--light">
      <div class="solutions-hero__inner section__inner">
        <SharedScrollReveal>
          <span class="section-label">Solutions</span>
          <h1 class="solutions-hero__title text-balance">
            What we build.
          </h1>
          <p class="solutions-hero__lead">
            One flat catalogue. The lanes we ship today, and the ones we'll open next.
          </p>
        </SharedScrollReveal>
      </div>
    </section>

    <section class="solutions-list section section--light">
      <div class="solutions-list__inner section__inner">
        <ul class="solutions-list__rows">
          <li
            v-for="s in solutions"
            :key="s.number"
            class="solutions-list__row"
            :class="{ 'is-open': expanded === s.number }"
          >
            <div
              class="solutions-list__trigger"
              role="button"
              tabindex="0"
              :aria-expanded="expanded === s.number"
              :aria-controls="`solution-detail-${s.number}`"
              @click="toggle(s.number)"
              @keydown.enter.prevent="toggle(s.number)"
              @keydown.space.prevent="toggle(s.number)"
            >
              <SharedSolutionCard
                :number="s.number"
                :title="s.title"
                :description="s.description"
                :status="s.status"
              />
              <span class="solutions-list__chevron" aria-hidden="true">↓</span>
            </div>

            <div
              :id="`solution-detail-${s.number}`"
              class="solutions-list__detail"
            >
              <div class="solutions-list__detail-content">
                <p class="solutions-list__detail-text">{{ s.detail }}</p>

                <div class="solutions-list__detail-grid">
                  <div>
                    <h4 class="solutions-list__detail-heading">Deliverables</h4>
                    <ul class="solutions-list__deliverables">
                      <li v-for="d in s.deliverables" :key="d">{{ d }}</li>
                    </ul>
                  </div>

                  <div v-if="s.whenToUse">
                    <h4 class="solutions-list__detail-heading">When to use</h4>
                    <p class="solutions-list__when">{{ s.whenToUse }}</p>
                  </div>

                  <div v-else-if="s.timeframe">
                    <h4 class="solutions-list__detail-heading">Timeline</h4>
                    <p class="solutions-list__when">{{ s.timeframe }}</p>
                  </div>
                </div>

                <div v-if="s.status === 'now'" class="solutions-list__cta">
                  <UiButton variant="link-ink" to="/brief">
                    Start a project on this
                  </UiButton>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <HomeClosingCtaSection />
  </div>
</template>

<style scoped>
.solutions-hero {
  padding-top: clamp(7rem, 12vw, 10rem);
  padding-bottom: clamp(2rem, 4vw, 4rem);
}

.solutions-hero__inner {
  max-width: var(--max-width-narrow);
  margin: 0 auto;
}

.solutions-hero__title {
  margin-top: 0.25rem;
  font-size: clamp(2.75rem, 7vw, 6rem);
}

.solutions-hero__lead {
  margin-top: 1.25rem;
  font-size: clamp(1.05rem, 1.5vw, 1.25rem);
  line-height: 1.6;
  color: var(--color-text-secondary);
  max-width: 56ch;
}

.solutions-list {
  padding-top: 2rem;
}

.solutions-list__rows {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.solutions-list__row {
  position: relative;
}

.solutions-list__trigger {
  cursor: pointer;
  display: block;
  position: relative;
  border-radius: var(--radius-lg);
}

.solutions-list__trigger:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 4px;
}

.solutions-list__chevron {
  position: absolute;
  bottom: 1.5rem;
  right: 2rem;
  font-size: 1.1rem;
  color: var(--color-text-muted);
  transition: transform var(--duration-normal) var(--ease-out);
  pointer-events: none;
}

.solutions-list__row.is-open .solutions-list__chevron {
  transform: rotate(180deg);
  color: var(--color-accent);
}

.solutions-list__detail {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 420ms var(--ease-out);
}

.solutions-list__row.is-open .solutions-list__detail {
  grid-template-rows: 1fr;
}

.solutions-list__detail-content {
  overflow: hidden;
}

.solutions-list__row.is-open .solutions-list__detail-content {
  padding: 1.5rem 2rem 0.5rem;
}

.solutions-list__detail-text {
  font-family: var(--font-display);
  font-size: clamp(1.25rem, 2vw, 1.6rem);
  line-height: 1.4;
  color: var(--color-text-primary);
  letter-spacing: -0.015em;
  max-width: 60ch;
  margin-bottom: 2.5rem;
}

.solutions-list__detail-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 3rem;
  margin-bottom: 2rem;
}

.solutions-list__detail-heading {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-text-secondary);
  margin-bottom: 1rem;
  font-weight: 500;
}

.solutions-list__deliverables {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.solutions-list__deliverables li {
  position: relative;
  padding-left: 1.5rem;
  color: var(--color-text-primary);
  font-size: 0.95rem;
  line-height: 1.55;
}

.solutions-list__deliverables li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.7rem;
  width: 12px;
  height: 1px;
  background: var(--color-accent);
}

.solutions-list__when {
  font-size: 0.95rem;
  line-height: 1.55;
  color: var(--color-text-secondary);
  max-width: 42ch;
}

.solutions-list__cta {
  margin-top: 1.5rem;
}

@media (max-width: 768px) {
  .solutions-list__detail-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .solutions-list__row.is-open .solutions-list__detail-content {
    padding: 1.25rem 1.25rem 0.5rem;
  }

  .solutions-list__chevron {
    bottom: 1.25rem;
    right: 1.25rem;
  }
}
</style>
