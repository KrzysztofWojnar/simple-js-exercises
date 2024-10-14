//    Ex 4.6 Implement following function

/**
 * @param {string} date in format DD-MM-YYYY (like 25-02-2023 for 15th February 2023)
 * @returns {string | null} the same date as YYYY.MM.DD (2023.02.25). If the argument is not a string return null. If the date is incorrect return null.
*/

export function exercise(date) {
    if (typeof date !== 'string' || date.length !== 10) {
        return null;
    }
    if (Array.from(date).filter(char => char === '-').length !== 2) {
        return null;
    }
    const [DD, MM, YYYY] = date.split('-');
    if (new Date(YYYY, MM - 1, DD).getMonth() !== MM - 1) {
        return null;
    }
    return `${YYYY}.${MM}.${DD}`;
}
