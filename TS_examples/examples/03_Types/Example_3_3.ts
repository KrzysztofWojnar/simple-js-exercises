/**
 * Example 3_1_0 - Advanced type and type guard
 */

// Definition of types
export type Pet = Fish | Dog;

export type Fish = {
    name: string
    swim: boolean
};

export type Dog = {
    name: string
    bark: boolean
};

// Type guards

function isFish(pet: Pet): pet is Fish {
    return (pet as Fish).swim !== undefined
}


const goldfish = {
    name: 'Nemo',
    swim: true
}

const dog = {
    name: 'Reksio',
    bark: false
}

console.log(isFish(goldfish));

console.log(isFish(dog));

