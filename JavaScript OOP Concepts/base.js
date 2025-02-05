import { Rectangle, Square } from './squareModule.js';
import Circle from './circleModule.js';
// array of objects from classes
let shapes = [
    new Rectangle('red', 10, 5),
    new Rectangle('blue', 7, 7),
    new Square('green', 5),
    new Square('yellow', 6),
    new Circle('purple', 10, 2, 5)
];

shapes.forEach(shape => {
    console.log(`Area of the shape: ${shape.getArea()}`);
});