import { format } from 'winston';
import { Logger } from './logger';
import winston = require('winston');

export class WinstonLoggerAdapter implements Logger {
    private _winstonLogger: winston.Logger;
    private _logFile: string;

    public constructor(
        readonly id: string,
        logFileDir: string,
        logLevel: string
    ) {
        this._logFile = `${logFileDir}/${this.id}-test.log`;

        this._winstonLogger = winston.createLogger({
            level: logLevel.toLocaleLowerCase(),
            format: format.combine(
                format.colorize({ colors: { info: 'blue', debug: 'magenta' } }),
                format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:SSS' }),
                format.printf(
                    info =>
                        `${info.timestamp} ${this.id} ${info.level}: ${info.message}`
                )
            ),
            transports: [
                new winston.transports.Console(),
                new winston.transports.File({ filename: this._logFile }),
            ],
        });
    }

    info(message: string) {
        this._winstonLogger.info(message);
    }

    error(message: string) {
        this._winstonLogger.error(message);
    }

    warn(message: string) {
        this._winstonLogger.warn(message);
    }

    debug(message: string) {
        this._winstonLogger.debug(message);
    }

    close() {
        this._winstonLogger.close();
    }
}
