import { test } from '../playwright-fixtures';
import { getEnvironmentData } from '../env/getEnvironmentData';

test('test environment', async ({ page, logger }) => {
    logger.info(getEnvironmentData().WEBSITE.URL);
    logger.info(getEnvironmentData().WEBSITE.USERNAME);
    logger.info(getEnvironmentData().WEBSITE.PASSWORD);
    await page.goto(getEnvironmentData().WEBSITE.URL);
});
