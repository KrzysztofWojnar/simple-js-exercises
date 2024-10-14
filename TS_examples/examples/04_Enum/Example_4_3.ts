enum E {
    Foo,
    Bar
}

function f(x: E) {
    if (x!== E.Foo || x!== E.Bar) {
        console.log('Test');
    }
}