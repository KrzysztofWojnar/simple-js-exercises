import { LoggerIdProvider } from './logger-id-provider';
import { LoggerLogLevelProvider } from './logger-log-level-provider';
import { LoggerOutputDirectoryProvider } from './logger-output-directory-provider';

export interface LoggerFactoryConfig {
    loggerIdProvider: LoggerIdProvider;
    loggerOutputDirectoryProvider: LoggerOutputDirectoryProvider;
    loggerLogLevelProvider: LoggerLogLevelProvider;
}
