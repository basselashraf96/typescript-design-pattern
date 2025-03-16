# Interface Segregation Principle (ISP) 📌

## What is the Interface Segregation Principle?  

The **Interface Segregation Principle (ISP)** is one of the **five SOLID principles** of Object-Oriented Design (OOD).  
It states that **a class should not be forced to implement interfaces it does not use**.  

This means that **large, general-purpose interfaces should be broken down into smaller, more specific ones** to ensure that implementing classes **only depend on the methods they actually need**.

**Analogy:** Imagine a **restaurant menu** 🍽️. Instead of a single menu for all meals (breakfast, lunch, dinner), the restaurant provides separate menus for each meal.  
Similarly, an interface should be **segregated** into smaller, focused parts **so that a class only implements what is relevant to it**.

## Why Use ISP?  

- ✅ **Prevents Unused Code** – Classes only implement methods they actually use.  
- ✅ **Reduces Dependencies** – Avoids unnecessary dependencies between unrelated functionalities.  
- ✅ **Enhances Maintainability** – Smaller, focused interfaces are easier to manage and update.  
- ✅ **Supports Scalability** – New features can be added without affecting unrelated parts of the system.  

## 🔥 Advantages of ISP  

- 🔹 **Improves Code Organization** – Keeps interfaces clear, concise, and easy to understand.  
- 🔹 **Minimizes Changes to Unrelated Code** – Updating one interface doesn’t affect unrelated classes.  
- 🔹 **Prevents Violations of Liskov Substitution Principle (LSP)** – Helps maintain correct behavior across different implementations.  
- 🔹 **Encourages Modular Design** – Promotes **decoupling** between different parts of the system.  

## Learn More  

For a deeper dive into **ISP in TypeScript**, check out these articles:  
🔗 [Interface Segregation Principle (ISP)](https://cloudaffle.com/series/solid-design-principles/interface-segregation-principle/)  
🔗 [Advantages of Interface Segregation Principle](https://cloudaffle.com/series/solid-design-principles/advantages-interface-segregation-principle/)
