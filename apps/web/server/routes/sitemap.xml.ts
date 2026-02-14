import type { CaseStudySummary } from '@globaltechno/shared';

export default defineEventHandler(async () => {
  const config = useRuntimeConfig();
  const baseUrl = (config.public.siteUrl as string).replace(/\/$/, '');

  const staticRoutes = [
    '/',
    '/services',
    '/services/ai-agents',
    '/services/cybersecurity',
    '/services/digital-identity',
    '/services/cloud-computing',
    '/services/selective-engineering',
    '/case-studies',
    '/about',
    '/contact'
  ];
  let dynamicRoutes: string[] = [];

  try {
    const caseStudies = await $fetch<CaseStudySummary[]>(`${config.apiBase}/case-studies`);
    dynamicRoutes = caseStudies.map((item: CaseStudySummary) => `/case-studies/${item.slug}`);
  } catch {
    dynamicRoutes = [];
  }

  const urls = [...staticRoutes, ...dynamicRoutes]
    .map(
      (route) =>
        `<url><loc>${baseUrl}${route}</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>`
    )
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
});
