// Importing the squareModule
import { Rectangle,Square } from "./squareModule";
// instantiating objects:
// Recatangle
let rect = new Rectangle ('red', 10, 10);
console.log("Rectangle Area:", rect.getArea());

// square
let sqr = new Square ('blue', 5);
console.log("Square Area:", sqr.getArea());