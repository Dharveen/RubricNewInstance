import { test, expect } from '@playwright/test';

test.describe('FL-08: Branding & Visual Consistency', () => {
  test('Verify brand colors', async ({ page }) => {
    await page.goto('/');
    const contactBtn = page.getByRole('link', { name: 'CONTACT US' });
    await expect(contactBtn).toHaveCSS('background-color', 'rgb(229, 57, 53)');
  });
});
