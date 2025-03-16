/**
 * 📌 **Single Responsibility Principle (SRP) in Object-Oriented Programming!**
 *
 * The **Single Responsibility Principle (SRP)** states that **a class should have only one reason to change**.
 * This means each class should be **focused on a single responsibility** and **not mix concerns**.
 *
 * 🔹 **"One Responsibility"** → Each class should have a clear, well-defined purpose:
 *    - `BlogPost` 📝 → Manages blog post data (title, content).
 *    - `BlogPostDisplay` 🎨 → Handles the **presentation** of a blog post.
 *
 * 🔹 **Why Follow SRP?**
 *    - ✅ **Improves Code Maintainability** – Changes in content storage **don’t** affect the display logic.
 *    - ✅ **Encourages Modularity** – Smaller, focused classes make debugging and testing easier.
 *    - ✅ **Enhances Reusability** – The `BlogPostDisplay` class can be used for different UI views.
 *
 * 🔹 **Example:**
 *    - The `BlogPost` class should **not** handle HTML formatting—it should only store blog content.
 *    - The `BlogPostDisplay` class should **only** generate HTML views, without modifying post data.
 *
 * 🚀 **Result:** By keeping responsibilities separate, we create **clean, scalable, and maintainable code**!
 */

// 🔷 **BlogPost Class: Manages Blog Post Data**
// Stores essential information (`title`, `content`) and methods for content management.
class BlogPost {
  constructor(
    public title: string,
    public content: string,
  ) {}

  /*  
       📝 **Content Management Methods**
       - These methods handle post creation, updating, and deletion.  
       - The `BlogPost` class **does not** deal with display logic.  
    */
  createPost() {
    console.log(`📝 Blog post "${this.title}" has been created.`);
  }

  updatePost(newContent: string) {
    this.content = newContent;
    console.log(`✏️ Blog post "${this.title}" has been updated.`);
  }

  deletePost() {
    console.log(`❌ Blog post "${this.title}" has been deleted.`);
  }
}

/*  
     🎨 **BlogPostDisplay Class: Handles Post Presentation**  
     - This class is responsible **only for displaying** a blog post.  
     - It does **not** modify or store the post’s content.  
  */
class BlogPostDisplay {
  constructor(private post: BlogPost) {}

  /*  
       📺 **Display Method**
       - Generates an HTML representation of the blog post.  
       - Follows SRP by **keeping display logic separate from content logic**.  
    */
  displayHTML(): string {
    return `<h1>${this.post.title}</h1><p>${this.post.content}</p>`;
  }
}

/*  
     🏁 **Client Code Using SRP**  
     - The `BlogPost` class manages blog content.  
     - The `BlogPostDisplay` class handles rendering.  
     - They are **loosely coupled**, making the system **easier to extend and maintain**.  
  */

// 📝 **Creating a Blog Post**
const post = new BlogPost(
  "Understanding SRP",
  "SRP helps us write better code!",
);
post.createPost(); // Output: 📝 Blog post "Understanding SRP" has been created.

// 🎨 **Displaying the Blog Post**
const postDisplay = new BlogPostDisplay(post);
console.log(postDisplay.displayHTML());
// Output: <h1>Understanding SRP</h1><p>SRP helps us write better code!</p>

// ✏️ **Updating the Blog Post**
post.updatePost("SRP ensures code maintainability and modularity.");
console.log(postDisplay.displayHTML());
// Output: <h1>Understanding SRP</h1><p>SRP ensures code maintainability and modularity.</p>

// ❌ **Deleting the Blog Post**
post.deletePost(); // Output: ❌ Blog post "Understanding SRP" has been deleted.
