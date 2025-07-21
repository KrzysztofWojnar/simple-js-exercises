import { test as baseTest } from '@playwright/test';
import { Calculator } from './pageObjects/calculator';

export const test = baseTest.extend<
    { calculator: Calculator }
  >({
    calculator: async function ({ page }, use) {
      const calculator = new Calculator(page);
      // console.log('Fixture initialization ended');
      await use(calculator); // other fixtures, after/before hooks, the test
      // console.log('Fixture teardown started');
    },
  }
);
