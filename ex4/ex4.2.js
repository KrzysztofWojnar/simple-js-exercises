//    Ex 4.2 Implement following function

/**
 * @param {Array<number>} numbers array of numbers
 * @returns {number | null} the highest number in the passed array. It returns null if passed argument is not an array.
*/

export function exercise(numbers) {
    if (!(numbers instanceof Array)) return null;
    return Math.max(...numbers);
}
