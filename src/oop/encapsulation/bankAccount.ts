/**  
 * 🔒 **Encapsulation in Object-Oriented Programming!**  
 *  
 * Encapsulation is the practice of **hiding an object's internal state** and  
 * only allowing controlled access through **public methods**.  
 *  
 * In this example, the `BankAccount` class **encapsulates** the `_balance` property  
 * by making it `private`, ensuring that it **cannot** be accessed directly.  
 *  
 * 🔹 **How Encapsulation Works Here:**  
 *    - `_balance` is **private** → It **cannot** be modified directly from outside.  
 *    - `deposit(amount)` ➕ → Increases the balance in a controlled manner.  
 *    - `withdraw(amount)` ➖ → Allows withdrawal **only if** sufficient balance exists.  
 *    - `get balance()` 🔍 → Provides a **read-only** way to check the balance.  
 *  
 * 🔹 **Key Benefits of Encapsulation:**  
 *    ✅ **Protects Data Integrity** – Prevents unauthorized modifications.  
 *    ✅ **Restricts Direct Access** – Users cannot change `_balance` arbitrarily.  
 *    ✅ **Enhances Security** – Prevents unintended behavior by enforcing rules.  
 *    ✅ **Improves Maintainability** – Changes in internal logic **do not** affect external code.  
 *  
 * 🚀 **Result:** Users can only interact with the balance using controlled methods,  
 * ensuring **data consistency and security**!  
 */

class BankAccount {
  // 🔒 Private balance: Cannot be accessed directly from outside the class.
  private _balance: number = 0;

  /*  
       🎯 Constructor initializes the balance.  
       If no initial balance is provided, it defaults to 0.  
    */
  constructor(initialBalance: number = 0) {
    this._balance = initialBalance;
  }

  /*  
       ➕ **Deposit Method**  
       - Adds money to the account.  
       - Ensures controlled modification of `_balance`.  
    */
  public deposit(amount: number): void {
    this._balance += amount;
    console.log(`Deposited: ${amount}`);
  }

  /*  
       ➖ **Withdraw Method**  
       - Allows withdrawing money **only if** sufficient balance is available.  
       - Prevents overdrawing by checking `_balance` before withdrawing.  
    */
  public withdraw(amount: number): void {
    if (this._balance >= amount) {
      this._balance -= amount;
      console.log(`Withdrew: ${amount}`);
    } else {
      console.log("❌ Insufficient balance!");
    }
  }

  /*  
       🔍 **Getter for Balance**  
       - Provides a **read-only** way to check the current balance.  
       - `_balance` remains **private**, preventing direct modification.  
    */
  public get balance(): number {
    return this._balance;
  }
}

// 🎯 **Client Code**
const account = new BankAccount(5000); // Creating an account with an initial balance of 5000
account.deposit(100); // Depositing 100
account.withdraw(50); // Withdrawing 50

// ❌ Direct access to `_balance` is **not allowed**
// console.log(account._balance); // ❌ Error: Property '_balance' is private.

// ✅ Correct way to access balance using the getter method
console.log("Current Balance is:", account.balance);
