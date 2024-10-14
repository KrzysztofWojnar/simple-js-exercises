import test from '@playwright/test';
import { LoggerOutputDirectoryProvider } from './logger-output-directory-provider';

export class PlaywrightConfigBasedLoggerOutputDirectoryProvider
    implements LoggerOutputDirectoryProvider
{
    getDir() {
        return test.info().project.outputDir;
    }
}
