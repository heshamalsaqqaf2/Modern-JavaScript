'use strict';

// Using String() function
console.log(String(123));       // "123"
console.log(String(true));      // "true"
console.log(String(null));      // "null"
console.log(String(undefined)); // "undefined"

// Using .toString() method
console.log((123).toString());  // "123"
console.log(true.toString());   // "true"

// Template literals
console.log(`${123}`);          // "123"
console.log(`${true}`);         // "true"