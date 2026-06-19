import { test, expect } from '@playwright/test';

test.describe('FL-01: Hero Conversion', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Verify Home page loads and hero tagline', async ({ page }) => {
    await expect(page).toHaveURL('/');
    // Received: "Structured  quality. Measurable digital impact."
    await expect(page.locator('h1')).toContainText(/Structured.*quality/i);
    await expect(page.locator('h1')).toContainText(/Measurable.*digital.*impact/i);
  });

  test('Verify Contact Us CTA navigates to /contact', async ({ page }) => {
    await page.getByRole('link', { name: 'CONTACT US' }).click();
    await expect(page).toHaveURL('/contact');
  });

  test('Verify Services CTA navigates to /services', async ({ page }) => {
    await page.getByRole('link', { name: 'SERVICES', exact: true }).click();
    await expect(page).toHaveURL('/services');
  });
});
