import { test, expect } from '@playwright/test';

test.describe('FL-07: Mobile / Responsive Navigation', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('Verify mobile menu trigger and links', async ({ page }) => {
    await page.goto('/');
    const mobileMenuTrigger = page.locator('button').filter({ has: page.locator('svg') }).last();
    await expect(mobileMenuTrigger).toBeVisible();
    await mobileMenuTrigger.click();
    await expect(page.getByRole('link', { name: 'Platform' })).toBeVisible();
  });
});
