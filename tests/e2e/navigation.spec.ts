import { test, expect } from '@playwright/test';

test.describe('FL-06: Global Navigation Integrity', () => {
  test('Verify navbar links route correctly', async ({ page }) => {
    await page.goto('/');
    const links = ['About', 'Services', 'Platform', 'Case Studies', 'Insights', 'Careers'];
    for (const link of links) {
      // Use header to avoid footer links if any
      await page.locator('nav').getByRole('link', { name: link, exact: true }).click();
      await expect(page).toHaveURL(new RegExp(link.toLowerCase().replace(' ', '-')));
    }
  });

  test('Verify Rubric logo navigates back to Home', async ({ page }) => {
    await page.goto('/about');
    // Fix strict mode violation
    await page.locator('nav').getByRole('link', { name: /rubric/i }).click();
    await expect(page).toHaveURL('/');
  });
});
