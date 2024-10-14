/**
 * Example_3_1 anonymous functions. Comment one of the arrays names and observe behavior.
 */

const names = ['Alice', 'Bob', 'Charlie'];
//const names = [2,3,4];

names.forEach((name) => {
    console.log(name.toUpperCase());
    console.log(name.toFixed());
});