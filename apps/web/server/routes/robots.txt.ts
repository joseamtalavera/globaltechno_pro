export default defineEventHandler(() => {
  return [
    'User-agent: *',
    'Allow: /',
    'Disallow: /api/',
    'Disallow: /_nuxt/',
    'Disallow: /server/',
    'Sitemap: https://globaltechno.eu/sitemap.xml'
  ].join('\n');
});
