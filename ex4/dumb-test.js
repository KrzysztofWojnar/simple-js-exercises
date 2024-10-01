export function test(testCallback) {
    try {
        testCallback();
        console.log('\n\x1b[32mSuccess!\x1b[0m');
    } catch(e) {
        console.error(e.message);
    };
    process.stdout.write('\n');
}

function pass() {
    process.stdout.write('✅');
}

function fail(actual, expected) {
    process.stdout.write('❌');
    process.stdout.write('\n');
    console.error(
        'Expected: ' + expected + '\nActual:   ' + actual)
    throw new Error('Test failed');

}

export function expect(actual) {
    return {
        toBe(expected) {
            if (typeof actual !== typeof expected) {
                return fail(
                    `${actual} (${typeof actual})`,
                    `${expected} (${typeof expected})`
                )
            } 
            if (actual instanceof Object) {
                if (expected === null && actual === null) {
                    return pass();
                }
                if (expected instanceof Array) {
                    if (!(actual instanceof Array)) {
                        return fail(actual + ' of type ' + typeof actual, 'an array' )
                    }
                    if (expected.every((elem, index) => elem === actual[index])) {
                        return pass();
                    } else {
                        return fail(actual, expected)
                    }
                }
                throw new Error('Not implemented');
            } else {
                if (actual === expected) {
                    return pass();
                } else return fail(actual, expected);
            }

        }
    }    
}