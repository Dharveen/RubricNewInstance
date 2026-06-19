import { test, expect } from '@playwright/test';

test.describe('FL-10: Thought Leadership', () => {
  test('Verify Insights page components', async ({ page }) => {
    await page.goto('/insights');
    await expect(page.getByPlaceholder('SEARCH INSIGHTS...')).toBeVisible();
    await expect(page.getByText(/Precision Delivered/i)).toBeVisible();
    await expect(page.getByText(/#QAAutomation/i)).toBeVisible();
  });
});
