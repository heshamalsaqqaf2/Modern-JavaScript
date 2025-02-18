'use strict';
/** 
 * @description Truthy and Falsy Values:
 * 
 *  Before we dive into boolean conversion, 
 *  it's important to understand the concept of truthy and falsy values in JavaScript. 
 *  Every value in JavaScript has an inherent boolean value when evaluated in a boolean context.
 * 
 *      * Falsy values (values that resolve to false in boolean contexts):
 *           `false`
 *           `0` (zero)
 *           `''` (empty string)
 *           `null`
 *           `undefined`
 *           `NaN`
 *      * All other values are considered truthy (they resolve to true in boolean contexts).
 * 
*/

// Using Boolean() function
console.log(Boolean(1));        // true
console.log(Boolean(0));        // false
console.log(Boolean("hello"));  // true
console.log(Boolean(""));       // false
console.log(Boolean(null));     // false
console.log(Boolean(undefined));// false