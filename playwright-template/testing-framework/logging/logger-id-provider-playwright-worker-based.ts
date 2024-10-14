import test from '@playwright/test';
import { LoggerIdProvider } from './logger-id-provider';

export class PlaywrightWorkerBasedLoggerIdProvider implements LoggerIdProvider {
    getLoggerId() {
        return `Worker-${test.info().workerIndex}`;
    }
}
