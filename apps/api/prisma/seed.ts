import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const caseStudies = [
  {
    slug: 'identity-fabric-for-regulated-fintech',
    title: 'Identity Fabric for a Regulated Fintech Operator',
    summary:
      'Designed and deployed a verifiable identity layer with auditable trust chains across customer onboarding and transaction controls.',
    industry: 'Financial Services',
    challenge:
      'The client needed strong identity assurance across multiple jurisdictions while reducing onboarding friction and maintaining regulator traceability.',
    approach:
      'Globaltechno implemented a layered digital identity architecture with cryptographic attestation, policy-driven risk scoring, and secure audit pipelines on AWS.',
    outcome:
      'Onboarding verification latency dropped by 37%, control evidence preparation was reduced to hours instead of days, and the platform passed external compliance reviews.',
    tags: ['Digital Identity', 'Trust Systems', 'AWS', 'Compliance'],
    publishedAt: new Date('2025-11-20T10:00:00.000Z')
  },
  {
    slug: 'autonomous-soc-workflow-hardening',
    title: 'Autonomous SOC Workflow Hardening for a SaaS Platform',
    summary:
      'Built an agentic automation layer for triage, enrichment, and containment orchestration integrated with existing SOC operations.',
    industry: 'B2B SaaS',
    challenge:
      'Security analysts were overloaded by repetitive alert handling and lacked deterministic containment pathways for high-confidence incidents.',
    approach:
      'Globaltechno delivered event-driven AI agents with explicit guardrails, human approval checkpoints, and immutable incident timelines in a zero-trust architecture.',
    outcome:
      'Mean-time-to-triage improved by 52%, false-positive handling effort declined materially, and incident documentation quality improved across all severity levels.',
    tags: ['AI Agents', 'Cybersecurity', 'Automation', 'Zero Trust'],
    publishedAt: new Date('2026-01-12T08:30:00.000Z')
  }
];

async function main(): Promise<void> {
  for (const caseStudy of caseStudies) {
    await prisma.caseStudy.upsert({
      where: { slug: caseStudy.slug },
      update: caseStudy,
      create: caseStudy
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error: unknown) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
