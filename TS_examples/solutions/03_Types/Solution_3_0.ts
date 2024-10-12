/**
 * Task 3_0
 * Write a method, which takes text, change every letter to capital letter and return the following: <Hi, text in capital letters>.
 */

// Solution 1
const generateTextSol1 = (text: string): string => {
    return `Hi, ${text.toUpperCase()}`;
}

// Solution 2
function generateTextSol2(text: string): string {
    return `Hi, ${text.toUpperCase()}`;
}

console.log(generateTextSol1('mimi'));

console.log(generateTextSol2('mimi'));

// Throws TypeError
console.log(generateTextSol1(1));

console.log(generateTextSol2(2));