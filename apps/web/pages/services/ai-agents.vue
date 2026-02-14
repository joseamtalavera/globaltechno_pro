<script setup lang="ts">
useSeoMeta({
  title: 'AI Agents & Automation',
  description: 'Autonomous AI agents that execute workflows, make decisions, and learn continuously. Built for enterprise-grade reliability.',
  ogTitle: 'AI Agents & Automation | Globaltechno',
  ogType: 'website'
});

const benefits = [
  '10x faster process execution',
  'Zero human error in repetitive tasks',
  'Always-on autonomous operations',
  'Continuous learning and adaptation',
  'Full audit trail for every decision'
];

const steps = [
  {
    num: '01',
    title: 'Map the Workflow',
    description: 'We analyze your operational processes to identify where autonomous agents create the highest leverage.'
  },
  {
    num: '02',
    title: 'Design the Agent Architecture',
    description: 'Purpose-built agents with role-based autonomy, safety constraints, and deterministic fallback behavior.'
  },
  {
    num: '03',
    title: 'Deploy and Monitor',
    description: 'Production deployment with real-time telemetry, performance tracking, and continuous optimization loops.'
  }
];

const features = [
  {
    title: 'Workflow Orchestration',
    description: 'Multi-step agent pipelines that coordinate complex business processes end-to-end.'
  },
  {
    title: 'Decision Intelligence',
    description: 'Agents that evaluate options, apply business rules, and make contextual decisions autonomously.'
  },
  {
    title: 'LLM Integration',
    description: 'Seamless integration with foundation models for natural language understanding and generation.'
  },
  {
    title: 'Safety Controls',
    description: 'Policy gates, confidence thresholds, and human-in-the-loop approval for high-stakes actions.'
  },
  {
    title: 'Retrieval Augmented Execution',
    description: 'Source-aware context pipelines that ground agent decisions in your proprietary data.'
  },
  {
    title: 'Observability',
    description: 'Action traces, latency monitoring, and full-lineage audit logs for every agent run.'
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
          <UiBadge label="Our Flagship Service" variant="accent" />
          <h1 class="hero__title">AI Agents &amp; Automation</h1>
          <p class="hero__subtitle">
            Autonomous agents that execute workflows, make decisions, and learn continuously.
            Built for enterprises that need reliability, control, and measurable outcomes.
          </p>
        </SharedScrollReveal>
      </div>
    </section>

    <!-- Overview -->
    <section class="overview section section--light">
      <div class="overview__inner section__inner">
        <div class="overview__grid">
          <SharedScrollReveal>
            <div class="overview__text">
              <span class="section-label section-label--light">Overview</span>
              <h2>Intelligence That Executes</h2>
              <p>
                Most AI implementations stop at generating text or predictions. Our agents go further — they
                take action. We build autonomous systems that integrate with your existing infrastructure,
                understand your business context, and execute complex workflows without human intervention.
              </p>
              <p>
                Every agent is purpose-built with bounded autonomy. They know what they're allowed to do,
                when to escalate, and how to recover from failure. The result: operations that run faster,
                more consistently, and with complete auditability.
              </p>
              <p>
                From document processing and compliance review to customer onboarding and supply chain
                optimization — our agents handle the work that slows your teams down.
              </p>
            </div>
          </SharedScrollReveal>

          <SharedScrollReveal :delay="200">
            <div class="overview__benefits">
              <h3>Key Benefits</h3>
              <ul class="benefits-list">
                <li v-for="benefit in benefits" :key="benefit">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M5 10l3 3 7-7" stroke="var(--color-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  {{ benefit }}
                </li>
              </ul>
            </div>
          </SharedScrollReveal>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="how-it-works section section--dark grain-overlay">
      <SharedGradientMesh variant="section" />
      <div class="how-it-works__inner section__inner">
        <SharedScrollReveal>
          <span class="section-label">How It Works</span>
          <h2 class="how-it-works__heading">From Analysis to Autonomy</h2>
        </SharedScrollReveal>

        <div class="how-it-works__steps">
          <SharedScrollReveal
            v-for="(step, i) in steps"
            :key="step.num"
            :delay="i * 150"
          >
            <div class="step">
              <span class="step__num">{{ step.num }}</span>
              <h3 class="step__title">{{ step.title }}</h3>
              <p class="step__description">{{ step.description }}</p>
            </div>
          </SharedScrollReveal>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="features section section--light">
      <div class="features__inner section__inner">
        <SharedScrollReveal>
          <span class="section-label section-label--light">Capabilities</span>
          <h2>What Our Agents Can Do</h2>
        </SharedScrollReveal>

        <div class="features__grid">
          <SharedScrollReveal
            v-for="(feature, i) in features"
            :key="feature.title"
            :delay="i * 100"
          >
            <div class="feature-card">
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.description }}</p>
            </div>
          </SharedScrollReveal>
        </div>
      </div>
    </section>

    <HomeCTASection />
  </div>
</template>

<style scoped>
/* Hero */
.hero {
  position: relative;
  padding-top: 10rem;
  padding-bottom: 5rem;
  overflow: hidden;
}

.hero__inner {
  position: relative;
  z-index: 1;
  max-width: 720px;
}

.hero__title {
  margin-top: 1rem;
  color: var(--color-text-on-dark);
}

.hero__subtitle {
  margin-top: 1.25rem;
  font-size: 1.15rem;
  color: var(--color-text-muted-on-dark);
  line-height: 1.7;
}

/* Overview */
.overview__grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 4rem;
  align-items: start;
}

.overview__text h2 {
  margin-top: 0.5rem;
  color: var(--color-text-primary);
}

.overview__text p {
  margin-top: 1rem;
  color: var(--color-text-secondary);
  font-size: 1rem;
  line-height: 1.75;
}

.overview__benefits h3 {
  margin-bottom: 1.25rem;
  color: var(--color-text-primary);
}

.benefits-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.benefits-list li {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.95rem;
  color: var(--color-text-primary);
}

/* How It Works */
.how-it-works {
  position: relative;
  overflow: hidden;
}

.how-it-works__inner {
  position: relative;
  z-index: 1;
}

.how-it-works__heading {
  margin-top: 0.5rem;
  color: var(--color-text-on-dark);
}

.how-it-works__steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
}

.step {
  padding: 2rem;
  border: 1px solid var(--color-border-dark);
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.02);
}

.step__num {
  font-family: var(--font-display);
  font-size: 2.5rem;
  color: var(--color-accent);
  line-height: 1;
}

.step__title {
  margin-top: 1rem;
  color: var(--color-text-on-dark);
}

.step__description {
  margin-top: 0.75rem;
  font-size: 0.925rem;
  color: var(--color-text-muted-on-dark);
  line-height: 1.65;
}

/* Features */
.features__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;
}

.feature-card {
  padding: 1.75rem;
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-lg);
  background: white;
  transition:
    transform var(--duration-normal) var(--ease-out),
    box-shadow var(--duration-normal) var(--ease-out);
}

.feature-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.04);
}

.feature-card h3 {
  font-size: 1.1rem;
  color: var(--color-text-primary);
}

.feature-card p {
  margin-top: 0.6rem;
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .overview__grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .how-it-works__steps {
    grid-template-columns: 1fr;
  }

  .features__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .features__grid {
    grid-template-columns: 1fr;
  }
}
</style>
