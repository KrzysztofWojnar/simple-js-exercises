import { expect } from '@playwright/test';
import { test } from '../fixtures';

// test.beforeEach(({ }) => {console.log('before hooks')})

test('division', async ({ calculator }) => {
  // console.log('test starts here');
  await calculator.goto();
  await calculator.clickDigitButton('2');
  await calculator.clickDigitButton('4');
  await calculator.divide();
  await calculator.clickDigitButton('8');
  await calculator.clickCalculate();

  await expect(calculator.display).toContainText('3');
  // console.log('test ends here');
});

// test.afterEach(({ }) => {console.log('after hooks')})
