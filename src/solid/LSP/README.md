# Liskov Substitution Principle (LSP) 🔄

## What is the Liskov Substitution Principle?  

The **Liskov Substitution Principle (LSP)** is one of the **five SOLID principles** of Object-Oriented Design (OOD).  
It states that **subtypes must be substitutable for their base types without altering the correctness of the program**.  

This means that **if class B is a subclass of class A**, then we should be able to use an instance of **B** anywhere an instance of **A** is expected, **without breaking the application**.

**Analogy:** Imagine a **universal remote control** 🎛️. It should work seamlessly with different TV brands (Samsung, LG, Sony).  
Similarly, a derived class **should work interchangeably** with its base class **without introducing unexpected behavior**.

## Why Use LSP?  

- ✅ **Ensures Correctness** – Subtypes should behave in a way that does not break existing functionality.  
- ✅ **Encourages Proper Inheritance** – Prevents bad inheritance that results in broken behavior.  
- ✅ **Improves Code Reusability** – Allows subclasses to be used interchangeably with their base class.  
- ✅ **Enhances Maintainability** – Helps keep systems predictable and easy to debug.  

## 🔥 Advantages of LSP  

- 🔹 **Promotes Code Consistency** – Subclasses adhere to the expected behavior of the base class.  
- 🔹 **Eliminates Unexpected Bugs** – Prevents unexpected changes when a subclass is used in place of its parent.  
- 🔹 **Supports Open/Closed Principle** – New subtypes can be added without modifying existing code.  
- 🔹 **Encourages Robust Design** – Enforces **proper inheritance** rather than misuse of subclassing.  

## Learn More  

For a deeper dive into **LSP in TypeScript**, check out these articles:  
🔗 [Liskov Substitution Principle (LSP)](https://cloudaffle.com/series/solid-design-principles/liskov-substitution-principle/)  
🔗 [Advantages of Liskov Substitution Principle](https://cloudaffle.com/series/solid-design-principles/advantages-liskov-substitution-principle/)
