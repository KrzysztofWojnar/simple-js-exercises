/**
 * Task 4_0
 * Ist object c correct?
 */

// --------- Data to task -------------
enum ShapeKind {
    Circle,
    Square
}

interface Circle {
    kind: ShapeKind.Circle,
    radius: 100
}

interface Square {
    kind: ShapeKind.Square,
    sideLength: number
}


// Object c

let c: Circle = {
    kind: ShapeKind.Square,
    radius: 100
}