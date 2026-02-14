<script setup lang="ts">
useSeoMeta({
  title: 'Cloud Computing',
  description: 'Multi-cloud orchestration, serverless architecture, and infrastructure-as-code for elastic, cost-efficient operations.',
  ogTitle: 'Cloud Computing | Globaltechno',
  ogType: 'website'
});

const benefits = [
  'Elastic scaling on demand',
  '99.99% availability targets',
  'Significant cost reduction',
  'Infrastructure as code'
];

const steps = [
  {
    num: '01',
    title: 'Assess & Plan',
    description: 'Audit current infrastructure, identify migration candidates, and design the target cloud architecture.'
  },
  {
    num: '02',
    title: 'Build & Migrate',
    description: 'Implement infrastructure-as-code, containerize workloads, and execute phased migration with zero downtime.'
  },
  {
    num: '03',
    title: 'Optimize & Scale',
    description: 'Continuous cost optimization, auto-scaling policies, and performance monitoring to maximize ROI.'
  }
];

const features = [
  {
    title: 'Cloud Migration',
    description: 'Structured migration from on-premise to cloud with risk mitigation and rollback strategies.'
  },
  {
    title: 'Multi-Cloud Orchestration',
    description: 'Unified management across AWS, Azure, and GCP with workload portability and disaster recovery.'
  },
  {
    title: 'Serverless Architecture',
    description: 'Event-driven compute that scales to zero, reducing costs while handling traffic spikes.'
  },
  {
    title: 'Cost Optimization',
    description: 'Reserved capacity planning, spot instance strategies, and real-time cost anomaly detection.'
  }
];
</script>

<template>
  <div>
    <section class="hero section section--dark grain-overlay">
      <SharedGradientMesh variant="hero" />
      <div class="hero__inner section__inner">
        <SharedScrollReveal>
          <UiBadge label="Cloud" variant="accent" />
          <h1 class="hero__title">Cloud Computing</h1>
          <p class="hero__subtitle">
            Multi-cloud orchestration, serverless architecture, and infrastructure-as-code
            engineered for elastic, cost-efficient operations at any scale.
          </p>
        </SharedScrollReveal>
      </div>
    </section>

    <section class="overview section section--light">
      <div class="overview__inner section__inner">
        <div class="overview__grid">
          <SharedScrollReveal>
            <div class="overview__text">
              <span class="section-label section-label--light">Overview</span>
              <h2>Infrastructure That Scales</h2>
              <p>
                Cloud isn't just about hosting — it's about building systems that respond to demand,
                recover from failure, and optimize costs automatically. We architect cloud-native
                platforms that treat infrastructure as software.
              </p>
              <p>
                Every deployment is versioned, every change is reviewable, and every environment
                is reproducible. From containerized microservices to serverless event pipelines,
                we build platforms that grow with your business.
              </p>
            </div>
          </SharedScrollReveal>
          <SharedScrollReveal :delay="200">
            <div class="overview__benefits">
              <h3>Key Benefits</h3>
              <ul class="benefits-list">
                <li v-for="benefit in benefits" :key="benefit">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M5 10l3 3 7-7" stroke="var(--color-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  {{ benefit }}
                </li>
              </ul>
            </div>
          </SharedScrollReveal>
        </div>
      </div>
    </section>

    <section class="how-it-works section section--dark grain-overlay">
      <SharedGradientMesh variant="section" />
      <div class="how-it-works__inner section__inner">
        <SharedScrollReveal>
          <span class="section-label">How It Works</span>
          <h2 class="how-it-works__heading">Cloud-Native Delivery</h2>
        </SharedScrollReveal>
        <div class="how-it-works__steps">
          <SharedScrollReveal v-for="(step, i) in steps" :key="step.num" :delay="i * 150">
            <div class="step">
              <span class="step__num">{{ step.num }}</span>
              <h3 class="step__title">{{ step.title }}</h3>
              <p class="step__description">{{ step.description }}</p>
            </div>
          </SharedScrollReveal>
        </div>
      </div>
    </section>

    <section class="features section section--light">
      <div class="features__inner section__inner">
        <SharedScrollReveal>
          <span class="section-label section-label--light">Capabilities</span>
          <h2>Cloud Capabilities</h2>
        </SharedScrollReveal>
        <div class="features__grid">
          <SharedScrollReveal v-for="(feature, i) in features" :key="feature.title" :delay="i * 100">
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
.hero { position: relative; padding-top: 10rem; padding-bottom: 5rem; overflow: hidden; }
.hero__inner { position: relative; z-index: 1; max-width: 720px; }
.hero__title { margin-top: 1rem; color: var(--color-text-on-dark); }
.hero__subtitle { margin-top: 1.25rem; font-size: 1.15rem; color: var(--color-text-muted-on-dark); line-height: 1.7; }
.overview__grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: 4rem; align-items: start; }
.overview__text h2 { margin-top: 0.5rem; color: var(--color-text-primary); }
.overview__text p { margin-top: 1rem; color: var(--color-text-secondary); font-size: 1rem; line-height: 1.75; }
.overview__benefits h3 { margin-bottom: 1.25rem; color: var(--color-text-primary); }
.benefits-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.9rem; }
.benefits-list li { display: flex; align-items: center; gap: 0.6rem; font-size: 0.95rem; color: var(--color-text-primary); }
.how-it-works { position: relative; overflow: hidden; }
.how-it-works__inner { position: relative; z-index: 1; }
.how-it-works__heading { margin-top: 0.5rem; color: var(--color-text-on-dark); }
.how-it-works__steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-top: 3rem; }
.step { padding: 2rem; border: 1px solid var(--color-border-dark); border-radius: var(--radius-lg); background: rgba(255, 255, 255, 0.02); }
.step__num { font-family: var(--font-display); font-size: 2.5rem; color: var(--color-accent); line-height: 1; }
.step__title { margin-top: 1rem; color: var(--color-text-on-dark); }
.step__description { margin-top: 0.75rem; font-size: 0.925rem; color: var(--color-text-muted-on-dark); line-height: 1.65; }
.features__grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin-top: 3rem; }
.feature-card { padding: 1.75rem; border: 1px solid var(--color-border-light); border-radius: var(--radius-lg); background: white; transition: transform var(--duration-normal) var(--ease-out), box-shadow var(--duration-normal) var(--ease-out); }
.feature-card:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.04); }
.feature-card h3 { font-size: 1.1rem; color: var(--color-text-primary); }
.feature-card p { margin-top: 0.6rem; font-size: 0.9rem; color: var(--color-text-secondary); line-height: 1.6; }
@media (max-width: 1024px) { .overview__grid { grid-template-columns: 1fr; gap: 2.5rem; } .how-it-works__steps { grid-template-columns: 1fr; } }
@media (max-width: 640px) { .features__grid { grid-template-columns: 1fr; } }
</style>
