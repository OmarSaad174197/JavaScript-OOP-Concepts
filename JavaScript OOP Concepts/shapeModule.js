// shape calss that represents a shape
class Shape {
    // Private property that represents the color of the shape
    #color;

    // Constructor
    constructor(color) {
        this.#color = color;
    }

    // getter method to get the color of the shape
    get Color() {
        return this.#color;
    }

    // setter method to set the color of the shape
    set Color(newColor) {
        this.#color = newColor;
    }

    // Method to draw the theape with a specific color
    DrawShape() {
        console.log(`Drawing a shape with color: ${this.#color}`);
    }
}
// Export the Shape class
export default Shape;