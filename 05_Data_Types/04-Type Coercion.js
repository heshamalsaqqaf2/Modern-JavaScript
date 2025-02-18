'use strict';

/** 
 * @summary 
 * Remember, in JavaScript, type coercion is like a box of chocolates -,
 * you never know what you're gonna get!,
 * (Unless you use strict equality ===, but we'll get to that later.)
 * While convenient, implicit coercion can lead to unexpected results, 
 * so it's important to be aware of how JavaScript handles different types in operations.
 * 
*/


console.log(5 + "5");   // Outputs: 55 (string)
console.log("5" - 3);   // Outputs: 2 (number)
console.log("5" * "3"); // Outputs: 15 (number)
console.log(true + 1);  // Outputs: 2 (number)
