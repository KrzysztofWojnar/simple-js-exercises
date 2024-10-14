import { LoggerLogLevelProvider } from './logger-log-level-provider';

export class EnvBasedLoggerLogLevelProvider implements LoggerLogLevelProvider {
    getLogLevel() {
        return process.env.LOG_LEVEL || 'debug';
    }
}
