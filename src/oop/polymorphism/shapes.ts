/**  
 * 🎭 **Polymorphism in Object-Oriented Programming!**  
 *  
 * Polymorphism allows us to **treat objects of different classes** (e.g., `myCircle` & `myRectangle`)  
 * as instances of a **common superclass or interface** (e.g., `Shape`).  
 *  
 * This means we can call the **same methods** (`area()`, `parameter()`) on different shapes  
 * (`CircleShape`, `RectangleShape`) without worrying about their specific implementations.  
 *  
 * 🔹 **"Many Forms"** → The `Shape` interface is implemented in multiple ways:  
 *    - `CircleShape` 🟢 → Uses a formula for circle area & perimeter.  
 *    - `RectangleShape` 🔲 → Uses a formula for rectangle area & perimeter.  
 *  
 * 🔹 **Dynamic Behavior** → Functions like `calculateShapeArea()` call `area()` dynamically,  
 *    ensuring the correct formula is applied based on the shape type **at runtime**.  
 *  
 * 🚀 **Result:** We can write **generic, reusable, and scalable** code while keeping it  
 * **clean, modular, and extendable**!  
 */

// 🔷 **Interface for Shapes**
// Defines the required methods that all shapes must implement.
interface Shape {
  area(): number;
  parameter(): number;
}

/*  
 🔵 **Circle Class: Implements `Shape` Interface**  
 - This class provides its own implementation of `area()` and `parameter()`.  
 - Despite being a different shape, it **follows the same interface** as other shapes.  
*/
class CircleShape implements Shape {
  constructor(private radius: number) {}

  area(): number {
    return Math.PI * this.radius * this.radius;
  }

  parameter(): number {
    return 2 * Math.PI * this.radius;
  }
}

/*  
 🔲 **Rectangle Class: Implements `Shape` Interface**  
 - Like `Circle`, this class also implements `Shape`,  
   but provides its **own version** of `area()` and `parameter()`.  
 - Even though the logic differs, the interface remains the same!  
*/
class RectangleShape implements Shape {
  constructor(
    private width: number,
    private height: number,
  ) {}

  area(): number {
    return this.width * this.height;
  }

  parameter(): number {
    return 2 * (this.width + this.height);
  }
}

/*  
 🎯 **Polymorphism in Functions**  
 - These functions take any object that implements `Shape`.  
 - Whether it's a `Circle` or a `Rectangle`, the correct `area()` and `parameter()`  
   method will be called **dynamically** at runtime.  
 - This eliminates the need for `if-else` or `switch` statements for different shapes!  
*/
function calculateShapeArea(shape: Shape): number {
  return shape.area(); // Calls the appropriate `area()` method based on the object type
}

function calculateShapeParameter(shape: Shape): number {
  return shape.parameter(); // Calls the appropriate `parameter()` method dynamically
}

/*  
 🏁 **Client Code Using Polymorphism**  
 - We create different shape objects (`Circle`, `Rectangle`).  
 - We call the **same functions** (`calculateShapeArea`, `calculateShapeParameter`)  
   and let polymorphism determine which implementation is used!  
*/

// 🔵 **Working with a Circle**
const myCircle = new CircleShape(5);
console.log("Circle Area:", calculateShapeArea(myCircle)); // Calls `Circle.area()`
console.log("Circle Parameter:", calculateShapeParameter(myCircle)); // Calls `Circle.parameter()`

// 🔲 **Working with a Rectangle**
const myRectangle = new RectangleShape(4, 6);
console.log("Rectangle Area:", calculateShapeArea(myRectangle)); // Calls `Rectangle.area()`
console.log("Rectangle Parameter:", calculateShapeParameter(myRectangle)); // Calls `Rectangle.parameter()`
