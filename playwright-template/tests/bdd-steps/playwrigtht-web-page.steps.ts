import { createBdd } from 'playwright-bdd';
import { test } from './playwrigtht-web-page.fixture';

const { Given, When, Then } = createBdd(test);

Given('Prepare the background', async ({ logger }) => {
    logger.info('Preparing background');
});

Given(
    'I am on Playwright home page',
    async ({ playwrightHomePage, logger }) => {
        //TODO: handle logging
        logger.info('Given: I am on Playwright home page');
        await playwrightHomePage.navigateTo();
    }
);

When('I click link {string}', async ({ playwrightHomePage }, name: string) => {
    await playwrightHomePage.clickOnLink(name);
});

Then('I see heading {string}', async ({ playwrightHomePage }, text: string) => {
    await playwrightHomePage.checkHeadingText(text);
});
