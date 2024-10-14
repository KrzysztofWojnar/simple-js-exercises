//    Ex 4.6 Implement following function

/**
 * @typedef ShoppingEntry
 * @property {number} price
 * @property {number} quantity
 */

/**
 * Calculates how much all the items on the shopping list will cost
 * @param {Record<string, ShoppingEntry}>} shoppingList
 * @returns {number} Total amount to be paid for all products on the list. Incorrect values would be ignored. Use Math.round() to return with two decimal places of accuracy
*/

export function exercise(shoppingList) {
    let result = 0;
    Object.values(shoppingList).forEach(item => result += Math.round(item.price * 100 * item.quantity) / 100);
    return result;
}
