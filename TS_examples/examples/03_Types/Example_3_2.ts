/**
 * Example 3_2_1
 */

function print1(pt: {x:number, y: number, z?: number}) {
    console.log(pt.x + pt.y);
    console.log(pt.z);
}

console.log('Example 3_2_1');
//print1({x: 2};
console.log('------');
//print1({x: 2, y:6});
console.log('------');
//print1({x: 4, y: "test");
console.log('------');
//print1({x: 4, y: 2, z: false});
console.log('------');

/**
 * Example 3_2_2
 */
function print2(data: {firstname: string, lastname: string, age}) {
    console.log(`Firstname: ${data.firstname}`);
    console.log(`Lastname: ${data.lastname}`);
    console.log(`Age: ${data.age}`);
}

console.log('Example 3_2_2');
//print2({firstname: "test"});
console.log('------');
//print2({firstname: "test", lastname: 'test', age: "12"})
console.log('------');
//print2({firstname: "test", lastname: 'test', age: 12});
console.log('------');
