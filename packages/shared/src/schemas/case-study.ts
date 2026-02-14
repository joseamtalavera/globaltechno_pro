import { z } from 'zod';

export const caseStudySummarySchema = z.object({
  slug: z.string(),
  title: z.string(),
  summary: z.string(),
  industry: z.string(),
  tags: z.array(z.string()),
  publishedAt: z.string()
});

export const caseStudyDetailSchema = caseStudySummarySchema.extend({
  challenge: z.string(),
  approach: z.string(),
  outcome: z.string()
});

export type CaseStudySummarySchema = z.infer<typeof caseStudySummarySchema>;
export type CaseStudyDetailSchema = z.infer<typeof caseStudyDetailSchema>;
