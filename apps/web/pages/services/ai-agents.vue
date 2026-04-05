<script setup lang="ts">
useSeoMeta({
  title: 'AI Agents & Automation',
  description: 'Autonomous AI agents that execute workflows end-to-end — connected, orchestrated, and always on.',
  ogTitle: 'AI Agents & Automation | Globaltechno',
  ogType: 'website'
});

// Pillar icons (inline SVG to avoid external deps)
const pillars = [
  {
    title: 'Autonomous Agents',
    description: 'Purpose-built agents that execute complete workflows without human intervention — with bounded autonomy and full auditability.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="3"/><circle cx="9" cy="10" r="1"/><circle cx="15" cy="10" r="1"/><path d="M8 15h8"/></svg>'
  },
  {
    title: 'Unified Platform',
    description: 'One dashboard for every workflow. Real-time telemetry, performance tracking, and continuous optimization loops.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>'
  },
  {
    title: 'Seamless Integration',
    description: 'Connect to your existing stack — databases, APIs, CRMs, and internal tools — through production-grade connectors.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="12" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="18" cy="18" r="3"/><path d="M9 12l6-6M9 12l6 6"/></svg>'
  },
  {
    title: 'Enterprise Safety',
    description: 'Policy gates, confidence thresholds, and human-in-the-loop approval for high-stakes actions. Built for compliance.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 3v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z"/><path d="M9 12l2 2 4-4"/></svg>'
  }
];

const terminalExamples = [
  {
    prompt: 'Process all pending invoices from Q4',
    steps: [
      'Scanning invoice queue',
      'Validating data against purchase orders',
      'Running compliance checks',
      'Submitting 47 invoices for payment'
    ]
  },
  {
    prompt: 'Generate weekly performance report',
    steps: [
      'Aggregating metrics from 12 sources',
      'Identifying anomalies and trends',
      'Drafting executive summary',
      'Publishing to distribution list'
    ]
  },
  {
    prompt: 'Review new customer applications',
    steps: [
      'Loading 23 pending applications',
      'Cross-referencing credit and KYC data',
      'Scoring against approval criteria',
      'Escalating 3 cases for manual review'
    ]
  }
];

const oldItems = [
  'Manual repetitive tasks consume your team',
  'Disconnected tools create data silos',
  'Human errors in high-volume processes',
  'No visibility into operational bottlenecks',
  'Slow to scale as the business grows'
];

const newItems = [
  'Autonomous agents execute end-to-end',
  'Unified platform connects every workflow',
  'Zero-error execution with audit trails',
  'Real-time telemetry on every action',
  'Scales horizontally without friction'
];

const stats = [
  { value: 10, suffix: 'x', label: 'Faster process execution' },
  { value: 99, suffix: '.9%', label: 'Uptime SLA' },
  { value: 24, suffix: '/7', label: 'Always-on operations' }
];
</script>

<template>
  <div>
    <!-- Section 1: Hero -->
    <HomeAgentsHero
      label="Our Flagship Service"
      heading="AI Agents &amp; Automation"
      heading-accent="Built to Execute"
      body="Autonomous agents that execute workflows, make decisions, and learn continuously. Built for enterprises that need reliability, control, and measurable outcomes."
      primary-cta="Get Started"
      primary-cta-href="/contact"
      secondary-cta="Explore Platform"
      secondary-cta-href="/services"
    />

    <!-- Section 2: Terminal Demo -->
    <HomeTerminalDemo
      label="In Action"
      heading="Watch Agents Execute"
      subheading="Real workflows, executed autonomously. No scripts, no human intervention — just outcomes."
      :examples="terminalExamples"
    />

    <!-- Section 3: Overview (4 Pillars) -->
    <HomeAgentsOverview
      label="How It Works"
      heading="Intelligence That"
      heading-accent="Executes"
      subheading="Four foundational pillars that turn AI potential into operational reality."
      :pillars="pillars"
    />

    <!-- Section 4: Orchestrator -->
    <HomeOrchestratorSection
      label="Architecture"
      heading="A System, Not a Script"
      subheading="Agents coordinate through a central orchestrator — routing tasks, managing context, and escalating when needed."
      center-label="CORE"
    />

    <!-- Section 5: Comparison -->
    <HomeComparisonGrid
      label="The Shift"
      heading="From Friction to Flow"
      old-title="Before"
      :old-items="oldItems"
      new-title="After"
      :new-items="newItems"
    />

    <!-- Section 6: Stats -->
    <HomeStatsSection
      label="Results"
      heading="Built for Outcomes"
      :stats="stats"
    />

    <!-- Section 7: Final CTA -->
    <HomeFinalCTASection
      heading="Ready to Deploy Your First Agent?"
      body="Start with a single workflow. Scale to the enterprise. Our team guides you from discovery to production."
      cta-label="Book a Discovery Call"
      cta-href="/contact"
    />
  </div>
</template>

<style scoped>
/* Page-level styles (if any) go here */
</style>
