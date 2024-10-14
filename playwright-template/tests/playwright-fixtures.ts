import { test as base } from '@testing-framework/logging/logger-fixture';
import { ToDoPage } from '@tests/page-objects/to-do-page';
import { PlaywrightHomePage } from '@tests/page-objects/playwright-page';

// IMPORTANT: Comments are for study purposes only, do not misuse in your project

/**
 * This interface defines type of your fixtures.
 */
interface MyFixtures {
    toDoPage: ToDoPage;
    playwrightPage: PlaywrightHomePage;
}

// Extend base test by providing "todoPage" and "playwrightPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<MyFixtures>({
    toDoPage: async ({ page, logger }, use) => {
        // Set up the fixture.
        const toDoPage = new ToDoPage(page, logger);
        await use(toDoPage);
    },
    playwrightPage: async ({ page, logger }, use) => {
        const playwrightPage = new PlaywrightHomePage(page, logger);
        await use(playwrightPage);
    },
});
