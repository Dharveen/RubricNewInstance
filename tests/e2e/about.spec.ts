import { test, expect } from '@playwright/test';

test.describe('FL-11: About / Mission Review', () => {
  test('Verify About page content', async ({ page }) => {
    await page.goto('/about');
    // Received: "Engineering  Digital Certainty  Since 2007."
    await expect(page.locator('h1')).toContainText(/Engineering.*Digital.*Certainty/i);
    // Use first() to avoid strict mode violation if multiple elements contain 2007
    await expect(page.getByText(/2007/).first()).toBeVisible();
    await page.getByRole('link', { name: 'REQUEST CONSULTATION' }).click();
    await expect(page).toHaveURL('/contact');
  });
});
