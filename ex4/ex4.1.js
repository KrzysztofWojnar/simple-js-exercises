//    Ex 4.1 Implement following function

/**
 * @param {string} date in format DD-MM-YYYY (like 25-02-2023 for 15th February 2023)
 * @returns {string} the same date as YYYY.MM.DD (2023.02.25). If the argument is not a string return null. If the date is incorrect return null.
*/

export function exercise(date) {
    if (typeof date !== 'string') return null;
    if (!date.match(/\d\d-\d\d-\d{4}/)) return null;
    const [DD, MM, YYYY] = date.split('-');
    return `${YYYY}.${MM}.${DD}`;
}

