<script setup lang="ts">
const { elementRef: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 });

const solutions = [
  {
    number: '01',
    title: 'Full-stack web apps',
    description: 'Production-grade applications, end-to-end. From schema to deploy.',
    status: 'now' as const,
    span: 2 as const
  },
  {
    number: '02',
    title: 'Testing & QA',
    description: 'Automated regression, integration, and signed compliance reports.',
    status: 'now' as const
  },
  {
    number: '03',
    title: 'Software architecture',
    description: 'System design and technical decisions for what you build next.',
    status: 'now' as const
  },
  {
    number: '04',
    title: 'Web3 & on-chain',
    description: 'Smart contracts, indexers, wallet flows, and chain-aware backends.',
    status: 'coming' as const
  },
  {
    number: '05',
    title: 'Cybersecurity',
    description: 'Threat modeling, audits, and incident response built into delivery.',
    status: 'coming' as const
  },
  {
    number: '06',
    title: 'Agentic systems',
    description: 'Production AI agents with policy, guardrails, and observability.',
    status: 'coming' as const,
    span: 3 as const
  }
];
</script>

<template>
  <section class="solutions-grid section section--light">
    <div class="solutions-grid__inner section__inner">
      <SharedScrollReveal>
        <div class="solutions-grid__head">
          <span class="section-label">What we build</span>
          <h2 class="solutions-grid__title text-balance">
            Three things today. Three more on the way.
          </h2>
        </div>
      </SharedScrollReveal>

      <div
        ref="gridRef"
        class="solutions-grid__grid stagger-children"
        :class="{ 'is-visible': gridVisible }"
      >
        <SharedSolutionCard
          v-for="s in solutions"
          :key="s.number"
          :number="s.number"
          :title="s.title"
          :description="s.description"
          :status="s.status"
          :span="s.span ?? 1"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.solutions-grid__inner {
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
}

.solutions-grid__head {
  max-width: 760px;
}

.solutions-grid__title {
  margin-top: 0.25rem;
}

.solutions-grid__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

@media (max-width: 768px) {
  .solutions-grid__grid {
    grid-template-columns: 1fr;
  }
}
</style>
