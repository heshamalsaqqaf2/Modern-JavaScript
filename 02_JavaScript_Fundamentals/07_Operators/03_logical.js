'use strict';

/** 
 * @description Key points:
 *      Logical operators don't always return boolean values in JavaScript.
 *      They use short-circuit evaluation: 
 *          * if the result can be determined from the first operand, the second operand is not evaluated.
 *      When used with non-boolean values, they return the last evaluated operand.
 * 
*/

let p = true;
let q = false;

console.log(p && q);  // Logical AND: false
console.log(p || q);  // Logical OR: true
console.log(!p);      // Logical NOT: false

// Short-circuit evaluation
console.log(true || anything);  // true (second operand is not evaluated)
console.log(false && anything); // false (second operand is not evaluated)

// Truthy and falsy values
console.log(5 && 2);            // 2 (returns the last truthy value)
console.log(0 || 1);            // 1 (returns the first truthy value)
console.log(null || 'default'); // 'default'