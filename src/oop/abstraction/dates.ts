/*  
   🏗️ **Abstraction in Action!**  
   Instead of manually computing dates using complex mathematical formulas,  
   we leverage JavaScript’s built-in `Date` object, which provides a **simplified**  
   and **high-level interface** to work with dates effortlessly.
*/

// 🎯 Creating a `Date` instance to get the current date & time.
const date = new Date();

/*  
   📅 Extracting specific components from the `Date` object.  
   JavaScript internally manages all the complexities, such as time zones and leap years!  
*/
const currentDate = date.getDate(); // Retrieves the day of the month
const currentMonth = date.getMonth() + 1; // Months are zero-based, so we add 1
const currentYear = date.getFullYear(); // Retrieves the four-digit year

// 🖨️ Printing the current date in a user-friendly format.
console.log(`Today is: ${currentDate}/${currentMonth}/${currentYear}`);

/*  
   🔄 **Working with a Specific Date!**  
   We can also create a `Date` object using a **timestamp** (milliseconds since Jan 1, 1970).  
   This showcases **abstraction**—we don't need to manually calculate the corresponding day,  
   month, or year; JavaScript does it for us!
*/

// 🎯 Creating a `Date` instance from a given timestamp.
const specificDate = new Date(1810138921000);

/*  
   📅 Extracting the specific date details.  
   The `Date` object abstracts away all the conversions and calculations.
*/
const specificDay = specificDate.getDate();
const specificMonth = specificDate.getMonth() + 1;
const specificYear = specificDate.getFullYear();

// 🖨️ Printing the specific date in a human-readable format.
console.log(`Date is: ${specificDay}/${specificMonth}/${specificYear}`);
