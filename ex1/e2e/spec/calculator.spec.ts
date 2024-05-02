import { test, expect } from '@playwright/test';
import { Calculator } from '../pageObjects/calculator';

test('simple multiplication', async ({ page }) => { // WZIĄĆ DIVISION (CAŁKOWIY WYNIK)
  const calculatorPage = new Calculator(page);
  await calculatorPage.goto();

  await calculatorPage.clickDigitButton(1);
  await calculatorPage.clickDigitButton(6);
  await calculatorPage.selectMultiply();
  await calculatorPage.clickDigitButton(3);

  await expect(calculatorPage.calculatorDisplay).toContainText('48');
});