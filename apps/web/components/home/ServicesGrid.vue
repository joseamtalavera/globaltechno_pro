<script setup lang="ts">
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
    icon: '🛡️',
    featured: false
  },
  {
    title: 'Digital Identity',
    description: 'Frictionless authentication, identity verification, and decentralized identity frameworks.',
    href: '/services/digital-identity',
    icon: '🔑',
    featured: false
  },
  {
    title: 'Cloud Computing',
    description: 'Multi-cloud orchestration, serverless architecture, and infrastructure-as-code at scale.',
    href: '/services/cloud-computing',
    icon: '☁️',
    featured: false
  },
  {
    title: 'Selective Engineering',
    description: 'Purpose-built software, API design, and performance engineering for high-stakes systems.',
    href: '/services/selective-engineering',
    icon: '⚙️',
    featured: false
  }
];
</script>

<template>
  <section class="services-grid section section--light">
    <div class="services-grid__inner section__inner">
      <SharedScrollReveal>
        <span class="section-label">What We Do</span>
        <h2 class="services-grid__heading">Technology That Transforms</h2>
        <p class="services-grid__intro">
          Five disciplines. One mission: engineer intelligence into every layer of your business.
        </p>
      </SharedScrollReveal>

      <div class="services-grid__cards">
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
</template>

<style scoped>
.services-grid__heading {
  margin-top: 0.5rem;
  color: var(--color-text-primary);
}

.services-grid__intro {
  margin-top: 1rem;
  font-size: 1.1rem;
  color: var(--color-text-secondary);
  max-width: 520px;
}

.services-grid__cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  margin-top: 3.5rem;
}

/* AI Agents card spans 2 columns */
.services-grid__cards > :first-child {
  grid-column: span 2;
}

@media (max-width: 1024px) {
  .services-grid__cards {
    grid-template-columns: repeat(2, 1fr);
  }

  .services-grid__cards > :first-child {
    grid-column: span 2;
  }
}

@media (max-width: 640px) {
  .services-grid__cards {
    grid-template-columns: 1fr;
  }

  .services-grid__cards > :first-child {
    grid-column: span 1;
  }
}
</style>
