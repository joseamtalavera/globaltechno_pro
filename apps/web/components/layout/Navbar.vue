<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';

const route = useRoute();
const scrolled = ref(false);
const mobileOpen = ref(false);

// Visual-only locale toggle until i18n ships in #41–#43.
// Persists the user's pick across pages so it doesn't snap back.
const locale = ref<'en' | 'es'>('en');

const navLinks = [
  { label: 'Solutions', to: '/solutions' },
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' }
];

function onScroll(): void {
  scrolled.value = window.scrollY > 40;
}

function toggleLocale(target: 'en' | 'es'): void {
  locale.value = target;
  if (typeof localStorage !== 'undefined') {
    try {
      localStorage.setItem('gt:locale', target);
    } catch {
      // ignore
    }
  }
}

watch(() => route.path, () => {
  mobileOpen.value = false;
});

onMounted(() => {
  if (typeof localStorage !== 'undefined') {
    const saved = localStorage.getItem('gt:locale');
    if (saved === 'en' || saved === 'es') {
      locale.value = saved;
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
});
</script>

<template>
  <header
    class="navbar"
    :class="{ 'navbar--scrolled': scrolled, 'navbar--open': mobileOpen }"
  >
    <a href="#content" class="sr-only">Skip to content</a>

    <nav class="navbar__capsule" aria-label="Main navigation">
      <NuxtLink to="/" class="navbar__brand" aria-label="Globaltechno home">
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

      <div class="navbar__cluster">
        <div class="navbar__locale" role="group" aria-label="Language">
          <button
            type="button"
            class="navbar__locale-btn"
            :class="{ 'is-on': locale === 'en' }"
            :aria-pressed="locale === 'en'"
            @click="toggleLocale('en')"
          >
            EN
          </button>
          <span class="navbar__locale-sep" aria-hidden="true">/</span>
          <button
            type="button"
            class="navbar__locale-btn"
            :class="{ 'is-on': locale === 'es' }"
            :aria-pressed="locale === 'es'"
            @click="toggleLocale('es')"
          >
            ES
          </button>
        </div>

        <NuxtLink to="/brief" class="navbar__cta">
          Start a project
        </NuxtLink>

        <button
          class="navbar__hamburger"
          :aria-expanded="mobileOpen"
          aria-controls="mobile-nav"
          aria-label="Toggle menu"
          @click="mobileOpen = !mobileOpen"
        >
          <span class="navbar__hamburger-line" />
          <span class="navbar__hamburger-line" />
          <span class="navbar__hamburger-line" />
        </button>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 1rem;
  left: 1rem;
  right: 1rem;
  z-index: 100;
  display: flex;
  justify-content: center;
  pointer-events: none;
}

.navbar__capsule {
  pointer-events: auto;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: var(--max-width);
  padding: 0.4rem 0.45rem 0.4rem 1.2rem;
  background: color-mix(in oklch, var(--paper-soft) 92%, transparent);
  border: 1px solid var(--line);
  border-radius: var(--radius-full);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 6px 24px rgba(20, 17, 13, 0.06);
  transition:
    box-shadow var(--duration-normal) var(--ease),
    background var(--duration-normal) var(--ease),
    border-color var(--duration-normal) var(--ease);
}

.navbar--scrolled .navbar__capsule {
  background: color-mix(in oklch, var(--paper-soft) 96%, transparent);
  box-shadow: 0 10px 30px rgba(20, 17, 13, 0.10);
}

/* Brand */
.navbar__brand {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: var(--ink);
}

.navbar__wordmark {
  font-family: var(--font-display);
  font-size: 1.45rem;
  letter-spacing: -0.025em;
  font-weight: 400;
  line-height: 1;
  color: var(--ink);
}

/* Center nav links */
.navbar__links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
}

.navbar__link {
  font-family: var(--font-body);
  font-size: 0.92rem;
  font-weight: 500;
  letter-spacing: -0.005em;
  color: var(--ink-mute);
  text-decoration: none;
  transition: color var(--duration-fast) ease;
  position: relative;
  padding: 0.25rem 0;
}

.navbar__link:hover,
.navbar__link--active {
  color: var(--ink);
}

.navbar__link--active::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -4px;
  transform: translateX(-50%);
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--accent);
}

/* Right cluster */
.navbar__cluster {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

/* Locale toggle — minimal text pair */
.navbar__locale {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  font-weight: 500;
  padding: 0 0.35rem;
}

.navbar__locale-btn {
  border: none;
  background: transparent;
  color: var(--ink-faint);
  cursor: pointer;
  padding: 0.25rem 0.1rem;
  font: inherit;
  letter-spacing: inherit;
  transition: color var(--duration-fast) ease;
}

.navbar__locale-btn:hover {
  color: var(--ink-mute);
}

.navbar__locale-btn.is-on {
  color: var(--ink);
}

.navbar__locale-sep {
  color: var(--line);
  user-select: none;
}

/* CTA filled pill */
.navbar__cta {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--paper);
  background: var(--accent);
  text-decoration: none;
  padding: 0.55rem 1.1rem;
  border-radius: var(--radius-full);
  transition:
    background var(--duration-fast) ease,
    transform var(--duration-fast) ease;
}

.navbar__cta:hover {
  background: var(--accent-deep);
  transform: translateY(-1px);
}

/* Hamburger */
.navbar__hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  width: 36px;
  height: 36px;
  background: transparent;
  border: 1px solid var(--line);
  border-radius: var(--radius-full);
  cursor: pointer;
  padding: 8px;
  transition: border-color var(--duration-fast) ease;
}

.navbar__hamburger:hover {
  border-color: var(--ink);
}

.navbar__hamburger-line {
  display: block;
  width: 100%;
  height: 1.5px;
  background: var(--ink);
  border-radius: 1px;
  transition:
    transform var(--duration-normal) var(--ease),
    opacity var(--duration-fast) ease;
}

.navbar--open .navbar__hamburger-line:nth-child(1) {
  transform: translateY(5px) rotate(45deg);
}

.navbar--open .navbar__hamburger-line:nth-child(2) {
  opacity: 0;
}

.navbar--open .navbar__hamburger-line:nth-child(3) {
  transform: translateY(-5px) rotate(-45deg);
}

/* Responsive */
@media (max-width: 900px) {
  .navbar__locale {
    display: none;
  }
}

@media (max-width: 768px) {
  .navbar__capsule {
    grid-template-columns: auto 1fr auto;
    gap: 1rem;
    padding: 0.4rem 0.45rem 0.4rem 1.2rem;
  }

  .navbar__links {
    position: fixed;
    top: 4.5rem;
    left: 1rem;
    right: 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    padding: 2.5rem 1.5rem;
    background: var(--paper-soft);
    border: 1px solid var(--line);
    border-radius: var(--radius-xl);
    box-shadow: 0 12px 40px rgba(20, 17, 13, 0.10);
    opacity: 0;
    pointer-events: none;
    transition: opacity var(--duration-normal) var(--ease);
  }

  .navbar__links--open {
    opacity: 1;
    pointer-events: auto;
  }

  .navbar__link {
    font-size: 1.25rem;
    color: var(--ink);
  }

  .navbar__cta {
    display: none;
  }

  .navbar__hamburger {
    display: flex;
  }
}
</style>
