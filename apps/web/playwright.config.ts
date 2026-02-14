import { defineConfig } from '@playwright/test';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  testDir: './test/e2e',
  use: {
    baseURL: process.env.E2E_BASE_URL ?? 'http://localhost:3010'
  },
  webServer: {
    command: 'pnpm dev --port 3010',
    port: 3010,
    reuseExistingServer: false,
    cwd: currentDir
  }
});
