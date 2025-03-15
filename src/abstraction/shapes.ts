/* 
   🏗️ The `Shape` interface defines a contract for all shapes. 
   Any class that implements this interface **must** provide its own 
   implementation for calculating `area` and `parameter` (perimeter).
   This is **abstraction** in action—hiding the details of how each shape 
   does its math while ensuring consistency across all shapes. 🎯
*/
interface Shape {
    area(): number;
    parameter(): number;
  }
  
  /* 
     🔵 The `Circle` class is a concrete implementation of `Shape`.
     It provides specific formulas to compute the **area** and **perimeter** of a circle.
     Thanks to abstraction, the client code doesn’t need to know these formulas—it just works! 🚀
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
     🔲 The `Rectangle` class is another `Shape` implementation.
     It defines its own way of computing the **area** and **perimeter**.
     Again, the details are hidden from the client, ensuring a smooth experience. 🏆
  */
  class Rectangle implements Shape {
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
     🎯 These utility functions leverage abstraction to calculate the **area** and **perimeter** 
     of **any** shape, without caring about whether it’s a circle, rectangle, or something else!
     This makes the code flexible, reusable, and easy to extend. 🔥
  */
  function calculateShapeArea(shape: Shape): number {
    return shape.area();
  }
  
  function calculateShapeParameter(shape: Shape): number {
    return shape.parameter();
  }
  
  /* 
     🏁 Client code in action! Let’s create a circle and a rectangle,
     then calculate their **area** and **perimeter** using our abstracted functions. 🚀
  */
  const circle = new Circle(5);
  console.log("Circle Area:", calculateShapeArea(circle));
  console.log("Circle Parameter:", calculateShapeParameter(circle));
  
  const rectangle = new Rectangle(4, 6);
  console.log("Rectangle Area:", calculateShapeArea(rectangle));
  console.log("Rectangle Parameter:", calculateShapeParameter(rectangle));
  