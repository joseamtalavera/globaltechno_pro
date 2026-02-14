export default defineEventHandler(async () => {
  const config = useRuntimeConfig();

  try {
    const response = await $fetch(`${config.apiBase}/health`);
    return response;
  } catch {
    throw createError({ statusCode: 503, statusMessage: 'API health check failed' });
  }
});
