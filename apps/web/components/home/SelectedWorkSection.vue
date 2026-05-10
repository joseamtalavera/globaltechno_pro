<script setup lang="ts">
const works = [
  {
    title: 'Codewright',
    year: '01 / 2024',
    role: 'Design + build',
    summary:
      'A QA platform built around how teams really write tests: less ceremony, faster feedback, real signal in CI. Spec to production in nine weeks; now run as a live service.',
    to: '/work/codewright',
    liveUrl: 'https://codewright.co',
    status: 'Live'
  },
  {
    title: 'be-working',
    year: '02 / 2025',
    role: 'Product + web',
    summary:
      'A workplace platform for teams that don\'t want a Slack-shaped solution. Rebuilt the site, app shell, and onboarding around a single editorial idea: less surface, more signal.',
    to: '/work/be-working',
    liveUrl: 'https://be-working.com',
    status: 'Live'
  },
  {
    title: 'Globaltechno OS',
    year: '03 / 2026',
    role: 'Internal product',
    summary:
      'The platform we run our studio on: project intake, scoping, and shipping rituals as one tool. Piloting with a handful of teams before opening it up.',
    to: '/work/globaltechno-os',
    status: 'Private beta'
  }
];
</script>

<template>
  <section class="selected-work section section--light">
    <div class="selected-work__inner section__inner">
      <SharedScrollReveal>
        <div class="selected-work__head">
          <SharedKicker label="Selected work" ordinal="02" />
          <h2 class="selected-work__title text-balance">
            Things we built <em>because someone needed them</em>.
          </h2>
          <p class="selected-work__lede">
            Each one started as a problem on a call. None are products we sell off the shelf.
          </p>
        </div>
      </SharedScrollReveal>

      <div class="selected-work__list">
        <SharedScrollReveal
          v-for="(w, i) in works"
          :key="w.to"
          :delay="i * 100"
        >
          <article class="work-row">
            <NuxtLink :to="w.to" class="work-row__link">
              <div class="work-row__head">
                <span class="work-row__year">— {{ w.year }}</span>
                <span class="work-row__status">{{ w.status }}</span>
              </div>
              <h3 class="work-row__title">
                {{ w.title }}
              </h3>
              <p class="work-row__summary">{{ w.summary }}</p>
              <div class="work-row__meta">
                <span><b>Role —</b> {{ w.role }}</span>
                <span v-if="w.liveUrl">
                  <a
                    :href="w.liveUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="work-row__live"
                    @click.stop
                  >
                    {{ w.liveUrl.replace(/^https?:\/\//, '') }} <span aria-hidden="true">↗</span>
                  </a>
                </span>
              </div>
              <span class="work-row__cta">
                Open case <span class="btn__arrow" aria-hidden="true">→</span>
              </span>
            </NuxtLink>
          </article>
        </SharedScrollReveal>
      </div>

      <SharedScrollReveal>
        <div class="selected-work__foot">
          <UiButton variant="link-ink" to="/work">
            See all projects
          </UiButton>
        </div>
      </SharedScrollReveal>
    </div>
  </section>
</template>

<style scoped>
.selected-work__inner {
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
}

.selected-work__head {
  max-width: 760px;
}

.selected-work__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 4rem);
  line-height: 1.0;
  letter-spacing: -0.03em;
  margin: 0.6rem 0 0.9rem;
  color: var(--ink);
}

.selected-work__title em {
  font-style: italic;
  color: var(--accent);
}

.selected-work__lede {
  font-family: var(--font-body);
  font-size: clamp(1.05rem, 1.4vw, 1.15rem);
  color: var(--ink-mute);
  max-width: 56ch;
  line-height: 1.55;
}

.selected-work__list {
  display: flex;
  flex-direction: column;
}

.work-row {
  border-top: 1px solid var(--line);
}

.selected-work__list > :last-child .work-row {
  border-bottom: 1px solid var(--line);
}

.work-row__link {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
  gap: 0.4rem 3rem;
  padding: 2rem 0;
  text-decoration: none;
  color: var(--ink);
  transition: padding-left var(--duration-normal) var(--ease);
}

.work-row__link:hover {
  padding-left: 0.75rem;
}

.work-row__head {
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink-faint);
}

.work-row__status {
  color: var(--accent);
}

.work-row__title {
  grid-column: 1;
  font-family: var(--font-display);
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  line-height: 1.0;
  letter-spacing: -0.03em;
  color: var(--ink);
  margin: 0;
}

.work-row__summary {
  grid-column: 2;
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: var(--ink-mute);
  line-height: 1.55;
  margin: 0;
  align-self: end;
}

.work-row__meta {
  grid-column: 1 / -1;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.04em;
  color: var(--ink-mute);
  margin-top: 0.75rem;
}

.work-row__meta b {
  color: var(--ink);
  font-weight: 500;
}

.work-row__live {
  color: var(--ink);
  text-decoration: none;
  border-bottom: 1px solid var(--line);
  transition: border-color var(--duration-fast) ease, color var(--duration-fast) ease;
}

.work-row__live:hover {
  color: var(--accent);
  border-bottom-color: var(--accent);
}

.work-row__cta {
  grid-column: 2;
  justify-self: end;
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--ink);
  margin-top: 0.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

.work-row__link:hover .btn__arrow {
  transform: translate(2px, -2px);
}

.btn__arrow {
  display: inline-block;
  transition: transform 240ms var(--ease);
}

.selected-work__foot {
  display: flex;
  justify-content: flex-end;
}

@media (max-width: 820px) {
  .work-row__link {
    grid-template-columns: 1fr;
    gap: 0.4rem;
  }
  .work-row__title,
  .work-row__summary,
  .work-row__cta {
    grid-column: 1;
    justify-self: start;
  }
  .work-row__cta {
    margin-top: 0.5rem;
  }
  .selected-work__foot {
    justify-content: flex-start;
  }
}
</style>
