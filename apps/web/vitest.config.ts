import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'happy-dom',
    include: ['test/**/*.spec.ts'],
    exclude: ['test/e2e/**/*.spec.ts']
  }
});
