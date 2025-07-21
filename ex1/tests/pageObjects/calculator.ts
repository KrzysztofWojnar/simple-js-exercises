import { Locator, Page } from "@playwright/test";

type Digit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

export class Calculator {
  readonly page: Page;
  readonly display: Locator;

  constructor(page: Page) {
    this.page = page;
    this.display = page.locator('#value');
  }

  async goto() {
    await this.page.goto('/');
  }

  async clickDigitButton(digit: Digit) {
    await this.page.getByRole('button', { name: digit }).click();
  }

  async divide() {
    await this.page.getByRole('button', { name: '/' }).click();
  }
  async clickCalculate() {
    await this.page.getByRole('button', { name: '=' }).click();
  }
}
