/**  
 * 🎭 **Logger Class Using Singleton Design Pattern!**  
 *  
 * The `Logger` class is a perfect example of the **Singleton Design Pattern** in action.  
 * This class ensures that only one instance of the Logger exists, even if multiple parts of the application request it.  
 *  
 * 🔹 **Single Instance** → There is **only one Logger instance** in the entire application.  
 * This ensures that logging messages are always handled by the same instance, preventing potential conflicts or duplicate logs.
 *  
 * 🔹 **Global Access** → The `getInstance()` method provides global access to the single Logger instance,  
 * making it available anywhere in the application without the need to create a new one.
 *  
 * 🚀 **Result:** This Singleton pattern ensures that the logging system is consistent and efficient throughout the application.  
 */

// 🔷 **Logger Class**
// Implements the Singleton Design Pattern to ensure a single instance of the Logger class.
class Logger {
    /**  
     * The `static` keyword ensures that `instance` is shared across all references to the `Logger` class.  
     * It stores the single instance of the Logger, ensuring that only one Logger instance is ever created.
     * The `private` keyword restricts direct access to `instance` from outside the class.
     */
    private static instance: Logger;
  
    /**  
     * The constructor is marked as `private` to prevent the creation of new instances outside the class.  
     * This is a critical feature of the Singleton pattern to ensure that the class always has a single instance.
     */
    private constructor() {}
  
    /**  
     * This `static` method provides access to the Logger instance.  
     * If the instance doesn't exist, it creates a new one.  
     * The method is `static` to allow access to the instance without needing to instantiate the class.
     */
    public static getInstance(): Logger {
      if (!Logger.instance) {
        Logger.instance = new Logger(); // Creates the instance only when it's first needed.
      }
      return Logger.instance;
    }
  
    /**  
     * `log` method allows logging messages with a timestamp.  
     * Since the Logger is a singleton, the same instance is responsible for handling all logs.
     */
    public log(message: string): void {
      const timestamp = new Date();
      console.log(`[${timestamp.toLocaleString()}] - ${message}`);
    }
  }
  
  /**  
   * 🎯 **Singleton in Action**  
   * Here, we are demonstrating that the same Logger instance is used across different parts of the application.  
   * Even though we call `Logger.getInstance()` multiple times, it always returns the **same instance**.  
   */
  
  // 🔸 **Getting the Logger Instance**
  const logger1 = Logger.getInstance(); // First access to the Logger instance.
  logger1.log("First log message"); // Logs the first message.
  
  // 🔸 **Getting the Logger Instance Again**
  const logger2 = Logger.getInstance(); // Same instance as logger1.
  logger2.log("Second log message"); // Logs the second message.
  
  // 🔸 **Equality Check**
  console.log(logger1 === logger2); // true, both references point to the same instance.
  