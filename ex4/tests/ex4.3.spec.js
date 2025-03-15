import { describe, expect, it } from 'vitest';
import { exercise } from '../ex4.3';

describe('ex4.3', () => {
    it('happy path', () => {
        expect(exercise([2, 3])).toBe(3);
    });
    it('happy path - one value in array', () => {
        expect(exercise([13])).toBe(13);
    });
    it('two equal values', () => {
        expect(exercise([7, 7])).toBe(7);
    });
    it('three values', () => {
        expect(exercise([1, 3, 5])).toBe(5);
    });
    it('three not sorted values', () => {
        expect(exercise([3, 12, 4])).toBe(12);
    });
    it('negative values', () => {
        expect(exercise([-38, -12, -72])).toBe(-12);
    });
    it('negative and positive values', () => {
        expect(exercise([-3, 4, 5, -99])).toBe(5);
    });
    it('the argument is of wrong type', () => {
        // @ts-ignore
        expect(exercise(null)).toBe(null);
    });
    it('the argument is of type number, not an array of numbers', () => {
        // @ts-ignore
        expect(exercise(1)).toBe(null);
    });
    it.skip('passed array is empty', () => {
        expect(exercise([])).toBe(-Infinity);
    });
    it.skip('value in array is of wrong type', () => {
        // @ts-ignore
        expect(exercise([1, 3, '5'])).toBe(5);
    });
    it.skip('value in array is a wrong value', () => {
        // @ts-ignore
        expect(exercise([1, 3, 'hi mom'])).toBe(3);
    });
});