import { Locator, Page, expect } from "@playwright/test";

export class FactorialPage {
    private readonly page: Page;
    private readonly num: number;
    private readonly expectedResult: number;
    private readonly factorialInput: Locator;
    private readonly factorialResult: Locator;
    private readonly calculateButton: Locator;

    constructor(page: Page, num: number, expectedResult: number) {
        this.page = page;
        this.num = num;
        this.expectedResult = expectedResult;

        this.factorialInput = page.getByPlaceholder('Enter an integer');
        this.factorialResult = page.locator('#resultDiv');
        this.calculateButton = page.getByRole('button', { name: 'Calculate!' });
    }

    async goto() {
        await this.page.goto('/');
        return this;
    }

    async calculateFactorial() {
        await this.factorialInput.click();
        await this.factorialInput.fill(this.num.toString());
        await this.calculateButton.click();
        return this;
    }

    async verifyFactorialResult() {
        await expect(this.factorialResult).toContainText(`The factorial of ${this.num} is: ${this.expectedResult}`);
        return this;
    }

}
