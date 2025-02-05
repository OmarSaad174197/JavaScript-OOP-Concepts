import Shape from './shapeModule.js';
// Circle class inherits from Shape
class Circle extends Shape {
    // Constructor
    constructor(color, radius, x, y) {
        // Call the parent class constructor
        super(color);
        this.radius = radius;
        this.x = x;
        this.y = y;
    }
    // GetArea function that calculates the area of the circle
    getArea() {
        // Call the DrawShape function from the parent class
        this.DrawShape();
        // PI (radius)^2
        return Math.PI * this.radius * this.radius; 
    }
}
// Export the Circle class
export default Circle;