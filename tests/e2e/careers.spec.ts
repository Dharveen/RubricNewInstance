import { test, expect } from '@playwright/test';

test.describe('FL-04: Talent Acquisition', () => {
  test('Verify Careers page and roles', async ({ page }) => {
    await page.goto('/careers');
    await expect(page.getByText('Current Openings.')).toBeVisible();
    await expect(page.locator('select')).toBeVisible();
    await expect(page.getByText('Senior Automation Engineer')).toBeVisible();
    await expect(page.getByRole('link', { name: 'SEND SPECULATIVE CV' })).toBeVisible();
  });
});
