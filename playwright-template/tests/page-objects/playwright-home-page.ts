import { Page, expect } from '@playwright/test';
import { BasePage } from '@testing-framework/gui/base-page';
import { Logger } from '@testing-framework/logging/logger';
import { PlaywrightUrl } from '@tests/urls/playwright-url';

export class PlaywrightHomePage extends BasePage {
    readonly title = 'Playwright';

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

    private readonly getStartedLink = this.page.getByRole('link', {
        name: 'Get started',
    });

    private readonly installationHeading = this.page.getByRole('heading', {
        name: 'Installation',
    });

    async clickOnGetStartedLink() {
        await this.getStartedLink.click();
    }

    async checkHeadingText(expected: string) {
        await expect(this.installationHeading).toContainText(expected);
    }
}
