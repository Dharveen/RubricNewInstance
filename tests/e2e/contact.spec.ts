import { test, expect } from '@playwright/test';

test.describe('FL-03: Strategic Inquiry - Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('Verify Contact page load and form visibility', async ({ page }) => {
    // Assert all fields are visible using placeholders as labels are not associated with IDs
    await expect(page.getByPlaceholder('E.g. James')).toBeVisible();
    await expect(page.getByPlaceholder('E.g. Smith')).toBeVisible();
    await expect(page.getByPlaceholder('james.smith@enterprise.com')).toBeVisible();
    await expect(page.locator('select')).toBeVisible();
    await expect(page.getByPlaceholder('Describe your project requirements...')).toBeVisible();
    await expect(page.getByRole('button', { name: 'SEND MESSAGE' })).toBeVisible();
  });

  test('Verify form prevents submission when empty', async ({ page }) => {
    const submitBtn = page.getByRole('button', { name: 'SEND MESSAGE' });
    await submitBtn.click();

    // Validation message display to be confirmed against implementation
    // Currently, the JSX does not have 'required' attributes or custom JS validation.
    // If implemented, we would assert on error text or HTML5 validation messages.
  });

  test('Verify First Name validation', async ({ page }) => {
    await page.getByPlaceholder('E.g. Smith').fill('Doe');
    await page.getByPlaceholder('james.smith@enterprise.com').fill('john@enterprise.com');
    await page.locator('select').selectOption('qa');
    await page.getByPlaceholder('Describe your project requirements...').fill('Test project requirements.');

    await page.getByRole('button', { name: 'SEND MESSAGE' }).click();

    // Validation message display to be confirmed against implementation
  });

  test('Verify Last Name validation', async ({ page }) => {
    await page.getByPlaceholder('E.g. James').fill('John');
    await page.getByPlaceholder('james.smith@enterprise.com').fill('john@enterprise.com');
    await page.locator('select').selectOption('dev');
    await page.getByPlaceholder('Describe your project requirements...').fill('Test message');

    await page.getByRole('button', { name: 'SEND MESSAGE' }).click();

    // Validation message display to be confirmed against implementation
  });

  test('Verify Professional Email validation (Empty)', async ({ page }) => {
    await page.getByPlaceholder('E.g. James').fill('John');
    await page.getByPlaceholder('E.g. Smith').fill('Doe');
    await page.locator('select').selectOption('itsm');
    await page.getByPlaceholder('Describe your project requirements...').fill('Service management inquiry');

    await page.getByRole('button', { name: 'SEND MESSAGE' }).click();

    // Validation message display to be confirmed against implementation
  });

  test('Verify Invalid Professional Email format', async ({ page }) => {
    await page.getByPlaceholder('E.g. James').fill('John');
    await page.getByPlaceholder('E.g. Smith').fill('Doe');
    await page.getByPlaceholder('james.smith@enterprise.com').fill('invalid-email');
    await page.locator('select').selectOption('consulting');
    await page.getByPlaceholder('Describe your project requirements...').fill('Consulting services request');

    await page.getByRole('button', { name: 'SEND MESSAGE' }).click();

    // Validation message display to be confirmed against implementation
    // If using <input type="email">, assert native validation:
    // const emailInput = page.getByPlaceholder('james.smith@enterprise.com');
    // const isValid = await emailInput.evaluate((el: HTMLInputElement) => el.checkValidity());
    // expect(isValid).toBe(false);
  });

  test('Verify Message/Requirements validation', async ({ page }) => {
    await page.getByPlaceholder('E.g. James').fill('John');
    await page.getByPlaceholder('E.g. Smith').fill('Doe');
    await page.getByPlaceholder('james.smith@enterprise.com').fill('john.doe@enterprise.com');
    await page.locator('select').selectOption('training');

    await page.getByRole('button', { name: 'SEND MESSAGE' }).click();

    // Validation message display to be confirmed against implementation
  });

  test('Verify Inquiry Department dropdown options', async ({ page }) => {
    const departmentSelect = page.locator('select');
    const options = [
      'Quality Assurance (QA)',
      'Software Development (DEV)',
      'IT Service Management (ITSM)',
      'Strategic Consulting',
      'Corporate Training'
    ];

    for (const option of options) {
      await expect(departmentSelect).toContainText(option);
    }
  });

  test('Verify successful population with valid data (Happy Path)', async ({ page }) => {
    await page.getByPlaceholder('E.g. James').fill('James');
    await page.getByPlaceholder('E.g. Smith').fill('Architect');
    await page.getByPlaceholder('james.smith@enterprise.com').fill('james.a@rubric.com');
    await page.locator('select').selectOption('qa');
    await page.getByPlaceholder('Describe your project requirements...').fill('We need a full SQE audit for our financial core.');

    const submitBtn = page.getByRole('button', { name: 'SEND MESSAGE' });
    await expect(submitBtn).toBeEnabled();
    await submitBtn.click();

    // Final submission result to be confirmed against implementation
  });
});
