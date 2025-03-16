/**
 * 📌 **Interface Segregation Principle (ISP) in Object-Oriented Programming!**
 *
 * The **Interface Segregation Principle (ISP)** states that **a class should not be forced to implement methods it does not use**.
 * Instead of large, general-purpose interfaces, we create **smaller, focused interfaces**.
 *
 * 🔹 **"Segregate Responsibilities"** → Instead of a single interface for all actions, we break it down:
 *    - `PostCreator` 📝 → Allows users to create posts.
 *    - `CommentCreator` 💬 → Allows users to create comments.
 *    - `PostSharer` 🔄 → Allows users to share posts.
 *
 * 🔹 **Why Follow ISP?**
 *    - ✅ **Prevents Unused Code** – Each class implements only the methods it needs.
 *    - ✅ **Reduces Dependencies** – Avoids unnecessary dependencies between unrelated functionalities.
 *    - ✅ **Enhances Maintainability** – Smaller, focused interfaces are easier to manage and update.
 *    - ✅ **Supports Scalability** – New features can be added without affecting unrelated parts of the system.
 *
 * 🔹 **Example:**
 *    - Instead of a single `User` interface with **all** actions, we separate them into **specific interfaces**.
 *    - This ensures that each user role **only implements the functionalities it needs**.
 *
 * 🚀 **Result:** By following ISP, we create **flexible, modular, and maintainable code**!
 */

// 🔷 **Post Interface**
// Defines the structure for a post.
interface Post {
    title: string;
    content: string;
  }
  
  // 💬 **Comment Interface**
  // Defines the structure for a comment.
  interface UserComment {
      title: string;
      content: string;
    }
  
  /*  
     📝 **PostCreator Interface**  
     - Allows creating posts.  
     - Used by `Admin`, but **not** `RegularUser`.  
  */
  interface PostCreator {
    createPost(post: Post): void;
  }
  
  /*  
     💬 **CommentCreator Interface**  
     - Allows creating comments.  
     - Used by both `Admin` and `RegularUser`.  
  */
  interface CommentCreator {
    createComment(comment: UserComment): void;
  }
  
  /*  
     🔄 **PostSharer Interface**  
     - Allows sharing posts.  
     - Used by both `Admin` and `RegularUser`.  
  */
  interface PostSharer {
    sharePosts(post: Post): void;
  }
  
  /*  
     👑 **Admin Class (Implements All Three Interfaces)**  
     - Can **create posts**, **create comments**, and **share posts**.  
     - Fully privileged user.  
  */
  class Admin implements PostCreator, CommentCreator, PostSharer {
    createPost(post: Post): void {
      console.log("👑 Admin is creating a post");
    }
  
    createComment(comment: UserComment): void {
      console.log("👑 Admin is creating a comment");
    }
  
    sharePosts(post: Post): void {
      console.log("👑 Admin is sharing a post");
    }
  }
  
  /*  
     👤 **RegularUser Class (Implements Only Two Interfaces)**  
     - Can **create comments** and **share posts**, but **cannot create posts**.  
     - Restricted functionality compared to `Admin`.  
  */
  class RegularUser implements CommentCreator, PostSharer {
    createComment(comment: UserComment): void {
      console.log("👤 Regular User is creating a comment");
    }
  
    sharePosts(post: Post): void {
      console.log("👤 Regular User is sharing a post");
    }
  }
  
  /*  
     🏁 **Client Code Using ISP**  
     - The `Admin` class can create posts, create comments, and share posts.  
     - The `RegularUser` class can only create comments and share posts.  
     - Both classes implement **only the functionalities they need**, following ISP.  
  */
  
  // 🔷 **Test Cases**
  const admin = new Admin();
  const regularUser = new RegularUser();
  
  // 📝 **Admin Creating a Post**
  admin.createPost({ title: "ISP in TypeScript", content: "Learn how to apply ISP in OOP!" });
  
  // 💬 **Admin & Regular User Creating Comments**
  admin.createComment({ title: "Great Post!", content: "Very useful information." });
  regularUser.createComment({ title: "Nice!", content: "This helped a lot." });
  
  // 🔄 **Admin & Regular User Sharing Posts**
  admin.sharePosts({ title: "SOLID Principles", content: "Understanding the importance of SOLID principles." });
  regularUser.sharePosts({ title: "OOP Basics", content: "Learning Object-Oriented Programming." });
  
  /*  
     🚀 **Interface Segregation Principle (ISP) Maintained**
     - The `Admin` class **implements all three interfaces** because it needs all functionalities.
     - The `RegularUser` class **implements only two interfaces** because it does not need `createPost()`.
     - If we introduce new roles (e.g., `Moderator`), we can **easily add new interfaces** without affecting existing classes.
  */
  