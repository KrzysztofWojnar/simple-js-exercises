/**
 * Example 3_4_1
 * Type intersection
 */

type A = {
    a: string
}

type B = {
    b: number
}

type C = A & B;

function hello1(c: C) {
    console.log(c.a);
    console.log(c.b);
}
console.log('Example 3_4_1');
hello1({a: "test", b:2 });
console.log('------');
hello1({a: 2, b: 3});
console.log('------');

/**
 * Example 3_4_2
 */

interface D {
    d: string
}

interface E extends D {
    e: number
}

function hello2(e: E) {
    console.log(e.d);
    console.log(e.e);
}

console.log('Example 3_4_2');
hello2({e: "test", d:2 });
console.log('------');
hello2({e: 2, d: "test"});
console.log('------');