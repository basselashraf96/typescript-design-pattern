/**
 * 🏗️ **Inheritance in Object-Oriented Programming!**
 *
 * Inheritance allows a **child class (subclass)** to acquire properties and methods
 * from a **parent class (superclass)**, promoting **code reuse and extensibility**.
 *
 * This means a subclass **inherits common behaviors** while still being able to **define
 * its own unique functionality**.
 *
 * 🔹 **Hierarchical Structure** → A general class is extended by more specialized classes:
 *    - `Animal` 🐾 → Base class with `move()` behavior.
 *    - `Dog` 🐶 → Inherits `move()` and adds a new method `bark()`.
 *
 * 🔹 **Code Reusability** → Instead of rewriting `move()`, `Dog` **inherits it from `Animal`**,
 *    reducing duplication and improving maintainability.
 *
 * 🔹 **Extensibility** → New subclasses (e.g., `Cat`, `Bird`) can be added without modifying
 *    existing code, as long as they extend `Animal`.
 *
 * 🚀 **Result:** We create a **hierarchical relationship** where **common functionality is shared**,
 * and each subclass can **extend or modify behavior as needed**!
 */

// 🐾 **Base Class: Animal**
// Defines common properties and behaviors that all animals share.
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  /*  
       🚶 **Move Method**
       - Allows any animal to move a given distance.
       - `Dog` (subclass) **inherits** this method without rewriting it.  
    */
  move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}m`);
  }
}

/*  
     🐶 **Subclass: Dog (Extends Animal)**  
     - The `Dog` class **inherits** properties (`name`) and methods (`move()`) from `Animal`.  
     - It also adds a **new method (`bark()`)**, which is specific to dogs.  
  */
class Dog extends Animal {
  constructor(name: string = "Dog") {
    super(name); // Calls the `Animal` constructor to initialize `name`
  }

  /*  
       🗣️ **Bark Method**
       - A new behavior **specific to `Dog`**, not available in the `Animal` class.  
    */
  bark() {
    console.log("Woof! Woof!");
  }
}

/*  
     🏁 **Client Code Using Inheritance**  
     - We create a `Dog` instance and use both **inherited** (`move()`) and **unique** (`bark()`) methods.  
  */

// 🐕 **Creating a generic dog**
let someDog = new Dog(); // Uses default name "Dog"
someDog.bark(); // Calls `bark()` (specific to Dog)
someDog.move(10); // Calls `move()` (inherited from Animal)

// 🐕 **Creating a named dog: Rover**
let rover = new Dog("Rover"); // Custom name
rover.bark(); // Calls `bark()`
rover.move(10); // Calls `move()`
