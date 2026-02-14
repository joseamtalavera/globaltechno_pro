export interface CaseStudySummary {
  slug: string;
  title: string;
  summary: string;
  industry: string;
  tags: string[];
  publishedAt: string;
}

export interface CaseStudyDetail extends CaseStudySummary {
  challenge: string;
  approach: string;
  outcome: string;
}
