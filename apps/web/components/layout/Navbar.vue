<script setup lang="ts">
const scrolled = ref(false);
const mobileOpen = ref(false);
const route = useRoute();

const navLinks = [
  { label: 'Solutions', to: '/solutions' },
  { label: 'Work', to: '/work' },
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
        <img src="/logo.png" alt="Globaltechno" class="navbar__logo" />
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
        <UiButton variant="filled-ink" size="sm" to="/brief">
          Start a project
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
  background: rgba(251, 250, 247, 0.82);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--line);
}

.navbar__skip {
  position: absolute;
  left: 1rem;
  top: -100%;
  z-index: 200;
  padding: 0.5rem 1rem;
  background: var(--accent);
  color: var(--paper);
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
  color: var(--ink);
}

.navbar__logo {
  height: 32px;
  width: auto;
  display: block;
}

.navbar__links {
  display: flex;
  align-items: center;
  gap: 2.25rem;
}

.navbar__link {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--ink-mute);
  text-decoration: none;
  transition: color var(--duration-fast) ease;
  position: relative;
}

.navbar__link:hover,
.navbar__link--active {
  color: var(--ink);
}

.navbar__link--active::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--accent);
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
  height: 1.5px;
  background: var(--ink);
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

@media (max-width: 768px) {
  .navbar__links {
    position: fixed;
    top: 72px;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--paper);
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
    color: var(--ink);
  }

  .navbar__hamburger {
    display: flex;
  }

  .navbar__actions .btn {
    display: none;
  }
}
</style>
