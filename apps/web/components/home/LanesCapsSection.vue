<script setup lang="ts">
interface Lane {
  id: string;
  num: string;
  status: 'now' | 'coming';
  title: string;
  desc: string;
  kicker: string;
  iconPaths: string;
}

interface Props {
  showHead?: boolean;
  showFooterLink?: boolean;
}

withDefaults(defineProps<Props>(), {
  showHead: true,
  showFooterLink: true
});

const lanes: Lane[] = [
  {
    id: 'web',
    num: '01 / Now',
    status: 'now',
    title: 'Web platforms',
    desc:
      'End-to-end product engineering — Next/Nuxt front, Node/Python back, infra you can actually maintain.',
    kicker: 'Stack — TS · Nuxt · Postgres',
    iconPaths:
      '<rect x="3" y="6" width="30" height="22" rx="2"/><path d="M3 12h30M9 18h12M9 22h6"/>'
  },
  {
    id: 'testing',
    num: '02 / Now',
    status: 'now',
    title: 'Test infrastructure',
    desc:
      'QA platforms, harnesses and pipelines built around how your team actually ships. Codewright.co is one of ours.',
    kicker: 'Stack — Playwright · k6 · CI',
    iconPaths:
      '<path d="M6 30V12l12-6 12 6v18"/><path d="M6 18l12 6 12-6M18 24v6"/><circle cx="18" cy="12" r="2.4" fill="currentColor"/>'
  },
  {
    id: 'architecture',
    num: '03 / Now',
    status: 'now',
    title: 'System architecture',
    desc:
      'Boring choices made well. Service boundaries, data shapes and on-call ergonomics that survive year three.',
    kicker: 'Stack — Postgres · Redis · K8s',
    iconPaths:
      '<rect x="4" y="4" width="12" height="12" rx="1.5"/><rect x="20" y="4" width="12" height="12" rx="1.5"/><rect x="4" y="20" width="12" height="12" rx="1.5"/><rect x="20" y="20" width="12" height="12" rx="1.5"/><path d="M16 10h4M10 16v4M26 16v4M16 26h4"/>'
  },
  {
    id: 'web3',
    num: '04 / Next',
    status: 'coming',
    title: 'Web3 & on-chain',
    desc:
      'Practical contracts, signing flows and bridges. Skipping the hype — building the parts that need to be on-chain.',
    kicker: 'Design partners — open',
    iconPaths:
      '<path d="M18 4l14 8v12l-14 8L4 24V12z"/><path d="M18 4v28M4 12l14 8 14-8"/>'
  },
  {
    id: 'cyber',
    num: '05 / Next',
    status: 'coming',
    title: 'Cybersecurity',
    desc:
      'Threat modelling, audits and hardening for product teams. Not a checklist — a defensible posture.',
    kicker: 'Design partners — open',
    iconPaths:
      '<path d="M18 4l12 5v9c0 7-5 13-12 14C11 31 6 25 6 18V9l12-5z"/><path d="M13 18l4 4 7-7"/>'
  },
  {
    id: 'agents',
    num: '06 / Next',
    status: 'coming',
    title: 'AI agents',
    desc:
      'Agents that actually run inside your stack — not chatbots. Tool use, evaluations and on-call hand-offs.',
    kicker: 'Design partners — open',
    iconPaths:
      '<circle cx="18" cy="14" r="6"/><path d="M8 30c0-5 4-8 10-8s10 3 10 8"/><path d="M18 8v-3M12 11l-2-2M24 11l2-2"/>'
  }
];
</script>

