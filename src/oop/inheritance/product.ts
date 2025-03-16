/**  
 * 🏗️ **Inheritance in Object-Oriented Programming!**  
 *  
 * Inheritance allows subclasses to **reuse** the properties and behaviors of a **parent class**,  
 * promoting **code reusability** and **extensibility**.  
 *  
 * In this example, `Product` serves as a **base class**, and `Book` & `Electronic`  
 * extend it by adding their **own unique attributes and behavior**.  
 *  
 * 🔹 **Hierarchical Structure** → A general class is extended by more specialized classes:  
 *    - `Product` 📦 → Base class defining `id`, `price`, and `description`.  
 *    - `Book` 📚 → Inherits `Product` properties and adds `title` & `author`.  
 *    - `Electronic` ⚡ → Inherits `Product` properties and adds `brand` & `model`.  
 *  
 * 🔹 **Code Reusability** → Instead of rewriting common functionality, subclasses  
 *    **reuse inherited methods** while extending behavior as needed.  
 *  
 * 🔹 **Extensibility** → New subclasses (e.g., `Clothing`, `Furniture`)  
 *    can be introduced **without modifying existing code**.  
 *  
 * 🚀 **Result:** We create a **hierarchical relationship** where **common functionality is shared**,  
 * and each subclass can **extend or modify behavior as needed**!  
 */

// 🔷 **Base Class: Product**  
// Defines core properties (`id`, `price`, `description`)  
// and a `display()` method to show product details.  
class Product {
    constructor(
      public id: string,
      public price: number,
      public description: string
    ) {}
  
    /*  
       🖥️ **Display Method**
       - Prints product details in a standard format.  
       - `Book` and `Electronic` will **inherit** this method.  
    */
    display(): void {
      console.log(`📦 ID: ${this.id}, 💲Price: $${this.price}, 📝 Description: ${this.description}`);
    }
  }
  
  /*  
     📚 **Subclass: Book (Extends Product)**  
     - Inherits properties from `Product` (`id`, `price`, `description`).  
     - Adds two **new properties**: `title` & `author`.  
     - Overrides `display()` to include `author` and `title`.  
  */
  class Book extends Product {
    constructor(
      public id: string,
      public price: number,
      public description: string,
      public title: string,
      public author: string
    ) {
      super(id, price, description); // Calls `Product` constructor
    }
  
    /*  
       🖥️ **Override Display Method**
       - Calls `super.display()` to retain the original functionality.  
       - Adds **author information** specific to books.  
    */
    display(): void {
      super.display();
      console.log(`✍️ Author: ${this.author}, 📖 Title: ${this.title}`);
    }
  }
  
  /*  
     ⚡ **Subclass: Electronic (Extends Product)**  
     - Inherits `id`, `price`, `description` from `Product`.  
     - Adds two **new properties**: `brand` & `model`.  
     - Overrides `display()` to show electronic-specific details.  
  */
  class Electronic extends Product {
    constructor(
      public id: string,
      public price: number,
      public description: string,
      public brand: string,
      public model: string
    ) {
      super(id, price, description); // Calls `Product` constructor
    }
  
    /*  
       🖥️ **Override Display Method**
       - Calls `super.display()` to retain the original functionality.  
       - Adds **brand and model information** specific to electronics.  
    */
    display(): void {
      super.display();
      console.log(`🏷️ Brand: ${this.brand}, 🔧 Model: ${this.model}`);
    }
  }
  
  /*  
     🏁 **Client Code Using Inheritance**  
     - We create instances of `Book` and `Electronic`, both inheriting from `Product`.  
     - Each instance calls `display()`, executing its specialized version.  
  */
  
  // 📚 **Creating a Book**
  let book = new Book("1", 19.99, "A good book", "John Doe's Book", "John Doe");
  book.display();
  // Output:
  // 📦 ID: 1, 💲Price: $19.99, 📝 Description: A good book
  // ✍️ Author: John Doe, 📖 Title: John Doe's Book
  
  // ⚡ **Creating an Electronic Product**
  let laptop = new Electronic("2", 2999, "This is a good Laptop", "Dell", "XPS 15");
  laptop.display();
  // Output:
  // 📦 ID: 2, 💲Price: $2999, 📝 Description: This is a good Laptop
  // 🏷️ Brand: Dell, 🔧 Model: XPS 15
  