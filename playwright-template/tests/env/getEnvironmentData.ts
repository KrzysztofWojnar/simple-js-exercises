import * as envFile from './data/environments.json';
import { defaultEnv } from './defaultEnv';

process.env.ENV ??= defaultEnv;

export function getEnvironmentData() {
    const env = process.env.ENV;
    assertEnvironmentName(env);
    const envValue = envFile[env];
    if (envValue) {
        return envValue;
    } else {
        throw new Error(
            `${envValue} was not specified in environment variables!`
        );
    }
}

function assertEnvironmentName(
    envName: unknown
): asserts envName is keyof typeof envFile {
    if (typeof envName !== 'string' || !(envName in envFile)) {
        throw new TypeError(`${envName} is not a correct environment name`);
    }
}
