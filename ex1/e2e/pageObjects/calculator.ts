import { Locator, Page } from "@playwright/test";
type Digit = 0|1|2|3|4|5|6|7|8|9;

export class Calculator {
    readonly page: Page;
    readonly calculatorDisplay: Locator;
    constructor(page: Page) {
        this.page = page;
        this.calculatorDisplay = page.locator('#display');
    }
    
    async goto() {
        await this.page.goto('http://127.0.0.1:5173/');
    }
    async clickDigitButton(digit: Digit) {
        await this.page.getByRole('button', { name: String(digit) }).click();
    }
    async selectMultiply() {
        await this.page.getByRole('button', { name: '*' }).click();
    }
    async clickCalculate() {
        await this.page.getByRole('button', { name: '=' }).click();
    }
}