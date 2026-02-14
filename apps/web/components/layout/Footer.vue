<script setup lang="ts">
const currentYear = new Date().getFullYear();

const navGroups = [
  {
    title: 'Services',
    links: [
      { label: 'AI Agents', to: '/services/ai-agents' },
      { label: 'Cybersecurity', to: '/services/cybersecurity' },
      { label: 'Digital Identity', to: '/services/digital-identity' },
      { label: 'Cloud Computing', to: '/services/cloud-computing' },
      { label: 'Selective Engineering', to: '/services/selective-engineering' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Case Studies', to: '/case-studies' },
      { label: 'Contact', to: '/contact' }
    ]
  }
];
</script>

<template>
  <footer class="footer section--dark grain-overlay">
    <div class="footer__inner section__inner">
      <div class="footer__top">
        <div class="footer__brand">
          <NuxtLink to="/" class="footer__logo-link" aria-label="Globaltechno home">
            <span class="footer__logo" aria-hidden="true">G</span>
            <span class="footer__wordmark">Globaltechno</span>
          </NuxtLink>
          <p class="footer__tagline">
            Intelligent automation, cybersecurity, and cloud-native engineering for enterprises ready to evolve.
          </p>
        </div>

        <div class="footer__nav-groups">
          <div v-for="group in navGroups" :key="group.title" class="footer__nav-group">
            <h4 class="footer__nav-title">{{ group.title }}</h4>
            <ul class="footer__nav-list">
              <li v-for="link in group.links" :key="link.to">
                <NuxtLink :to="link.to" class="footer__nav-link">{{ link.label }}</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer__bottom">
        <p class="footer__copyright">&copy; {{ currentYear }} Globaltechno O&Uuml;. All rights reserved.</p>
        <p class="footer__location">Tallinn, Estonia</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: var(--section-padding-y) var(--section-padding-x) 2rem;
  border-top: 1px solid var(--color-border-dark);
}

.footer__inner {
  max-width: var(--max-width);
  margin: 0 auto;
}

.footer__top {
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  gap: 4rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid var(--color-border-dark);
}

.footer__brand {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer__logo-link {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
  color: var(--color-text-on-dark);
}

.footer__logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: var(--radius-sm);
  background: var(--color-accent);
  color: var(--color-bg-dark);
  font-family: var(--font-display);
  font-size: 1.15rem;
}

.footer__wordmark {
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.footer__tagline {
  font-size: 0.9rem;
  color: var(--color-text-muted-on-dark);
  max-width: 320px;
  line-height: 1.6;
}

.footer__nav-groups {
  display: flex;
  gap: 4rem;
}

.footer__nav-title {
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-text-on-dark);
  margin-bottom: 1rem;
}

.footer__nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.footer__nav-link {
  font-size: 0.875rem;
  color: var(--color-text-muted-on-dark);
  text-decoration: none;
  transition: color var(--duration-fast) ease;
}

.footer__nav-link:hover {
  color: var(--color-text-on-dark);
}

.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5rem;
}

.footer__copyright,
.footer__location {
  font-size: 0.8rem;
  color: var(--color-text-muted-on-dark);
}

@media (max-width: 768px) {
  .footer__top {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .footer__nav-groups {
    gap: 2rem;
  }

  .footer__bottom {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
}
</style>
