import { describe, expect, it } from 'vitest';
import { exercise } from '../ex4.5';
import { validator as publicCodeValidator } from './publicCodeValidator';
import { validator as validator0 } from './secretCodeValidator0';
import { validator as validator1 } from './secretCodeValidator1';
import { validator as validator2 } from './secretCodeValidator2';
import { validator as validator3 } from './secretCodeValidator3';

describe('ex4.5', () => {
    it('validator0 - public code 0355', () => {
        const result = exercise(publicCodeValidator);
        expect(result).toBeTypeOf('string');
        expect(result).toMatch(/\d{4}/);
        expect(publicCodeValidator(result)).toBe(true);
    });
    it('validator0 - known secret code, solution for this is 0003', () => {
        const result = exercise(validator0);
        expect(result).toBeTypeOf('string');
        expect(result).toMatch(/\d{4}/);
        expect(validator0(result)).toBe(true);
    });
    it('validator1', () => {
        const result = exercise(validator1);
        expect(result).toBeTypeOf('string');
        expect(result).toMatch(/\d{4}/);
        expect(validator1(result)).toBe(true);
    });
    it('validator2', () => {
        const result = exercise(validator2);
        expect(result).toBeTypeOf('string');
        expect(result).toMatch(/\d{4}/);
        expect(validator2(result)).toBe(true);
    });
    it('validator3', () => {
        const result = exercise(validator3);
        expect(result).toBeTypeOf('string');
        expect(result).toMatch(/\d{4}/);
        expect(validator3(result)).toBe(true);
    });
});