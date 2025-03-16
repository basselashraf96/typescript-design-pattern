/**  
 * 🎭 **Abstraction in Object-Oriented Programming!**  
 *  
 * Abstraction is the concept of **hiding implementation details** and exposing only  
 * the essential features of an object. It allows users to work with **high-level**  
 * interfaces while keeping the complex logic **encapsulated** within classes.  
 *  
 * 🔹 **The `Shape` Interface** → Defines a **common blueprint** for all shapes.  
 *    - It ensures that every shape **must** implement `area()` and `parameter()`.  
 *    - The user does not need to know **how** these methods are implemented.  
 *  
 * 🔹 **Concrete Implementations**:  
 *    - `Circle` 🟢 → Implements the formulas for a circle’s area and perimeter.  
 *    - `Rectangle` 🔲 → Implements the formulas for a rectangle’s area and perimeter.  
 *  
 * 🔹 **Key Benefits of Abstraction:**  
 *    ✅ **Hides Complexity** – Users only interact with `Shape`, not the underlying logic.  
 *    ✅ **Improves Code Maintainability** – Changes in implementation **do not affect users**.  
 *    ✅ **Enhances Reusability** – New shapes can be added without modifying existing code.  
 *  
 * 🚀 **Result:** The user does not need to know how the `Circle` or `Rectangle`  
 * compute their area or perimeter—**they just call the methods and get results!**  
 */

// 🔷 **Abstract Shape Interface**  
// This enforces a structure for all shapes without specifying **how** they compute their area or perimeter.  
interface Shape {
  area(): number;
  parameter(): number;
}

/*  
   🔵 **Circle Class: Implements Shape Interface**  
   - The internal calculation logic is **hidden** from the user.  
   - The user only needs to know that `Circle` supports `area()` and `parameter()`,  
     without worrying about how they are implemented.  
*/
class Circle implements Shape {
  constructor(private radius: number) {}

  area(): number {
    return Math.PI * this.radius * this.radius;
  }

  parameter(): number {
    return 2 * Math.PI * this.radius;
  }
}

/*  
   🔲 **Rectangle Class: Implements Shape Interface**  
   - Like `Circle`, `Rectangle` follows the same interface,  
     but has **its own unique implementation** of `area()` and `parameter()`.  
   - The abstraction allows different shapes to be used **interchangeably**.  
*/
class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  area(): number {
    return this.width * this.height;
  }

  parameter(): number {
    return 2 * (this.width + this.height);
  }
}

/*  
   🎯 **Abstraction in Functions**  
   - These functions **only interact with the `Shape` interface**,  
     without knowing the actual type of shape being used.  
   - The implementation details of `area()` and `parameter()` remain **hidden**.  
*/
function computeShapeArea(shape: Shape): number {
  return shape.area(); // Calls the appropriate method dynamically (abstraction in action!)
}

function computeShapeParameter(shape: Shape): number {
  return shape.parameter(); // Works for any shape, regardless of how it's implemented
}

/*  
   🏁 **Client Code Using Abstraction**  
   - The user doesn't need to know the internal logic of `Circle` or `Rectangle`.  
   - They just use `computeShapeArea()` and `computeShapeParameter()` with any shape!  
*/

// 🔵 **Working with a Circle**  
const circle = new Circle(5);
console.log("Circle Area:", computeShapeArea(circle));  // Calls `Circle.area()`
console.log("Circle Parameter:", computeShapeParameter(circle));  // Calls `Circle.parameter()`

// 🔲 **Working with a Rectangle**  
const rectangle = new Rectangle(4, 6);
console.log("Rectangle Area:", computeShapeArea(rectangle));  // Calls `Rectangle.area()`
console.log("Rectangle Parameter:", computeShapeParameter(rectangle));  // Calls `Rectangle.parameter()`)
