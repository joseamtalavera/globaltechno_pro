import { test, expect } from '@playwright/test';

test('smoke routes', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toContainText('We Build AI Agents That Work');

  await page.goto('/services');
  await expect(page.locator('h1')).toContainText('What We Build');

  await page.goto('/case-studies');
  await expect(page.locator('h1')).toContainText('Case Studies');

  await page.goto('/contact');
  await expect(page.locator('h1')).toContainText("Let's Build Together");

  await page.goto('/about');
  await expect(page.locator('h1')).toContainText('We Engineer the Future');

  await page.goto('/services/ai-agents');
  await expect(page.locator('h1')).toContainText('AI Agents');

  const healthResponse = await page.request.get('/api/health');
  expect(healthResponse.status()).not.toBe(404);
});
