'use strict';

// TODO: ------------ Think of a prototype as a blueprint that contains shared properties and methods ------------
const car = { brand: 'Toyota', };

// Let's look at car's prototype
console.log(Object.getPrototypeOf(car));
/**  
 * @borrows: You'll see something like browser console:
    {
        constructor: ƒ Object()
        hasOwnProperty: ƒ hasOwnProperty()
        toString: ƒ toString()
        ...and more methods
    }
*/

// This is why we can call methods like toString() on any object
console.log(car.toString()); // "[object Object]"

// But where did toString() come from? The car object doesn't have it!
console.log(car.hasOwnProperty('toString')); // false

// TODO: ------------ This is called the "prototype chain". Let's visualize it: ------------
const myString = "Hello";

// myString's prototype chain:
// myString -> String.prototype -> Object.prototype -> null

console.log(myString.toUpperCase()); // From String.prototype
console.log(myString.toString());    // From Object.prototype