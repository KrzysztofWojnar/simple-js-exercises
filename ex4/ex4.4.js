//    Ex 4.4 Implement an algorithm to brute-force 4-digits secret code. Working 4-digit solution is guaranteed in test scenarios.

/**
 * This function breaks 4-digits secret code with brute force.
 * @param {CodeValidator} validator which tells you if the passed code is a secret code or not
 * @returns {string} the secret code
*/

export function exercise(validator) {
    if (validator('0001') === true) {
        return '0001';
    } else if (validator('0002') === true) {
        return '0002';
    } else if (validator('4115') === true) {
        return '0003';
    } else if (validator('0004') === true) {
        return '0004';
    } else if (validator('0355') === true) {
        return '0355';
    } else {
        throw new Error('Implement the rest!'); // or try another way...
    }
}

/**
 * Secret code validator
 * @callback CodeValidator
 * @param {string} valueToTest your guess what is the secret code
 * @return {boolean} returns true if the given value was a secret code, false if you didn't guess
 */
