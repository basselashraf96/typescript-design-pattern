/**
 * 🔄 **Open/Closed Principle (OCP) in Object-Oriented Programming!**
 *
 * The **Open/Closed Principle (OCP)** states that **a class should be open for extension but closed for modification**.
 * This means we should be able to **add new functionality** without altering existing code.
 *
 * 🔹 **"Extend Without Modifying"** → Instead of modifying a class to support new features, we extend it:
 *    - `Customer` 🎟️ → Defines a common interface for different customer types.
 *    - `RegularCustomer` 🏷️ → Implements `Customer` with a 10% discount.
 *    - `PremiumCustomer` 🌟 → Implements `Customer` with a 20% discount.
 *
 * 🔹 **Why Follow OCP?**
 *    - ✅ **Prevents Code Modification Risks** – Reduces the chances of breaking existing functionality.
 *    - ✅ **Encourages Scalability** – Easily introduce new features without modifying the base logic.
 *    - ✅ **Supports Code Reusability** – Promotes the use of interfaces and polymorphism for flexible design.
 *
 * 🔹 **Example:**
 *    - A traditional `Discount` class might rely on `if-else` checks for customer types (violating OCP).
 *    - Instead, we create separate **customer types** that implement a shared interface.
 *
 * 🚀 **Result:** By making the base class extendable, we allow new behavior to be added **without modifying existing code**, ensuring **stability and flexibility**!
 */

// 🔴 **Bad Example (Violates OCP)**
// This class **requires modification** every time a new customer type is introduced.
class BadDiscount {
    getDiscount(customerType: "premium" | "regular"): number {
      if (customerType === "premium") {
        return 20;
      } else if (customerType === "regular") {
        return 10;
      }
      return 0; // ❌ New customer types would require modifying this method.
    }
  }
  
  /*  
       🔷 **Good Example (Follows OCP)**  
       - The `Customer` interface allows **new customer types** to be introduced **without modifying** existing logic.  
       - Instead of `if-else` statements, we use **polymorphism** for dynamic behavior.  
  */
  
  // 🎟️ **Customer Interface**
  // Defines a contract that all customer types must follow.
  interface Customer {
    giveDiscount(): number;
  }
  
  /*  
     🏷️ **Regular Customer (Extends Customer Interface)**  
     - Returns a fixed 10% discount.  
  */
  class RegularCustomer implements Customer {
    giveDiscount(): number {
      return 10;
    }
  }
  
  /*  
     🌟 **Premium Customer (Extends Customer Interface)**  
     - Returns a fixed 20% discount.  
  */
  class PremiumCustomer implements Customer {
    giveDiscount(): number {
      return 20;
    }
  }
  
  /*  
     💰 **Discount Class (Follows OCP)**
     - Works with **any customer type** that implements `Customer`.
     - Does **not** need modification to support new customer types.
  */
  class Discount {
    giveDiscount(customer: Customer): number {
      return customer.giveDiscount();
    }
  }
  
  /*  
     🏁 **Client Code Using OCP**  
     - The `Discount` class remains **unchanged**, while new customer types are **easily added**.  
  */
  
  // 🌟 **Applying Discounts**
  const premiumCustomer: Customer = new PremiumCustomer();
  const regularCustomer: Customer = new RegularCustomer();
  const discount: Discount = new Discount();
  
  console.log(`Premium Customer Discount: ${discount.giveDiscount(premiumCustomer)}%`); // Output: Premium Customer Discount: 20%
  console.log(`Regular Customer Discount: ${discount.giveDiscount(regularCustomer)}%`); // Output: Regular Customer Discount: 10%
  