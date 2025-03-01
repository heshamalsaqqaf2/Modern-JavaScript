'use strict';

// TODO: almost everything you work with is an object. Let's see what this means:

// Numbers have methods - they're objects!
const num = 42;
console.log(num.toString()); // "42"
console.log((42).toFixed(2)); // "42.00"

// Strings have methods too
const str = "hello";
console.log(str.toUpperCase()); // "HELLO"

// Even functions are objects
function greet() {
    console.log('Hi!');
}
console.log(typeof greet); // "function"
console.log(greet instanceof Object); // true

// Arrays are objects
const arr = [1, 2, 3];
console.log(typeof arr); // "object"

// The only primitives that aren't objects are:
// - null
// - undefined
// - numbers  (they're automatically converted to Number objects when needed)
// - strings  (they're automatically converted to String objects when needed)
// - booleans (they're automatically converted to Boolean objects when needed)
// - symbols

// JavaScript automatically "wraps" primitives when needed
const primitive = "hello";
console.log(primitive.length); // 5 - JavaScript temporarily converts to String object


// TODO: This is why you can do things like:

// This works because JavaScript temporarily converts the string to an object
"hello".toUpperCase();

// Same with numbers
console.log((123).toString());

// And booleans
console.log(true.toString());

/** 
 * @summary
 * Understanding that most things in JavaScript are objects (or can behave like objects)
 * helps explain why the prototype system is so powerful - 
 * it's the backbone of how JavaScript provides functionality to almost everything in the language.
*/