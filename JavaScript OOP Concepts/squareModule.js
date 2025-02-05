import Shape from './shapeModule.js';

// Rectangle class inherits from Shape
class Rectangle extends Shape {
    constructor(color, width, height) {
        // Calling the parent class constructor
        super(color);
        this.width = width;
        this.height = height;
    }
    getArea() {
        // Call the DrawShape function from the parent class
        this.DrawShape();
        return this.width * this.height;
    }
}
// Square class inherits from Rectangle
class Square extends Rectangle {
    // Constructor
    constructor(color, sLength) {
        // Calling the Rectangle constructor with equal width and height
        super(color, sLength, sLength);
    }
}
export { Rectangle, Square };