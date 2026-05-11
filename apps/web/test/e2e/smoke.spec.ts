import { test, expect } from '@playwright/test';

test('smoke routes', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toContainText('Companies bring problems');

  await page.goto('/approach');
  await expect(page.locator('h1')).toContainText('Requirements Engineering');

  await page.goto('/work');
  await expect(page.locator('h1')).toContainText('Selected work');

  await page.goto('/work/be-working');
  await expect(page.locator('h1')).toContainText('be-working');

  await page.goto('/work/codewright');
  await expect(page.locator('h1')).toContainText('Codewright');

  await page.goto('/about');
  await expect(page.locator('h1')).toContainText("don't fit a template");

  await page.goto('/brief');
  await expect(page.locator('h1')).toContainText("Tell us what's broken");

  // Legacy redirects
  await page.goto('/contact');
  await expect(page).toHaveURL(/\/brief$/);

  await page.goto('/solutions');
  await expect(page).toHaveURL(/\/approach$/);

  await page.goto('/services');
  await expect(page).toHaveURL(/\/approach$/);

  await page.goto('/case-studies');
  await expect(page).toHaveURL(/\/work$/);

  const healthResponse = await page.request.get('/api/health');
  expect(healthResponse.status()).not.toBe(404);
});
