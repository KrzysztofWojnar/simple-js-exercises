/**
 * Example 4_1_1
 * Which element of enum is computed? Which is constant?
 */

enum E3 {
    A,
    D,
    C,
    B = "abcd".length
}


console.log(`A: ${E3.A}`);
console.log(`D: ${E3.D}`);
console.log(`C: ${E3.C}`);
console.log(`B: ${E3.B}`);
