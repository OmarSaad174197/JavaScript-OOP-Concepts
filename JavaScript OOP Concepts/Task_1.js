import Shape from './shapeModule.js';
// Create a new Shape instance
let myShape = new Shape("red");

// Use the getter to retrieve the color
console.log(myShape.Color);

// Use the setter to change the color
myShape.Color = "blue";

// Call the DrawShape function
myShape.DrawShape();