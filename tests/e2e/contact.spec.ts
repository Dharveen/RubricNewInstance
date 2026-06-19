import { test, expect } from '@playwright/test';

test.describe('FL-03: Strategic Inquiry', () => {
  test('Verify Contact page and form fields', async ({ page }) => {
    await page.goto('/contact');

    // Using placeholders as labels aren't associated with input IDs in current implementation
    const firstName = page.getByPlaceholder('E.g. James');
    const lastName = page.getByPlaceholder('E.g. Smith');
    const email = page.getByPlaceholder('james.smith@enterprise.com');
    const department = page.locator('select');
    const message = page.getByPlaceholder('Describe your project requirements...');

    await expect(firstName).toBeVisible();
    await expect(lastName).toBeVisible();
    await expect(email).toBeVisible();
    await expect(department).toBeVisible();
    await expect(message).toBeVisible();

    // Populate form
    await firstName.fill('John');
    await lastName.fill('Doe');
    await email.fill('john.doe@enterprise.com');
    await department.selectOption('qa');
    await message.fill('We are looking for SQE transformation services.');

    const submitBtn = page.getByRole('button', { name: 'SEND MESSAGE' });
    await expect(submitBtn).toBeVisible();
    await submitBtn.click();
  });
});
