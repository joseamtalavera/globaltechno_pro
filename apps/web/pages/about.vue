<script setup lang="ts">
useSeoMeta({
  title: 'About',
  description:
    'Globaltechno is a two-person engineering studio in Madrid + Buenos Aires. We build full-stack apps, testing, and software architecture today; web3, cybersecurity, and agentic systems next.',
  ogTitle: 'About — Globaltechno'
});

interface Person {
  initial: string;
  name: string;
  role: string;
  bio: string;
}

const team: Person[] = [
  {
    initial: 'CEO',
    name: 'Founder & CEO',
    role: 'Madrid · Strategy, scoping, client work',
    bio:
      'Twenty years of building product and software companies across Europe and Latin America. Runs the studio, scopes engagements, and stays on every project from problem call through hand-off. Believes the first working version is the best brief.'
  },
  {
    initial: 'CTO',
    name: 'Co-founder & CTO',
    role: 'Buenos Aires · Architecture, testing, AI',
    bio:
      'Engineering lead across full-stack, cloud infrastructure, and emerging AI systems. Owns the technical bar — what we ship, how we test it, and the architecture decisions clients can defend three years out. Tests before stories.'
  }
];

const principles = [
  { num: '01', title: 'Smaller, sooner.',     body: 'The first working version is the best brief. Anything we can ship in week two is worth more than a month of slides.' },
  { num: '02', title: 'Boring on purpose.',   body: 'We pick technology that\'s been load-bearing for a decade unless there\'s a real reason not to. Year three is a feature.' },
  { num: '03', title: 'One throat to choke.', body: 'One senior on the project, end to end. No agency layers, no junior sponge.' },
  { num: '04', title: 'Stop after any sprint.', body: 'You can pause or end at any sprint boundary. Lock-in is a smell, not a feature.' },
  { num: '05', title: 'Tests before stories.', body: 'If we can\'t write a failing test for the bug, we don\'t really understand the bug yet.' },
  { num: '06', title: 'No retainers.',         body: 'We charge for the thing we ship, not the time we spend. Misalignment is invisible until it isn\'t.' }
];

const languages = ['TypeScript', 'JavaScript', 'Python', 'SQL', 'Bash', 'Solidity'];
const runtimes = ['Nuxt 3', 'Next.js', 'NestJS', 'Node.js', 'Vite', 'Playwright'];
const aws = [
  'ECS Fargate',
  'Application Load Balancer',
  'RDS PostgreSQL',
  'CloudFront',
  'S3',
  'Route 53 + ACM',
  'Secrets Manager / SSM',
  'CloudWatch',
  'IAM',
  'ECR'
];
const iac = ['Terraform', 'GitHub Actions', 'Docker'];
</script>

