import { test, expect } from './dumb-test.js';

//    Ex 4.1 Implement following function

/**
 * @param {string} date in format DD-MM-YYYY (like 25-02-2023 for 15th February 2023)
 * @returns {string} the same date as YYYY.MM.DD (2023.02.25). If the argument is not a string return null. If the date is incorrect return null.
*/

function exercise(date) {
    return null;
}

test(() => {
    expect(exercise(null)).toBe(null);
    expect(exercise('93039')).toBe(null);
    expect(exercise('25-3-2023')).toBe(null);
    expect(exercise('25-03-2023')).toBe('2023.02.25');
});
