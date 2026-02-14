<script setup lang="ts">
useSeoMeta({
  title: 'About',
  description: 'Globaltechno engineers intelligent systems that transform how enterprises operate. Built by engineers, for engineers.',
  ogTitle: 'About Globaltechno'
});

const values = [
  {
    title: 'Innovation',
    description: 'We push the boundary of what autonomous systems can do — then make it reliable enough for production.'
  },
  {
    title: 'Security',
    description: 'Every system we build is secure by default. We treat security as architecture, not afterthought.'
  },
  {
    title: 'Excellence',
    description: 'We deliver precision-engineered solutions. No shortcuts, no template code, no compromises.'
  }
];

const method = [
  {
    num: '01',
    title: 'Model the operating reality',
    detail: 'We start from real failure modes, system constraints, and business-critical paths — not idealized scenarios.'
  },
  {
    num: '02',
    title: 'Engineer control into autonomy',
    detail: 'Autonomous execution lanes are bounded by explicit policy, escalation logic, and safety constraints.'
  },
  {
    num: '03',
    title: 'Instrument everything',
    detail: 'Each decision and side effect is observable, attributable, and reviewable in production.'
  }
];
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="hero section section--dark grain-overlay">
      <SharedGradientMesh variant="hero" />
      <div class="hero__inner section__inner">
        <SharedScrollReveal>
          <span class="section-label">About</span>
          <h1 class="hero__title text-balance">We Engineer the Future</h1>
          <p class="hero__subtitle">
            Globaltechno is a technology company specializing in AI agents and automation.
            We build intelligent systems that transform how enterprises operate.
          </p>
        </SharedScrollReveal>
      </div>
    </section>

    <!-- Mission -->
    <section class="mission section section--light">
      <div class="mission__inner section__inner">
        <SharedScrollReveal>
          <div class="mission__content">
            <span class="section-label section-label--light">Our Mission</span>
            <h2 class="mission__statement text-balance">
              We don't just build software. We engineer intelligence into the systems
              that run your business — making them faster, safer, and more autonomous.
            </h2>
          </div>
        </SharedScrollReveal>
      </div>
    </section>

    <!-- Values -->
    <section class="values section section--dark grain-overlay">
      <SharedGradientMesh variant="section" />
      <div class="values__inner section__inner">
        <SharedScrollReveal>
          <span class="section-label">What Drives Us</span>
          <h2 class="values__heading">Our Values</h2>
        </SharedScrollReveal>

        <div class="values__grid">
          <SharedScrollReveal
            v-for="(value, i) in values"
            :key="value.title"
            :delay="i * 120"
          >
            <div class="value-card">
              <h3>{{ value.title }}</h3>
              <p>{{ value.description }}</p>
            </div>
          </SharedScrollReveal>
        </div>
      </div>
    </section>

    <!-- Method -->
    <section class="method section section--light">
      <div class="method__inner section__inner">
        <SharedScrollReveal>
          <span class="section-label section-label--light">Our Method</span>
          <h2>How We Deliver</h2>
        </SharedScrollReveal>

        <div class="method__steps">
          <SharedScrollReveal
            v-for="(step, i) in method"
            :key="step.num"
            :delay="i * 150"
          >
            <div class="method-step">
              <span class="method-step__num">{{ step.num }}</span>
              <h3>{{ step.title }}</h3>
              <p>{{ step.detail }}</p>
            </div>
          </SharedScrollReveal>
        </div>
      </div>
    </section>

    <!-- Culture -->
    <section class="culture section section--dark grain-overlay">
      <div class="culture__inner section__inner">
        <SharedScrollReveal>
          <div class="culture__content">
            <span class="section-label">Our Team</span>
            <h2>Built by Engineers, for Engineers</h2>
            <p>
              The same team that designs agent behavior validates it in production-like conditions,
              writes guardrails, and owns rollout strategy. We don't separate architecture from
              implementation.
            </p>
            <p>
              Based in Tallinn, Estonia, we serve enterprises across Europe and beyond.
              Our team brings deep expertise in AI systems, cloud infrastructure, cybersecurity,
              and enterprise software engineering.
            </p>
          </div>
        </SharedScrollReveal>
      </div>
    </section>

    <HomeCTASection />
  </div>
</template>

<style scoped>
.hero { position: relative; padding-top: 10rem; padding-bottom: 5rem; overflow: hidden; }
.hero__inner { position: relative; z-index: 1; max-width: 720px; }
.hero__title { margin-top: 0.5rem; color: var(--color-text-on-dark); }
.hero__subtitle { margin-top: 1.25rem; font-size: 1.15rem; color: var(--color-text-muted-on-dark); line-height: 1.7; max-width: 560px; }

.mission__content { text-align: center; max-width: 800px; margin: 0 auto; }
.mission__statement { margin-top: 0.5rem; font-size: clamp(1.6rem, 3vw, 2.2rem); color: var(--color-text-primary); line-height: 1.4; }

.values { position: relative; overflow: hidden; }
.values__inner { position: relative; z-index: 1; }
.values__heading { margin-top: 0.5rem; color: var(--color-text-on-dark); }
.values__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-top: 3rem; }
.value-card { padding: 2rem; border: 1px solid var(--color-border-dark); border-radius: var(--radius-lg); background: rgba(255, 255, 255, 0.02); }
.value-card h3 { color: var(--color-text-on-dark); margin-bottom: 0.75rem; }
.value-card p { font-size: 0.925rem; color: var(--color-text-muted-on-dark); line-height: 1.65; }

.method__steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-top: 3rem; }
.method-step { display: flex; flex-direction: column; gap: 0.75rem; }
.method-step__num { font-family: var(--font-display); font-size: 2.5rem; color: var(--color-accent); line-height: 1; }
.method-step h3 { color: var(--color-text-primary); }
.method-step p { font-size: 0.925rem; color: var(--color-text-secondary); line-height: 1.65; }

.culture__content { max-width: 640px; }
.culture__content h2 { margin-top: 0.5rem; color: var(--color-text-on-dark); }
.culture__content p { margin-top: 1rem; font-size: 1rem; color: var(--color-text-muted-on-dark); line-height: 1.75; }

@media (max-width: 768px) {
  .values__grid { grid-template-columns: 1fr; }
  .method__steps { grid-template-columns: 1fr; }
}
</style>
