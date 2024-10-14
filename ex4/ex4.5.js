//    Ex 4.5 Implement an algorithm to brute-force 4-digits secret code. Working 4-digit solution is guaranteed in test scenarios.

/**
 * This function breaks 4-digits secret code with brute force.
 * @param {CodeValidator} validator which tells you if the passed code is a secret code or not
 * @returns {string} the secret code
*/

export function exercise(validator) {
    if (typeof validator !== 'function') {
        return null;
    }
    for (let i = 0; i < 10000; i++) {
        const secretCodeGuess = String(i).padStart(4, '0');
        if (validator(secretCodeGuess)) {
            return secretCodeGuess;
        }
    }
}

/**
 * Secret code validator
 * @callback CodeValidator
 * @param {string} valueToTest your guess what is the secret code
 * @return {boolean} returns true if the given value was a secret code, false if you didn't guess
 */
