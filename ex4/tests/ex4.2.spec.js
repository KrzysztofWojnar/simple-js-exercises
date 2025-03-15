import { describe, expect, it } from 'vitest';
import { exercise } from '../ex4.2';

describe('ex4.2', () => {
    it('single argument', () => {
        expect(exercise(4)).toBe(4);
    });
    it('happy path - few elements', () => {
        expect(exercise(2, 14, 5)).toBe(21);
    });
    it('Result is negative', () => {
        expect(exercise(53, -90)).toBe(-37);
    });
    it('null is ignored', () => {
        // @ts-ignore
        expect(exercise(99, null, 13)).toBe(112);
    });
    it('string is casted', () => {
        // @ts-ignore
        expect(exercise('9', 11)).toBe(20);
    });
});