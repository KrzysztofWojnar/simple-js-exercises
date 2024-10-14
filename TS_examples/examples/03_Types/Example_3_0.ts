/**
 * Example 3_0_0 - Primitives. Run script ex3_0 from package.json file.
 */
let thisIsString: string = 'test';

let thisIsNumber: number = 2;

let thisIsBoolean: boolean = false;

console.log('Example 3_0_0');
console.log('thisIsString');
console.log(typeof thisIsString);

console.log('thisIsNumber');
console.log(typeof thisIsNumber);

console.log('thisIsBoolean');
console.log(typeof thisIsBoolean);

/**
 * Example 3_0_1. Uncomment line below and try to execute code. Run script ex3_0 from package.json file.
 */
console.log('Example 3_0_1');
//thisIsNumber = "beString";

/**
 * Example 3_0_2. Arrays. Run script ex3_0 from package.json file.
 */
console.log('Example 3_0_2');

let arrayOne: number[];

let arrayTwo: Array<number>;

arrayOne = [1,2,3];

arrayTwo = [1,2,3];

console.log(typeof arrayOne);

console.log(typeof arrayTwo);

/**
 * Example 3_0_3 any. Run script ex3_0 from package.json file.
 * Example 3_0_4. Comment any type, uncomment number type and observe.
 */
console.log('Example 3_0_3');
// 3_0_3
let thisIsAny: any;
// 3_0_4
//let thisIsAny: number;

thisIsAny = 2;
console.log(typeof thisIsAny);

thisIsAny = "string";
console.log(typeof thisIsAny);

thisIsAny = false;
console.log(typeof thisIsAny);

thisIsAny = [1, 2, 3];
console.log(typeof thisIsAny);



