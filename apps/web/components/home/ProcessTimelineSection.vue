<script setup lang="ts">
const steps = [
  {
    number: '01',
    title: 'Listen',
    description:
      'We start with the problem, not the toolkit. What hurts? What\'s blocked? What does success actually look like?'
  },
  {
    number: '02',
    title: 'Architect',
    description:
      'We design the system before we build it. Constraints, trade-offs, failure modes — all on the table.'
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Production-grade from day one. Tested, observable, documented as it lands.'
  },
  {
    number: '04',
    title: 'Hand off',
    description:
      'Your team owns the result. We leave you with running code, not a black box.'
  }
];
</script>

<template>
  <section class="process section section--alt">
    <div class="process__inner section__inner">
      <SharedScrollReveal>
        <div class="process__head">
          <span class="section-label">How we work</span>
          <h2 class="process__title text-balance">
            No fixed methodology.<br>We adapt to your problem.
          </h2>
        </div>
      </SharedScrollReveal>

      <div class="process__steps">
        <SharedProcessStep
          v-for="step in steps"
          :key="step.number"
          :number="step.number"
          :title="step.title"
          :description="step.description"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.process__inner {
  display: flex;
  flex-direction: column;
  gap: 5rem;
}

.process__head {
  max-width: 760px;
}

.process__title {
  margin-top: 0.25rem;
}

.process__steps {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem 3rem;
}

@media (max-width: 768px) {
  .process__steps {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
</style>
