import { test, expect } from '@playwright/test';
import { FactorialPage } from './factorial.pom';

test('factorial of 7 is 5040', async ({ page }) => {
  const factorialPage = new FactorialPage(page, 7, 5040);

  await Promise.all([
    factorialPage.goto(),
    factorialPage.calculateFactorial(),
    factorialPage.verifyFactorialResult(),
  ]);
});
