import { test as base } from '@playwright/test';
import { LoggerFactory } from './logger-factory';
import { Logger } from './logger';

type WorkerScoped = {
    logger: Logger;
};

type TestScoped = {
    logTestStartAndEnd: void;
    logTestResult: void;
};

export const test = base.extend<TestScoped, WorkerScoped>({
    logger: [
        // eslint-disable-next-line no-empty-pattern
        async ({}, use) => {
            const logger = LoggerFactory.getLogger();
            await use(logger);
            logger.close();
        },
        { scope: 'worker', auto: true },
    ],

    logTestStartAndEnd: [
        async ({ logger }: WorkerScoped, use, testInfo) => {
            const testTitle = testInfo.title;
            logger.info(`Starting test: ${testTitle}`);
            await use();
            logger.info(`Ending test: ${testTitle}`);
        },
        { scope: 'test', auto: true },
    ],

    logTestResult: [
        async ({ logger }: WorkerScoped, use, testInfo) => {
            await use();
            switch (testInfo.status) {
                case 'passed':
                    logger.info('Test PASSED');
                    break;
                case 'failed':
                    logger.error('Test FAILED');
                    break;
                case 'timedOut':
                    logger.error('Test TIMED OUT');
                    break;
                case 'skipped':
                    logger.warn('Test SKIPPED');
                    break;
                case 'interrupted':
                    logger.warn('Test INTERRUPTED');
                    break;
            }
        },
        { scope: 'test', auto: true },
    ],
});
