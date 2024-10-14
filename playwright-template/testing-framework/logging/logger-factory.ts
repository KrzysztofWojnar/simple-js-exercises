import { Logger } from './logger';
import { LoggerFactoryConfig } from './logger-factory-config';
import { PlaywrightWorkerBasedLoggerIdProvider } from './logger-id-provider-playwright-worker-based';
import { EnvBasedLoggerLogLevelProvider } from './logger-log-level-provider-env-based';
import { PlaywrightConfigBasedLoggerOutputDirectoryProvider } from './logger-output-directory-provider-playwright-config-based';
import { WinstonLoggerAdapter } from './winston-logger-adapter';

export class LoggerFactory {
    private static _defaultConfig: LoggerFactoryConfig = {
        loggerIdProvider: new PlaywrightWorkerBasedLoggerIdProvider(),
        loggerOutputDirectoryProvider:
            new PlaywrightConfigBasedLoggerOutputDirectoryProvider(),
        loggerLogLevelProvider: new EnvBasedLoggerLogLevelProvider(),
    };
    private static _config: LoggerFactoryConfig = this._defaultConfig;
    private static _logger: Logger;

    static getLogger(): Logger {
        if (!this._logger) {
            this._logger = new WinstonLoggerAdapter(
                this._config.loggerIdProvider.getLoggerId(),
                this._config.loggerOutputDirectoryProvider.getDir(),
                this._config.loggerLogLevelProvider.getLogLevel()
            );
        }
        return this._logger;
    }

    static setConfig(config: LoggerFactoryConfig): void {
        this._config = config;
    }
}
