<script setup lang="ts">
const currentYear = new Date().getFullYear();

const siteLinks = [
  { label: 'Solutions', to: '/solutions' },
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Brief', to: '/brief' }
];
</script>

<template>
  <footer class="footer section section--alt">
    <div class="footer__inner section__inner">
      <div class="footer__top">
        <div class="footer__brand">
          <NuxtLink to="/" class="footer__logo-link" aria-label="Globaltechno home">
            <span class="footer__wordmark">Globaltechno</span>
          </NuxtLink>
          <p class="footer__tagline">
            Companies bring problems. We build the solution.
          </p>
        </div>

        <div class="footer__nav-groups">
          <div class="footer__nav-group">
            <h4 class="footer__nav-title">Site</h4>
            <ul class="footer__nav-list">
              <li v-for="link in siteLinks" :key="link.to">
                <NuxtLink :to="link.to" class="footer__nav-link">{{ link.label }}</NuxtLink>
              </li>
            </ul>
          </div>

          <div class="footer__nav-group">
            <h4 class="footer__nav-title">Company</h4>
            <ul class="footer__nav-list">
              <li>
                <a href="mailto:hello@globaltechno.eu" class="footer__nav-link">hello@globaltechno.eu</a>
              </li>
              <li class="footer__nav-static">Tallinn, Estonia</li>
              <li class="footer__nav-static">Globaltechno OÜ</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer__bottom">
        <p class="footer__copyright">&copy; {{ currentYear }} Globaltechno O&Uuml;. All rights reserved.</p>
        <p class="footer__location">Built in Tallinn.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: var(--section-padding-y) var(--section-padding-x) 2.5rem;
  border-top: 1px solid var(--line);
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
  border-bottom: 1px solid var(--line);
}

.footer__brand {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer__logo-link {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: var(--ink);
}

.footer__wordmark {
  font-family: var(--font-display);
  font-size: 1.5rem;
  letter-spacing: -0.025em;
  font-weight: 400;
  line-height: 1;
  color: var(--ink);
}

.footer__tagline {
  font-family: var(--font-display);
  font-size: 1.35rem;
  line-height: 1.3;
  color: var(--ink);
  max-width: 360px;
  letter-spacing: -0.015em;
}

.footer__nav-groups {
  display: flex;
  gap: 4rem;
}

.footer__nav-title {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--ink-mute);
  margin-bottom: 1.25rem;
}

.footer__nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.footer__nav-link {
  font-size: 0.925rem;
  color: var(--ink);
  text-decoration: none;
  transition: color var(--duration-fast) ease;
}

.footer__nav-link:hover {
  color: var(--accent);
}

.footer__nav-static {
  font-size: 0.925rem;
  color: var(--ink-mute);
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
  color: var(--ink-mute);
  font-family: var(--font-mono);
  letter-spacing: 0.04em;
}

@media (max-width: 768px) {
  .footer__top {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .footer__nav-groups {
    gap: 2.5rem;
  }

  .footer__bottom {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
}
</style>
