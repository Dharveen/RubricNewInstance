import { test, expect } from '@playwright/test';

test.describe('FL-02: Service Exploration', () => {
  test('Verify service domains are visible and Services page loads', async ({ page }) => {
    await page.goto('/');
    const domains = ['QA', 'ITSM', 'DEV', 'Consulting', 'Training'];
    for (const domain of domains) {
      await expect(page.getByText(domain, { exact: true })).toBeVisible();
    }
    await page.getByRole('link', { name: 'SERVICES', exact: true }).click();
    await expect(page).toHaveURL('/services');
  });
});
