import { describe, expect, it } from 'vitest';
import { exercise } from '../ex4.1';

describe('ex4.1', () => {
    it('Simple circle of radius 1', () => {
        expect(exercise(1)).toBe(3.141592653589793);
    });
    it('Simple circle of radius 2', () => {
        expect(exercise(2)).toBe(12.566370614359172);
    });
    it('Simple circle of radius 64', () => {
        expect(exercise(64)).toBe(12867.963509103793);
    });
});