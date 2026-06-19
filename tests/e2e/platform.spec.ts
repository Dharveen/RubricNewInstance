import { test, expect } from '@playwright/test';

test.describe('FL-05: Platform Validation', () => {
  test('Verify Platform page and metrics', async ({ page }) => {
    await page.goto('/platform');
    await expect(page.locator('h1')).toContainText('Architectural Control.');
    await expect(page.getByText('99.99%')).toBeVisible();
    await expect(page.getByText('AES-256')).toBeVisible();
    await expect(page.getByRole('button', { name: 'REQUEST ACCESS' })).toBeVisible();
  });
});
