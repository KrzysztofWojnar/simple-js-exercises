/**
 * Example 4_1_1
 * Which element of enum is computed? Which is constant? What's going on with C?
 */

enum E3 {
    A,
    D,
    B = "abc".length,
    C
}


console.log(`A: ${E3.A}`);
console.log(`D: ${E3.D}`);
console.log(`B: ${E3.B}`);
console.log(`C: ${E3.C}`);