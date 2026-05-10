<script setup lang="ts">
import { computed } from 'vue';

useSeoMeta({
  title: 'Work',
  description:
    'Selected work from Globaltechno — production builds for clients across web platforms.',
  ogTitle: 'Work — Globaltechno'
});

interface Work {
  num: string;
  title: string;
  emphasis: string;
  year: string;
  role: string;
  status: 'live' | 'beta';
  to: string;
  liveUrl?: string;
}

const works: Work[] = [
  {
    num: '01',
    title: 'Codewright —',
    emphasis: 'testing platform',
    year: '2024',
    role: 'Design + build',
    status: 'live',
    to: '/work/codewright',
    liveUrl: 'https://codewright.co'
  },
  {
    num: '02',
    title: 'be-working —',
    emphasis: 'workspace, reduced',
    year: '2025',
    role: 'Product + web',
    status: 'live',
    to: '/work/be-working',
    liveUrl: 'https://be-working.com'
  },
  {
    num: '03',
    title: 'Globaltechno OS —',
    emphasis: 'our own runway',
    year: '2026',
    role: 'Internal product',
    status: 'beta',
    to: '/work/globaltechno-os'
  }
];

type Filter = 'all' | 'live' | 'beta' | '2024' | '2025' | '2026';

const route = useRoute();
const router = useRouter();

const activeFilter = computed<Filter>(() => {
  const q = (route.query.filter as string | undefined)?.toLowerCase();
  const valid: Filter[] = ['all', 'live', 'beta', '2024', '2025', '2026'];
  return (valid.includes(q as Filter) ? q : 'all') as Filter;
});

const filtered = computed<Work[]>(() => {
  const f = activeFilter.value;
  if (f === 'all') return works;
  if (f === 'live' || f === 'beta') return works.filter(w => w.status === f);
  return works.filter(w => w.year === f);
});

const counts = computed(() => ({
  all: works.length,
  live: works.filter(w => w.status === 'live').length,
  beta: works.filter(w => w.status === 'beta').length,
  '2024': works.filter(w => w.year === '2024').length,
  '2025': works.filter(w => w.year === '2025').length,
  '2026': works.filter(w => w.year === '2026').length
}));

const chips: Array<{ value: Filter; label: string }> = [
  { value: 'all', label: 'All' },
  { value: 'live', label: 'Live' },
  { value: 'beta', label: 'Beta' },
  { value: '2024', label: '2024' },
  { value: '2025', label: '2025' },
  { value: '2026', label: '2026' }
];

function setFilter(value: Filter): void {
  if (value === 'all') {
    router.replace({ query: { ...route.query, filter: undefined } });
  } else {
    router.replace({ query: { ...route.query, filter: value } });
  }
}
</script>

<template>
  <div>
    <section class="page-head section section--light">
      <div class="page-head__inner section__inner section__inner--narrow">
        <SharedScrollReveal>
          <SharedKicker label="Work" ordinal="00" />
          <h1 class="page-head__title text-balance">
            Selected <em>work</em>.
          </h1>
          <p class="page-head__lede">
            Each one started as a problem on a call. None of them are products
            we sell off the shelf.
          </p>
        </SharedScrollReveal>
      </div>
    </section>

    <section class="work-list section section--light">
      <div class="work-list__inner section__inner section__inner--narrow">
        <div class="filters" role="group" aria-label="Filter projects">
          <button
            v-for="chip in chips"
            :key="chip.value"
            type="button"
            class="chip"
            :class="{ 'is-on': activeFilter === chip.value }"
            :aria-pressed="activeFilter === chip.value"
            :disabled="counts[chip.value] === 0"
            @click="setFilter(chip.value)"
          >
            {{ chip.label }}
            <span class="chip__count">{{ counts[chip.value] }}</span>
          </button>
        </div>

        <ol v-if="filtered.length" class="work-rows">
          <li
            v-for="(w, i) in filtered"
            :key="w.to"
            class="work-row"
            :style="{ '--reveal-delay': `${i * 60}ms` }"
          >
            <NuxtLink :to="w.to" class="work-row__link">
              <span class="work-row__num">{{ w.num }}</span>
              <span class="work-row__title">
                {{ w.title }} <em>{{ w.emphasis }}</em>.
              </span>
              <span class="work-row__role">{{ w.role }}</span>
              <span class="work-row__year">{{ w.year }}</span>
              <span class="work-row__arrow" aria-hidden="true">→</span>
            </NuxtLink>
          </li>
        </ol>

        <p v-else class="work-list__empty">
          No projects match this filter.
          <button type="button" class="work-list__reset" @click="setFilter('all')">
            Clear filter →
          </button>
        </p>
      </div>
    </section>

    <HomeClosingCtaSection />
  </div>