<template>
  <div>
    <section class="page-head section section--light">
      <div class="page-head__inner section__inner section__inner--narrow">
        <SharedScrollReveal>
          <SharedKicker label="About" ordinal="00" />
          <h1 class="page-head__title text-balance">
            Built for problems<br>that don't fit a <em>template</em>.
          </h1>
          <p class="page-head__lede">
            A two-person engineering studio in Madrid + Buenos Aires.
            Full-stack apps, testing, and software architecture today.
            Web3, cybersecurity, and agentic systems on the way.
          </p>
        </SharedScrollReveal>
      </div>
    </section>

    <!-- Story -->
    <section class="story section section--light">
      <div class="story__inner section__inner section__inner--narrow">
        <SharedScrollReveal>
          <div class="story__grid">
            <div class="story__head">
              <SharedKicker label="The studio" ordinal="01" />
              <h2 class="story__heading text-balance">
                We started Globaltechno because<br>
                <em>good engineering</em> kept getting<br>
                outsourced to the wrong people.
              </h2>
            </div>
            <div class="story__body">
              <p>
                Two founders, one CEO in Madrid and one CTO in Buenos Aires,
                pooled twenty years of building real software for real companies
                across Europe and Latin America. We'd watched too many
                six-figure briefs land with agencies who shipped slides instead
                of systems.
              </p>
              <p>
                Globaltechno is the studio we wanted to hire when we were the
                client. One senior on every project, end to end. Code we'd
                stake our names on. A brief that doesn't bury the actual problem.
                No retainers, no lock-in — you can stop after any sprint.
              </p>
              <p>
                Today the lanes are full-stack, testing, and architecture.
                Tomorrow they're web3, cybersecurity, and agents. Same
                two people, same bar — held loosely, applied seriously.
              </p>
            </div>
          </div>
        </SharedScrollReveal>
      </div>
    </section>

    <!-- Team — exactly 2 -->
    <section class="people section section--alt">
      <div class="people__inner section__inner section__inner--narrow">
        <SharedScrollReveal>
          <div class="people__head">
            <SharedKicker label="Two people" ordinal="02" />
            <h2 class="people__heading text-balance">
              The studio is two people.<br>
              <em>That's the whole point.</em>
            </h2>
            <p class="people__lede">
              No agency layers, no project manager translating between you and
              the engineers. You email us, you get one of us back.
            </p>
          </div>
        </SharedScrollReveal>

        <div class="people__grid">
          <SharedScrollReveal
            v-for="(p, i) in team"
            :key="p.initial"
            :delay="i * 120"
          >
            <article class="person">
              <div class="person__photo" aria-hidden="true">
                <span class="person__initial">{{ p.initial }}</span>
              </div>
              <div class="person__body">
                <h3 class="person__name">{{ p.name }}</h3>
                <p class="person__role">{{ p.role }}</p>
                <p class="person__bio">{{ p.bio }}</p>
              </div>
            </article>
          </SharedScrollReveal>
        </div>
      </div>
    </section>

    <!-- Studio stack & AWS -->
    <section class="studio-stack section section--light">
      <div class="studio-stack__inner section__inner section__inner--narrow">
        <SharedScrollReveal>
          <SharedKicker label="What we run on" ordinal="03" />
          <h2 class="studio-stack__heading text-balance">
            <em>Boring on purpose.</em><br>
            Load-bearing under deadlines.
          </h2>
          <p class="studio-stack__lede">
            Our default stack is conservative — the languages, runtimes, and AWS
            services we'll keep maintaining in three years. We deviate when the
            problem genuinely needs it.
          </p>
        </SharedScrollReveal>

        <div class="studio-stack__cols">
          <SharedScrollReveal>
            <div class="studio-stack__col">
              <h4 class="studio-stack__col-heading">Languages</h4>
              <ul class="studio-stack__chips">
                <li v-for="t in languages" :key="t" class="studio-stack__chip">{{ t }}</li>
              </ul>
            </div>
          </SharedScrollReveal>
          <SharedScrollReveal :delay="80">
            <div class="studio-stack__col">
              <h4 class="studio-stack__col-heading">Runtimes &amp; tools</h4>
              <ul class="studio-stack__chips">
                <li v-for="t in runtimes" :key="t" class="studio-stack__chip">{{ t }}</li>
              </ul>
            </div>
          </SharedScrollReveal>
          <SharedScrollReveal :delay="160">
            <div class="studio-stack__col">
              <h4 class="studio-stack__col-heading">AWS</h4>
              <ul class="studio-stack__chips">
                <li v-for="t in aws" :key="t" class="studio-stack__chip">{{ t }}</li>
              </ul>
            </div>
          </SharedScrollReveal>
          <SharedScrollReveal :delay="240">
            <div class="studio-stack__col">
              <h4 class="studio-stack__col-heading">Infra-as-code</h4>
              <ul class="studio-stack__chips">
                <li v-for="t in iac" :key="t" class="studio-stack__chip">{{ t }}</li>
              </ul>
            </div>
          </SharedScrollReveal>
        </div>

        <SharedScrollReveal>
          <p class="studio-stack__arch">
            <strong>Reference architecture.</strong> ALB → ECS Fargate (web + api) →
            RDS PostgreSQL. Images in ECR. Logs to CloudWatch. Secrets in
            Secrets Manager. Single-region by default, multi-region when the
            problem needs it. Provisioned by Terraform, deployed by GitHub
            Actions.
          </p>
        </SharedScrollReveal>
      </div>
    </section>

    <!-- Principles -->
    <section class="principles section section--light">
      <div class="principles__inner section__inner section__inner--narrow">
        <SharedScrollReveal>
          <SharedKicker label="Six things we believe" ordinal="04" />
          <h2 class="principles__heading text-balance">
            How we make every <em>decision</em> on a project.
          </h2>
        </SharedScrollReveal>

        <div class="principles__grid">
          <SharedScrollReveal
            v-for="(p, i) in principles"
            :key="p.num"
            :delay="i * 80"
          >
            <article class="principle">
              <span class="principle__num">{{ p.num }}</span>
              <div>
                <h3 class="principle__title">{{ p.title }}</h3>
                <p class="principle__body">{{ p.body }}</p>
              </div>
            </article>
          </SharedScrollReveal>
        </div>
      </div>
    </section>

    <!-- Where we are -->
    <section class="where section section--alt">
      <div class="where__inner section__inner section__inner--narrow">
        <SharedScrollReveal>
          <SharedKicker label="Where we are" ordinal="05" />
          <h2 class="where__heading text-balance">
            <em>Madrid</em> &amp; <em>Buenos Aires</em>.<br>
            Working across the EU and LATAM.
          </h2>
          <p class="where__body">
            Globaltechno OÜ is registered in Estonia. We work remote-first with
            clients across Europe and the Americas, and we run on EU
            infrastructure by default. If you're navigating NIS2, GDPR, or
            eIDAS 2.0, you're already speaking our language.
          </p>
          <p class="where__body">
            Reach us at
            <a href="mailto:hello@globaltechno.eu" class="where__email">hello@globaltechno.eu</a>.
          </p>
        </SharedScrollReveal>
      </div>
    </section>

    <HomeClosingCtaSection />
  </div>
