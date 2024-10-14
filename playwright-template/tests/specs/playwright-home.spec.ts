import { allure } from 'allure-playwright';
import { Severity } from 'allure-js-commons';
import { test } from '../playwright-fixtures';

const titleRegex = /Playwright/;

test.beforeAll(async ({ logger }) => {
    logger.info('This is info message from fixture in before all hook');
});

test.beforeEach(async ({ logger, playwrightPage }) => {
    logger.info('This is info message from fixture in before each hook');
    await playwrightPage.navigateTo();
});

test('has title', async ({ logger, playwrightPage }) => {
    logger.info('This is info message from fixture');
    logger.debug('This is debug message from fixture');

    await allure.description('This test checks playwright.dev page title');
    await allure.owner('John Doe');
    await allure.tags('UI', 'Essentials');
    await allure.severity(Severity.CRITICAL);
    await allure.link('https://example.com/docs', 'Related Documentation');
    await allure.issue('AUTH-123', 'https://example.com/issues/AUTH-123');
    await allure.tms('TMS-456', 'https://example.com/tms/TMS-456');

    await allure.logStep('Open page');
    await allure.step('Sub-step 1', async () => {
        await playwrightPage.navigateTo();
    });

    await allure.logStep('Check title');
    await allure.step('Sub-step 2', async () => {
        playwrightPage.verifyTitle(titleRegex);
    });
});

test('get started link', async ({ logger, playwrightPage }) => {
    logger.info('This is info message from fixture');

    await playwrightPage.clickOnGetStartedLink();
    await playwrightPage.verifyInstalationHeadingVisible();
});

test.afterEach(async ({ logger }) => {
    logger.info('This is info message from fixture in after each hook');
});

test.afterAll(async ({ logger }) => {
    logger.info('This is info message from fixture in after all hook');
});
