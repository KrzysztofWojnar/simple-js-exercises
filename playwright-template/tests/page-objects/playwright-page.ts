import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from '@testing-framework/gui/base-page';
import { PlaywrightUrl } from '@tests/urls/playwright-url';
import { Logger } from '@testing-framework/logging/logger';

export class PlaywrightHomePage extends BasePage {
    readonly getStartedLink: Locator = this.page.getByRole('link', {
        name: 'Get started',
    });
    readonly installationHeading: Locator = this.page.getByRole('heading', {
        name: 'Installation',
    });

    constructor(page: Page, logger: Logger) {
        super(
            page,
            logger,
            page.getByRole('link', {
                name: 'Get started',
            }),
            {
                urlPath: PlaywrightUrl.HOME,
            }
        );
    }

    async clickOnGetStartedLink() {
        await this.getStartedLink.click();
    }

    async verifyInstalationHeadingVisible() {
        await expect(this.installationHeading).toBeVisible();
    }
}