</template>

<style scoped>
/* ============================================================ Page head */
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
  max-width: 60ch;
}

/* ============================================================ Story */
.story__inner {
  max-width: var(--max-width-narrow);
  margin: 0 auto;
}

.story__grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: clamp(2rem, 5vw, 4rem);
  align-items: start;
}

.story__head {
  position: sticky;
  top: 5rem;
  align-self: start;
}

.story__heading {
  font-family: var(--font-display);
  font-size: clamp(1.85rem, 3.5vw, 2.6rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin: 0.5rem 0 0;
  color: var(--ink);
}

.story__heading em {
  font-style: italic;
  color: var(--accent);
}

.story__body p {
  font-family: var(--font-body);
  font-size: 1.075rem;
  line-height: 1.7;
  color: var(--ink);
  margin: 0 0 1.4rem;
}

.story__body p:last-child {
  margin-bottom: 0;
}

@media (max-width: 820px) {
  .story__grid { grid-template-columns: 1fr; gap: 2rem; }
  .story__head { position: static; }
}

/* ============================================================ People */
.people__inner {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: var(--max-width-narrow);
  margin: 0 auto;
}

.people__heading {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3.75rem);
  line-height: 1;
  letter-spacing: -0.03em;
  margin: 0.6rem 0 1rem;
  color: var(--ink);
}

.people__heading em {
  font-style: italic;
  color: var(--accent);
}

.people__lede {
  font-family: var(--font-body);
  font-size: clamp(1.05rem, 1.4vw, 1.15rem);
  color: var(--ink-mute);
  max-width: 56ch;
  line-height: 1.55;
}

.people__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.person {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1.6rem;
  background: var(--paper-soft);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
}

.person__photo {
  aspect-ratio: 1 / 1;
  border-radius: var(--radius-lg);
  background:
    radial-gradient(ellipse at 30% 30%, var(--accent-wash), transparent 55%),
    var(--paper-deep);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.person__photo::after {
  content: '';
  position: absolute;
  inset: 12%;
  border: 1px dashed var(--line);
  border-radius: calc(var(--radius-lg) * 0.7);
  pointer-events: none;
}

.person__initial {
  font-family: var(--font-display);
  font-style: italic;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: var(--accent);
  letter-spacing: -0.02em;
  z-index: 1;
}

.person__name {
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 2.2vw, 1.75rem);
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: var(--ink);
  margin: 0 0 0.35rem;
}

