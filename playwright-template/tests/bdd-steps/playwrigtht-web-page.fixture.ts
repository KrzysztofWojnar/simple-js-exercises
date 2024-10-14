import { test as base } from '@testing-framework/bdd/bdd-fixture';
import { PlaywrightHomePage } from '@tests/page-objects/playwright-home-page';

interface PageFixture {
    playwrightHomePage: PlaywrightHomePage;
}

export const test = base.extend<PageFixture>({
    playwrightHomePage: async ({ page, logger }, use) => {
        const playwrightHomePage = new PlaywrightHomePage(page, logger);
        await use(playwrightHomePage);
    },
});
