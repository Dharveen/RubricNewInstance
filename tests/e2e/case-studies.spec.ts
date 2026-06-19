import { test, expect } from '@playwright/test';

test.describe('FL-09: Proof of Impact', () => {
  test('Verify Case Studies page and metrics', async ({ page }) => {
    await page.goto('/case-studies');
    await expect(page.getByText('Automated Precision for Enterprise Finance')).toBeVisible();
    await expect(page.getByText('90% Failure Reduction')).toBeVisible();
    await page.getByRole('link', { name: /SCHEDULE CONSULTATION/i }).click();
    await expect(page).toHaveURL('/contact');
  });
});
