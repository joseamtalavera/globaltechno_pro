import {
  caseStudyDetailSchema,
  caseStudySummarySchema,
  type CaseStudyDetail,
  type CaseStudySummary,
  type NewsletterSubscribeResponse
} from '@globaltechno/shared';

export function useApi() {
  const config = useRuntimeConfig();

  const listCaseStudies = async (): Promise<CaseStudySummary[]> => {
    const data = await $fetch<unknown[]>(`${config.public.apiBase}/case-studies`);
    return data.map((item: unknown) => caseStudySummarySchema.parse(item));
  };

  const getCaseStudy = async (slug: string): Promise<CaseStudyDetail> => {
    const data = await $fetch<unknown>(`${config.public.apiBase}/case-studies/${slug}`);
    return caseStudyDetailSchema.parse(data);
  };

  const subscribeNewsletter = async (email: string): Promise<NewsletterSubscribeResponse> => {
    return $fetch<NewsletterSubscribeResponse>(`${config.public.apiBase}/newsletter`, {
      method: 'POST',
      body: { email, consent: true }
    });
  };

  return {
    listCaseStudies,
    getCaseStudy,
    subscribeNewsletter
  };
}
