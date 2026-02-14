<script setup lang="ts">
useSeoMeta({
  title: 'Services',
  description: 'AI agents, cybersecurity, digital identity, cloud computing, and selective engineering services from Globaltechno.',
  ogTitle: 'Services | Globaltechno',
  ogType: 'website'
});

const services = [
  {
    title: 'AI Agents & Automation',
    description: 'Autonomous agents that execute workflows, make decisions, and learn continuously. No human bottleneck.',
    href: '/services/ai-agents',
    icon: '🤖',
    featured: true
  },
  {
    title: 'Cybersecurity',
    description: 'Zero-trust architecture, threat detection, and SOC automation to protect critical infrastructure.',
    href: '/services/cybersecurity',
    icon: '🛡️'
  },
  {
    title: 'Digital Identity',
    description: 'Frictionless authentication, identity verification, and decentralized identity frameworks.',
    href: '/services/digital-identity',
    icon: '🔑'
  },
  {
    title: 'Cloud Computing',
    description: 'Multi-cloud orchestration, serverless architecture, and infrastructure-as-code at scale.',
    href: '/services/cloud-computing',
    icon: '☁️'
  },
  {
    title: 'Selective Engineering',
    description: 'Purpose-built software, API design, and performance engineering for high-stakes systems.',
    href: '/services/selective-engineering',
    icon: '⚙️'
  }
];
</script>

<template>
  <div>
    <section class="hero section section--dark grain-overlay">
      <SharedGradientMesh variant="hero" />
      <div class="hero__inner section__inner">
        <SharedScrollReveal>
          <span class="section-label">Services</span>
          <h1 class="hero__title">What We Build</h1>
          <p class="hero__subtitle">
            Five disciplines engineered to transform how enterprises operate, secure, and scale their technology.
          </p>
        </SharedScrollReveal>
      </div>
    </section>

    <section class="services section section--light">
      <div class="services__inner section__inner">
        <div class="services__grid">
          <SharedScrollReveal
            v-for="(service, i) in services"
            :key="service.href"
            :delay="i * 100"
          >
            <SharedServiceCard
              :title="service.title"
              :description="service.description"
              :href="service.href"
              :icon="service.icon"
              :featured="service.featured"
            />
          </SharedScrollReveal>
        </div>
      </div>
    </section>

    <HomeCTASection />
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  padding-top: 10rem;
  padding-bottom: 5rem;
  overflow: hidden;
}

.hero__inner {
  position: relative;
  z-index: 1;
}

.hero__title {
  margin-top: 0.5rem;
  color: var(--color-text-on-dark);
}

.hero__subtitle {
  margin-top: 1rem;
  font-size: 1.15rem;
  color: var(--color-text-muted-on-dark);
  max-width: 540px;
}

.services__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.services__grid > :first-child {
  grid-column: span 2;
}

@media (max-width: 768px) {
  .services__grid {
    grid-template-columns: 1fr;
  }

  .services__grid > :first-child {
    grid-column: span 1;
  }
}
</style>
