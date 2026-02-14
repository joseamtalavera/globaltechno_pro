<script setup lang="ts">
const scrolled = ref(false);
const mobileOpen = ref(false);
const route = useRoute();

const navLinks = [
  { label: 'Services', to: '/services' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'About', to: '/about' }
];

function onScroll() {
  scrolled.value = window.scrollY > 40;
}

watch(() => route.path, () => {
  mobileOpen.value = false;
});

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
});
</script>

<template>
  <header class="navbar" :class="{ 'navbar--scrolled': scrolled, 'navbar--open': mobileOpen }">
    <a href="#content" class="sr-only navbar__skip">Skip to content</a>

    <nav class="navbar__inner" aria-label="Main navigation">
      <NuxtLink to="/" class="navbar__brand" aria-label="Globaltechno home">
        <span class="navbar__logo" aria-hidden="true">G</span>
        <span class="navbar__wordmark">Globaltechno</span>
      </NuxtLink>

      <div class="navbar__links" :class="{ 'navbar__links--open': mobileOpen }">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="navbar__link"
          :class="{ 'navbar__link--active': route.path.startsWith(link.to) }"
        >
          {{ link.label }}
        </NuxtLink>
      </div>

      <div class="navbar__actions">
        <UiButton variant="filled" size="sm" to="/contact">
          Get in Touch
        </UiButton>

        <button
          class="navbar__hamburger"
          :aria-expanded="mobileOpen"
          aria-controls="mobile-nav"
          aria-label="Toggle menu"
          @click="mobileOpen = !mobileOpen"
        >
          <span class="navbar__hamburger-line"></span>
          <span class="navbar__hamburger-line"></span>
          <span class="navbar__hamburger-line"></span>
        </button>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 0 var(--section-padding-x);
  transition:
    background-color var(--duration-normal) ease,
    backdrop-filter var(--duration-normal) ease,
    border-color var(--duration-normal) ease;
}

.navbar--scrolled {
  background: rgba(10, 10, 11, 0.85);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--color-border-dark);
}

.navbar__skip {
  position: absolute;
  left: 1rem;
  top: -100%;
  z-index: 200;
  padding: 0.5rem 1rem;
  background: var(--color-accent);
  color: var(--color-bg-dark);
  border-radius: var(--radius-sm);
  font-weight: 500;
}

.navbar__skip:focus {
  top: 0.5rem;
}

.navbar__inner {
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.navbar__brand {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
  color: var(--color-text-on-dark);
}

.navbar__logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--radius-sm);
  background: var(--color-accent);
  color: var(--color-bg-dark);
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 400;
}

.navbar__wordmark {
  font-family: var(--font-body);
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.navbar__links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.navbar__link {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-text-muted-on-dark);
  text-decoration: none;
  transition: color var(--duration-fast) ease;
  position: relative;
}

.navbar__link:hover,
.navbar__link--active {
  color: var(--color-text-on-dark);
}

.navbar__link--active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--color-accent);
  border-radius: 1px;
}

.navbar__actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.navbar__hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
}

.navbar__hamburger-line {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--color-text-on-dark);
  border-radius: 1px;
  transition:
    transform var(--duration-normal) var(--ease-out),
    opacity var(--duration-fast) ease;
}

.navbar--open .navbar__hamburger-line:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.navbar--open .navbar__hamburger-line:nth-child(2) {
  opacity: 0;
}

.navbar--open .navbar__hamburger-line:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile */
@media (max-width: 768px) {
  .navbar__links {
    position: fixed;
    top: 72px;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(10, 10, 11, 0.97);
    backdrop-filter: blur(20px);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    opacity: 0;
    pointer-events: none;
    transition: opacity var(--duration-normal) ease;
  }

  .navbar__links--open {
    opacity: 1;
    pointer-events: auto;
  }

  .navbar__link {
    font-size: 1.5rem;
    color: var(--color-text-on-dark);
  }

  .navbar__hamburger {
    display: flex;
  }

  .navbar__actions .btn {
    display: none;
  }
}
</style>
