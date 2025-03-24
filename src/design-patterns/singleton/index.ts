/**  
 * 🎭 **Singleton Design Pattern!**  
 *  
 * The **Singleton Design Pattern** ensures that a class has **only one instance**.  
 * This instance is created only when it's needed, and is accessible globally.  
 *  
 * 🔹 **Single Instance** → The class ensures that there is **only one instance** of the class throughout the application.  
 *    - This is useful when you need to control access to shared resources (e.g., database connection).  
 *  
 * 🔹 **Global Access** → The unique instance can be accessed globally through a static method.  
 *    - Any part of the application can get access to this instance without creating a new one.  
 *  
 * 🚀 **Result:** The Singleton pattern helps to **save resources** and **manage shared states** efficiently,  
 * while ensuring a **single point of control** over the resource.  
 */

// 🔷 **Singleton Class**
// This class ensures that only one instance of the class is created.
class Singleton {
    // 🔸 **Static Instance** – Holds the single instance of the class.
    private static intance: Singleton;
    
    // 🔸 **Static Value** – A static variable to store the value, accessible via the Singleton instance.
    private static _value: number;
  
    // 🔹 **Private Constructor** – Prevents instantiation from outside the class.
    private constructor() {}
  
    /**  
     * 🔸 **getInstance Method**  
     * Returns the single instance of the class.  
     * If the instance doesn't exist yet, it creates one.  
     * This ensures only one instance of the class is created.
     */
    public static getInstance(): Singleton {
      if (!Singleton.intance) {
        Singleton.intance = new Singleton(); // Lazy initialization of the instance.
      }
      return Singleton.intance;
    }
  
    /**  
     * 🔸 **Setter for Value**  
     * Sets the static value of the Singleton.  
     * This setter ensures that the value can be updated globally through the Singleton instance.
     */
    set value(value: number) {
      Singleton._value = value;
    }
  
    /**  
     * 🔸 **Getter for Value**  
     * Retrieves the static value of the Singleton.  
     * This getter ensures that the value is accessed from the same instance.
     */
    get value() {
      return Singleton._value;
    }
  }
  
  /**  
   * 🎯 **Singleton in Action**  
   * We are creating two instances of the Singleton class, but both refer to the **same instance**.  
   * Any changes made to the value through one instance are reflected across all references to the Singleton.  
   */
  
  // 🔸 **Getting the Singleton Instance**  
  let instance1 = Singleton.getInstance(); // First access to the Singleton instance.
  let instance2 = Singleton.getInstance(); // Second access to the Singleton, same instance as instance1.
  
  // 🔸 **Setting and Getting Values**  
  instance1.value = 10; // Sets the value through the first instance.
  console.log(instance1.value); // Logs the value, which is 10.
  console.log(instance2.value); // Logs the value, which is also 10, showing that both instances share the same state.
  
  // 🔸 **Equality Check**  
  console.log(instance1 === instance2); // true, both instances refer to the same object.
  