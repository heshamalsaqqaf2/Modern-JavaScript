'use strict';
let single = 'Single quotes work';
let double = "Double quotes work too";
let backticks = `Backticks allow embedded expressions ${2 + 2}`;

console.log(single);   // Outputs: Single quotes work
console.log(double);   // Outputs: Double quotes work too
console.log(backticks);// Outputs: Backticks allow embedded expressions 4

console.log(typeof single); // Outputs: string