.person__role {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-mute);
  margin: 0 0 0.85rem;
}

.person__bio {
  font-family: var(--font-body);
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--ink-2);
  margin: 0;
}

@media (max-width: 720px) {
  .people__grid { grid-template-columns: 1fr; }
}

/* ============================================================ Studio stack */
.studio-stack__inner {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  max-width: var(--max-width-narrow);
  margin: 0 auto;
}

.studio-stack__heading {
  font-family: var(--font-display);
  font-size: clamp(1.85rem, 4vw, 2.85rem);
  line-height: 1.05;
  letter-spacing: -0.025em;
  margin: 0.6rem 0 1rem;
  color: var(--ink);
}

.studio-stack__heading em {
  font-style: italic;
  color: var(--accent);
}

.studio-stack__lede {
  font-family: var(--font-body);
  font-size: clamp(1rem, 1.4vw, 1.1rem);
  color: var(--ink-mute);
  max-width: 60ch;
  line-height: 1.55;
}

.studio-stack__cols {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem 2.5rem;
}

.studio-stack__col-heading {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-faint);
  margin: 0 0 0.85rem;
  font-weight: 500;
}

.studio-stack__chips {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.studio-stack__chip {
  font-family: var(--font-mono);
  font-size: 0.74rem;
  letter-spacing: 0.04em;
  padding: 0.4rem 0.75rem;
  border: 1px solid var(--line);
  border-radius: var(--radius-full);
  color: var(--ink);
  background: var(--paper-soft);
}

.studio-stack__arch {
  font-family: var(--font-body);
  font-size: 1.025rem;
  line-height: 1.7;
  color: var(--ink);
  background: var(--paper-soft);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  padding: 1.25rem 1.5rem;
  margin: 0;
  max-width: 70ch;
}

.studio-stack__arch strong {
  font-weight: 500;
  color: var(--ink);
  display: inline-block;
  margin-right: 0.4rem;
}

@media (max-width: 720px) {
  .studio-stack__cols { grid-template-columns: 1fr; gap: 1.75rem; }
}

/* ============================================================ Principles */
.principles__inner {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: var(--max-width-narrow);
  margin: 0 auto;
}

.principles__heading {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1;
  letter-spacing: -0.03em;
  margin: 0.6rem 0 0;
  color: var(--ink);
}

.principles__heading em {
  font-style: italic;
  color: var(--accent);
}

.principles__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.principle {
  display: grid;
  grid-template-columns: 4rem 1fr;
  gap: 1rem;
  padding: 1.6rem 1.5rem;
  background: var(--paper-soft);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
}

.principle__num {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 2.25rem;
  line-height: 1;
  color: var(--accent);
}

.principle__title {
  font-family: var(--font-display);
  font-size: 1.5rem;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: var(--ink);
  margin: 0 0 0.4rem;
}

.principle__body {
  font-family: var(--font-body);
  font-size: 0.92rem;
  color: var(--ink-mute);
  line-height: 1.55;
  margin: 0;
}

@media (max-width: 720px) {
  .principles__grid { grid-template-columns: 1fr; }
  .principle { grid-template-columns: 3rem 1fr; }
}

/* ============================================================ Where */
.where__inner {
  max-width: var(--max-width-narrow);
  margin: 0 auto;
}

.where__heading {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3.75rem);
  line-height: 1.0;
  letter-spacing: -0.03em;
  margin: 0.6rem 0 1.5rem;
  color: var(--ink);
}

.where__heading em {
  font-style: italic;
  color: var(--accent);
}

.where__body {
  font-family: var(--font-body);
  font-size: 1.075rem;
  line-height: 1.7;
  color: var(--ink);
  max-width: 64ch;
  margin: 0 0 1rem;
}

.where__email {
  color: var(--ink);
  border-bottom: 1px solid var(--ink);
  padding-bottom: 1px;
  transition: color var(--duration-fast) ease, border-color var(--duration-fast) ease;
}

.where__email:hover {
  color: var(--accent);
  border-bottom-color: var(--accent);
}
</style>
