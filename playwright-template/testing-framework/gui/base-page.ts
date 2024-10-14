import { expect, type Page, type Locator } from '@playwright/test';
import { Logger } from '../logging/logger';

/**
 * The BasePage is intended to be an ancestor for every page object in the project. It is a critical compoment of Page Object Model.
 * The page represents an idea of a page or group of visible elements.
 * @param page playwright's Page object based on which any page-related actions (like creating and using locators) are determined
 * @param logger logger object which is responsible for reporting the test progress in standard stream (mostly console)
 * @param loadMarker locator of an element whose occurrence means that the page has been loaded
 */
export abstract class BasePage {
    protected readonly page: Page;
    protected readonly logger: Logger;
    protected readonly loadMarker: Locator;
    protected readonly urlPath?: string;
    constructor(
        page: Page,
        logger: Logger,
        loadMarker: Locator,
        options?: {
            /**
             * The url of the page that is represented by this Page Object
             * URL's path with optional query params ("search") and hash
             * The value is optional because Page Objects can represent reusable elements (like navbars or modals), or pages that are part of a Single Page Application that share a common address.
             * @example '/orders'
             * @example '/events/tomorrowland/tickets'
             * @example '/search?query=spanish%20inquisition'
             * @example '/faq?aboutus#headquarters'
             */
            urlPath?: string;
        }
    ) {
        this.page = page;
        this.logger = logger;
        this.loadMarker = loadMarker;
        Object.assign(this, options);
    }

    async verifyTitle(title: string | RegExp) {
        await expect(this.page).toHaveTitle(title);
    }

    async clickOnLink(name: string) {
        await this.page.getByRole('link', { name: name }).click();
    }

    toString(): string {
        return this.constructor.name;
    }

    async navigateTo() {
        if (!this.urlPath) {
            return null;
        }
        this.logger.debug(`Navigating to ${this.urlPath}`);
        await this.page.goto(this.urlPath);
        await this.page.waitForLoadState();
        await this.waitForLoaded();
    }

    protected async waitForLoaded() {
        this.logger.debug(`Waiting for page to fully loaded`);
        try {
            await this.loadMarker.waitFor({
                state: 'visible',
            });
            this.logger.debug(`Page fully loaded`);
        } catch (error) {
            throw new Error(`Page not loaded`);
        }
    }

    private async isLoaded(): Promise<boolean> {
        try {
            await this.loadMarker.waitFor({
                state: 'visible',
                timeout: 100,
            });
            return true;
        } catch (error) {
            return false;
        }
    }

    async verifyIfLoaded() {
        expect(await this.isLoaded()).toBeTruthy();
    }
}
