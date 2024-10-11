import { describe, expect, it } from 'vitest';
import { exercise } from '../ex4.1';

describe('ex4.1', () => {
    it('happy path', () => {
        expect(exercise('25-02-2023')).toBe('2023.02.25');
    });
    it('happy path - month and day are the same', () => {
        expect(exercise('03-03-2023')).toBe('2023.03.03');
    });
    it('wrong date', () => {
        expect(exercise('30-30-2023')).toBe(null);
    });
    it('wrong format', () => {
        expect(exercise('25-3-2023')).toBe(null);
    });
    it('wrong value', () => {
        expect(exercise('93039')).toBe(null);
    });
    it('the argument is of wrong type', () => {
        expect(exercise(null)).toBe(null);
    });
    it.skip('30 Feb', () => {
        expect(exercise('30-02-2023')).toBe(null);
    });
});