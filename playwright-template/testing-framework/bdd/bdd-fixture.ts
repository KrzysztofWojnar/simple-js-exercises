import { mergeTests } from '@playwright/test';
import { test as bdd } from 'playwright-bdd';
import { test as logger } from '@testing-framework/logging/logger-fixture';

export const test = mergeTests(bdd, logger);
