'use strict';

/** 
 * @description Implicit Conversion Rules:
 * 
 *      1- When adding (+) with a string, conversion to string takes precedence.
 *      2- For other arithmetic operators (`,` , `/`), conversion to number takes precedence.
 *      3- Loose equality (==) performs type coercion, strict equality (===) does not.
 * 
*/

// String concatenation
console.log("3" + 4);        // "34"
console.log(4 + "3");        // "43"
console.log("3" + true);     // "3true"

// Numeric conversion
console.log("6" - 2);        // 4
console.log("6" * "2");      // 12

// Equality operators
console.log("5" == 5);       // true
console.log("5" === 5);      // false