</template>

<style scoped>
.page-head {
  padding-top: clamp(7rem, 12vw, 10rem);
  padding-bottom: clamp(2rem, 4vw, 4rem);
}

.page-head__inner {
  max-width: var(--max-width-narrow);
  margin: 0 auto;
}

.page-head__title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 9vw, 8rem);
  letter-spacing: -0.04em;
  line-height: 0.95;
  margin: 0.6rem 0 1.4rem;
  color: var(--ink);
}

.page-head__title em {
  font-style: italic;
  color: var(--accent);
}

.page-head__lede {
  font-family: var(--font-body);
  font-size: clamp(1.05rem, 1.5vw, 1.2rem);
  line-height: 1.6;
  color: var(--ink-mute);
  max-width: 56ch;
}

.work-list__inner {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  max-width: var(--max-width-narrow);
  margin: 0 auto;
}

/* Filter chips */
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.chip {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding: 0.5rem 0.85rem;
  border-radius: var(--radius-full);
  border: 1px solid var(--line);
  background: var(--paper-soft);
  color: var(--ink-mute);
  cursor: pointer;
  transition:
    background var(--duration-fast) ease,
    border-color var(--duration-fast) ease,
    color var(--duration-fast) ease;
}

.chip:hover:not(:disabled) {
  border-color: var(--ink);
  color: var(--ink);
}

.chip.is-on {
  background: var(--ink);
  color: var(--paper);
  border-color: var(--ink);
}

.chip:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.chip__count {
  margin-left: 0.4rem;
  color: var(--ink-faint);
}

.chip.is-on .chip__count {
  color: color-mix(in oklch, var(--paper) 60%, transparent);
}

/* Row list */
.work-rows {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--line);
}

.work-row {
  border-bottom: 1px solid var(--line);
}

.work-row__link {
  display: grid;
  grid-template-columns: 60px 1fr 1fr 80px 60px;
  gap: 1.5rem;
  align-items: center;
  padding: 1.6rem 0.6rem;
  text-decoration: none;
  color: var(--ink);
  transition:
    background var(--duration-normal) var(--ease),
    padding-left var(--duration-normal) var(--ease);
}

.work-row__link:hover {
  background: var(--paper-soft);
  padding-left: 1.4rem;
}

.work-row__num {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  color: var(--ink-faint);
}

.work-row__title {
  font-family: var(--font-display);
  font-size: clamp(1.25rem, 2.4vw, 1.6rem);
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: var(--ink);
}

.work-row__title em {
  font-style: italic;
  color: var(--accent);
}

.work-row__role,
.work-row__year {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.04em;
  color: var(--ink-mute);
}

.work-row__year {
  text-align: right;
}

.work-row__arrow {
  font-size: 1.1rem;
  color: var(--ink-faint);
  text-align: right;
  transition:
    transform var(--duration-fast) var(--ease),
    color var(--duration-fast) ease;
}

.work-row__link:hover .work-row__arrow {
  transform: translate(2px, -2px);
  color: var(--accent);
}

.work-list__empty {
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--ink-mute);
  padding: 3rem 0;
  text-align: center;
}

.work-list__reset {
  display: inline-block;
  margin-left: 0.5rem;
  border: none;
  background: transparent;
  font: inherit;
  color: var(--ink);
  cursor: pointer;
  border-bottom: 1px solid var(--ink);
  padding-bottom: 1px;
  transition:
    color var(--duration-fast) ease,
    border-color var(--duration-fast) ease;
}

.work-list__reset:hover {
  color: var(--accent);
  border-bottom-color: var(--accent);
}

@media (max-width: 720px) {
  .work-row__link {
    grid-template-columns: 40px 1fr 60px;
    gap: 0.75rem;
    padding: 1.25rem 0.4rem;
  }
  .work-row__role,
  .work-row__year {
    grid-row: 2;
    grid-column: 2;
    text-align: left;
  }
  .work-row__role {
    grid-column: 2;
  }
  .work-row__year {
    grid-column: 3;
  }
  .work-row__arrow {
    grid-row: 1 / -1;
    align-self: center;
  }
}
</style>
