'use strict';

let names = "Hesham";
let age = 25;

// Basic usage
let greeting = `Hello, ${names}!`;
console.log(greeting);  // Outputs: Hello, Hesham!

// Expressions in template literals
let message = `${names} is ${age} years old.`;
console.log(message);  // Outputs: Hesham is 25 years old.

// Multi-line strings
let multiLine = `
  This is a multi-line
  string using
  template literals.
`;
console.log(multiLine);

// Expressions can be more complex
let a = 5;
let b = 10;
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);
// Outputs: Fifteen is 15 and not 20.

// Tagged templates (advanced feature)
function myTag(strings, ...values) {
    console.log(strings);
    console.log(values);
    return "Tagged template result";
}

let result = myTag`Hello ${names}, you are ${age} years old.`;
console.log(result);