<script setup lang="ts">
useSeoMeta({
  title: 'Contact',
  description: 'Get in touch with Globaltechno. Share your automation objectives and we respond with an engineering-first engagement scope.',
  ogTitle: 'Contact Globaltechno'
});
</script>

<template>
  <div>
    <section class="hero section section--dark grain-overlay">
      <SharedGradientMesh variant="hero" />
      <div class="hero__inner section__inner">
        <SharedScrollReveal>
          <span class="section-label">Contact</span>
          <h1 class="hero__title">Let's Build Together</h1>
          <p class="hero__subtitle">
            Share your automation objectives, risk constraints, and integration landscape.
            We respond with an engineering-first engagement scope.
          </p>
        </SharedScrollReveal>
      </div>
    </section>

    <section class="contact section section--light">
      <div class="contact__inner section__inner">
        <div class="contact__grid">
          <SharedScrollReveal>
            <div class="contact__info">
              <h2>Get in Touch</h2>
              <p>
                Direct intake by engineering leadership. No marketing queue, no sales pitch.
                We evaluate every inquiry on technical merit.
              </p>

              <div class="contact__details">
                <div class="contact__detail">
                  <h4>Email</h4>
                  <a href="mailto:hello@globaltechno.eu">hello@globaltechno.eu</a>
                </div>
                <div class="contact__detail">
                  <h4>Location</h4>
                  <p>Tallinn, Estonia</p>
                </div>
                <div class="contact__detail">
                  <h4>Response Time</h4>
                  <p>Within 2 business days</p>
                </div>
              </div>
            </div>
          </SharedScrollReveal>

          <SharedScrollReveal :delay="200">
            <ContactForm />
          </SharedScrollReveal>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero { position: relative; padding-top: 10rem; padding-bottom: 5rem; overflow: hidden; }
.hero__inner { position: relative; z-index: 1; max-width: 720px; }
.hero__title { margin-top: 0.5rem; color: var(--color-text-on-dark); }
.hero__subtitle { margin-top: 1.25rem; font-size: 1.15rem; color: var(--color-text-muted-on-dark); line-height: 1.7; max-width: 540px; }

.contact__grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: start;
}

.contact__info h2 { color: var(--color-text-primary); margin-bottom: 1rem; }
.contact__info > p { color: var(--color-text-secondary); line-height: 1.7; max-width: 380px; }

.contact__details { display: flex; flex-direction: column; gap: 1.5rem; margin-top: 2.5rem; }
.contact__detail h4 { color: var(--color-text-primary); margin-bottom: 0.25rem; }
.contact__detail p,
.contact__detail a { color: var(--color-text-secondary); font-size: 0.95rem; }
.contact__detail a { transition: color var(--duration-fast) ease; }
.contact__detail a:hover { color: var(--color-accent-hover); }

@media (max-width: 768px) {
  .contact__grid { grid-template-columns: 1fr; gap: 3rem; }
}
</style>
