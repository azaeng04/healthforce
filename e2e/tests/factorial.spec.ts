import { test, expect } from '@playwright/test';

test('factorial of 7 is 5040', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('Enter an integer').click();
  await page.getByPlaceholder('Enter an integer').fill('7');
  await page.getByRole('button', { name: 'Calculate!' }).click();
  await expect(page.locator('#resultDiv')).toContainText('The factorial of 7 is: 5040');
});
