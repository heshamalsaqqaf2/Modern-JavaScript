'use strict';

let a = 10;
let b = 5;

console.log(a + b);  // Addition: 15
console.log(a - b);  // Subtraction: 5
console.log(a * b);  // Multiplication: 50
console.log(a / b);  // Division: 2
console.log(a % b);  // Modulus (remainder): 0
console.log(a ** b); // Exponentiation: 100000

// Increment and Decrement
let c = 5;
console.log(c++);    // Post-increment: outputs 5, then c becomes 6
console.log(++c);    // Pre-increment:  c becomes 7, then outputs 7
console.log(c--);    // Post-decrement: outputs 7, then c becomes 6
console.log(--c);    // Pre-decrement:  c becomes 5, then outputs 5

// String concatenation
let str1 = "Hello";
let str2 = "World";
console.log(str1 + " " + str2);  // Outputs: "Hello World"


// Operator Precedence
let result = 2 + 3 * 4;  // 14, not 20
console.log(result);

// Use parentheses to change the order of operations
result = (2 + 3) * 4;    // 20
console.log(result);