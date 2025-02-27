'use strict';

let x = 5;
let y = '5';

console.log(x == y);   // Loose equality: true (compares value, not type)
console.log(x === y);  // Strict equality: false (compares both value and type)
console.log(x != y);   // Loose inequality: false
console.log(x !== y);  // Strict inequality: true

console.log(x > 3);    // Greater than: true
console.log(x < 3);    // Less than: false
console.log(x >= 5);   // Greater than or equal to: true
console.log(x <= 5);   // Less than or equal to: true