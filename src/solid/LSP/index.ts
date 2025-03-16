/**
 * 🔄 **Liskov Substitution Principle (LSP) in Object-Oriented Programming!**
 *
 * The **Liskov Substitution Principle (LSP)** states that **subtypes must be substitutable for their base types**  
 * without altering the correctness of the program.
 *
 * This means that **if class B is a subclass of class A**, then we should be able to use an instance of **B**  
 * anywhere an instance of **A** is expected **without breaking the functionality**.
 *
 * 🔹 **"Substitutable Behavior"** → Any subclass of `PaymentProcessor` should function correctly wherever `PaymentProcessor` is used:
 *    - `CreditCardProcessor` 💳 → Processes payments via Credit Card.
 *    - `DebitCardProcessor` 💳 → Processes payments via Debit Card.
 *    - `PayPalProcessor` 🏦 → Processes payments via PayPal.
 *
 * 🔹 **Why Follow LSP?**
 *    - ✅ **Ensures Correctness** – Subtypes behave consistently with the base class.
 *    - ✅ **Encourages Proper Inheritance** – Prevents unexpected behavior when replacing a superclass with a subclass.
 *    - ✅ **Improves Code Reusability** – Subclasses can be used interchangeably with the base class.
 *    - ✅ **Enhances Maintainability** – Code remains predictable and easy to debug.
 *
 * 🔹 **Example:**
 *    - The `executePayment()` function should accept any `PaymentProcessor` without modifying its logic.
 *    - New payment methods (e.g., `BitcoinProcessor`) can be added **without breaking** the existing code.
 *
 * 🚀 **Result:** By ensuring that all `PaymentProcessor` subclasses follow the expected behavior,  
 * we maintain **a stable, extendable, and maintainable system**!
 */

// 🔷 **Abstract Payment Processor**
// Defines a contract for all payment methods.
abstract class PaymentProcessor {
    abstract processPayment(amount: number): void;
  }
  
  /*  
     💳 **Credit Card Processor (Extends PaymentProcessor)**  
     - Implements the `processPayment` method for credit card transactions.  
  */
  class CreditCardProcessor extends PaymentProcessor {
    processPayment(amount: number): void {
      console.log(`💳 Processing Credit Card Payment - Amount: $${amount}`);
    }
  }
  
  /*  
     💳 **Debit Card Processor (Extends PaymentProcessor)**  
     - Implements the `processPayment` method for debit card transactions.  
  */
  class DebitCardProcessor extends PaymentProcessor {
    processPayment(amount: number): void {
      console.log(`🏦 Processing Debit Card Payment - Amount: $${amount}`);
    }
  }
  
  /*  
     🏦 **PayPal Processor (Extends PaymentProcessor)**  
     - Implements the `processPayment` method for PayPal transactions.  
  */
  class PayPalProcessor extends PaymentProcessor {
    processPayment(amount: number): void {
      console.log(`🛒 Processing PayPal Payment - Amount: $${amount}`);
    }
  }
  
  /*  
     🎯 **Polymorphism in Action**
     - The `executePayment` function accepts **any payment processor** without needing modification.
     - This ensures that all subclasses can be used **interchangeably** (LSP in action!).
  */
  function executePayment(paymentProcessor: PaymentProcessor, amount: number): void {
    paymentProcessor.processPayment(amount);
  }
  
  /*  
     🏁 **Client Code Using LSP**  
     - The `executePayment` function works with **any PaymentProcessor**.  
     - We can easily introduce new payment methods **without modifying existing code**.  
  */
  
  // 💳 **Processing Payments**
  const creditCardProcessor = new CreditCardProcessor();
  const debitCardProcessor = new DebitCardProcessor();
  const payPalProcessor = new PayPalProcessor();
  
  executePayment(creditCardProcessor, 100); // Output: 💳 Processing Credit Card Payment - Amount: $100
  executePayment(debitCardProcessor, 50);   // Output: 🏦 Processing Debit Card Payment - Amount: $50
  executePayment(payPalProcessor, 150);     // Output: 🛒 Processing PayPal Payment - Amount: $150
  
  /*  
     🚀 **Liskov Substitution Principle (LSP) Maintained**
     - All subclasses (`CreditCardProcessor`, `DebitCardProcessor`, `PayPalProcessor`)  
       follow the behavior of `PaymentProcessor` **without altering functionality**.
     - This allows **seamless extension** while keeping the system **robust and predictable**.
  */
  