<template>
  <section class="caps section section--light">
    <div class="caps__inner section__inner section__inner--narrow">
      <SharedScrollReveal v-if="showHead">
        <div class="caps__head">
          <SharedKicker label="What we do" ordinal="01" />
          <h2 class="caps__title text-balance">
            Three lanes today. <em>Three more</em> on the way.
          </h2>
          <p class="caps__lede">
            Six lanes — three live, three opening to design partners next.
          </p>
        </div>
      </SharedScrollReveal>

      <div class="caps__grid">
        <SharedScrollReveal
          v-for="(lane, i) in lanes"
          :key="lane.id"
          :delay="i * 60"
        >
          <article
            :id="lane.id"
            class="cap"
            :class="{ 'cap--coming': lane.status === 'coming' }"
          >
            <span class="cap__tag">{{ lane.status === 'now' ? 'Live' : 'Coming' }}</span>
            <span class="cap__num">{{ lane.num }}</span>

            <div class="cap__icon" aria-hidden="true">
              <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" v-html="lane.iconPaths" />
            </div>

            <h3 class="cap__title">{{ lane.title }}</h3>
            <p class="cap__desc">{{ lane.desc }}</p>

            <span class="cap__kicker">{{ lane.kicker }}</span>
          </article>
        </SharedScrollReveal>
      </div>

      <SharedScrollReveal v-if="showFooterLink">
        <div class="caps__foot">
          <UiButton variant="link-ink" to="/approach">
            See the full approach
          </UiButton>
        </div>
      </SharedScrollReveal>
    </div>
  </section>
</template>

<style scoped>
.caps__inner {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: var(--max-width-narrow);
  margin: 0 auto;
}

.caps__head {
  max-width: 760px;
}

.caps__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 4rem);
  line-height: 1.0;
  letter-spacing: -0.03em;
  margin: 0.6rem 0 1rem;
  color: var(--ink);
}

.caps__title em {
  font-style: italic;
  color: var(--accent);
}

.caps__lede {
  font-family: var(--font-body);
  font-size: clamp(1.05rem, 1.4vw, 1.15rem);
  color: var(--ink-mute);
  max-width: 56ch;
  line-height: 1.55;
}

.caps__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  border-top: 1px solid var(--line);
  border-left: 1px solid var(--line);
}

.cap {
  position: relative;
  padding: clamp(1.6rem, 3vw, 2.4rem);
  background: var(--paper);
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  overflow: hidden;
  transition: background 360ms var(--ease);
}

.cap:hover {
  background: var(--paper-soft);
}

.cap__num {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--ink-mute);
  letter-spacing: 0.1em;
  display: inline-block;
}

.cap__icon {
  width: 36px;
  height: 36px;
  margin-top: 0.4rem;
  color: var(--ink);
}

.cap__icon svg {
  width: 100%;
  height: 100%;
  stroke-width: 1.2;
}

.cap__title {
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 2.6vw, 2.2rem);
  line-height: 1.1;
  letter-spacing: -0.015em;
  margin: 1.4rem 0 0.6rem;
  color: var(--ink);
}

.cap__desc {
  color: var(--ink-mute);
  font-size: 14.5px;
  line-height: 1.6;
  margin: 0 0 2.4rem;
  max-width: 32ch;
}

.cap__kicker {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-mute);
}

.cap__tag {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-mute);
  padding: 4px 8px;
  border: 1px solid var(--line);
  border-radius: var(--radius-full);
  background: var(--paper);
}

.cap--coming .cap__title,
.cap--coming .cap__desc,
.cap--coming .cap__num,
.cap--coming .cap__kicker {
  color: var(--ink-faint);
}

.cap--coming .cap__icon {
  color: var(--ink-faint);
}

.cap--coming .cap__tag {
  color: var(--accent);
  border-color: color-mix(in oklch, var(--accent) 40%, var(--paper));
  background: var(--accent-wash);
}

.cap--coming::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    135deg,
    transparent 0 7px,
    color-mix(in oklch, var(--ink) 4%, transparent) 7px 8px
  );
  pointer-events: none;
  opacity: 0.7;
}

.caps__foot {
  display: flex;
  justify-content: flex-end;
  padding-top: 0.5rem;
}

@media (max-width: 980px) {
  .caps__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .caps__grid { grid-template-columns: 1fr; }
  .caps__foot { justify-content: flex-start; }
}
</style>
