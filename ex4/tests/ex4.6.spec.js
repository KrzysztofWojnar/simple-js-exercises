import { describe, expect, it } from 'vitest';
import { exercise } from '../ex4.6';

describe('ex4.6', () => {
    it('happy path', () => {
        expect(exercise('25-02-2023')).toBe('2023.02.25');
    });
    it('happy path - month and day are the same', () => {
        expect(exercise('03-03-2023')).toBe('2023.03.03');
    });
    it('happy path - December', () => {
        expect(exercise('03-12-2023')).toBe('2023.12.03');
    });
    it('happy path - Januaryt', () => {
        expect(exercise('13-01-2023')).toBe('2023.01.13');
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
        // @ts-ignore
        expect(exercise(null)).toBe(null);
    });
    it.skip('30 Feb', () => {
        expect(exercise('30-02-2023')).toBe(null);
    });
});
