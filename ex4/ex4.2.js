import { test, expect } from './dumb-test.js';

//    Ex 4.2 Implement following function

/**
 * @param {Array<number>} numbers array of numbers
 * @returns {number | null} the highest number in the passed array. It returns null if passed argument is not an array.
*/

function exercise(numbers) {
    return null;
}

test(() => {
    expect(exercise(null)).toBe(null);
    expect(exercise('text')).toBe(null);
    expect(exercise(1)).toBe(null);
    expect(exercise([1])).toBe(1);
    expect(exercise([2, 3])).toBe(3);
    expect(exercise([2, 2])).toBe(2);
    expect(exercise([1, 3, 5])).toBe(5);
    expect(exercise([3, 12, 4])).toBe(12);
    expect(exercise([-38, -12, -72])).toBe(-12);
    expect(exercise([-3, 4, 5, -99])).toBe(5);
    expect(exercise([-38, -12, -72])).toBe(-12);
    // expect(exercise([1, 3, '5'])).toBe(???);
    // expect(exercise([1, 3, 'hi mom'])).toBe(???);
});
