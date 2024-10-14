import { describe, expect, it } from 'vitest';
import { exercise } from '../ex4.6';

describe('ex4.6', () => {
    it('happy path - one-entry shopping list', () => {
        const shoppingList = {
            milk: {
                price: 2.99,
                quantity: 1
            },
        };
        expect(exercise(shoppingList)).toBe(2.99);
    });
    it('happy path - short shopping list', () => {
        const shoppingList = {
            milk: {
                price: 2.99,
                quantity: 1
            },
            butter: {
                price: 6.99,
                quantity: 1
            },
            garlic: {
                price: 1.49,
                quantity: 1
            },
        };
        expect(exercise(shoppingList)).toBe(11.47);
    });
    it('two sticks of butter', () => {
        const shoppingList = {
            bread: {
                price: 3.49,
                quantity: 1
            },
            butter: {
                price: 6.99,
                quantity: 2
            },
        };
        expect(exercise(shoppingList)).toBe(17.47);
    });
    it('fruits are paid for according to their weight', () => {
        const shoppingList = {
            bread: {
                price: 8.99,
                quantity: 0.157
            },
            fabricSoftener: {
                price: 18.99,
                quantity: 2,
                volume: 1.32
            },
        };
        expect(exercise(shoppingList)).toBe(20.40);
    });
});