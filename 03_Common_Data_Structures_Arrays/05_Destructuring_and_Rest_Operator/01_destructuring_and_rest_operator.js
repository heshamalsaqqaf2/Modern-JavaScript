'use strict';

// TODO: Destructuring
let colors = ['red', 'green', 'blue'];

// Basic array destructuring
let [first, second, third] = colors;
console.log(first);  // 'red'
console.log(second); // 'green'
console.log(third);  // 'blue'

// Skipping elements
let [primary, , tertiary] = colors;
console.log(primary);  // 'red'
console.log(tertiary); // 'blue'

// Default values
let [a, b, c, d = 'yellow'] = colors;
console.log(d); // 'yellow' (default value used)

// Swapping variables
let x = 1;
let y = 2;
[x, y] = [y, x];
console.log(x, y); // 2, 1
console.log("\n");

// TODO: Rest Operator in Arrays
let numbers = [1, 2, 3, 4, 5];

// Using rest operator in destructuring
let [firstUsingRest, secondUsingRest, ...rest] = numbers;
console.log(firstUsingRest);  // 1
console.log(secondUsingRest); // 2
console.log(rest);   // [3, 4, 5]

// Rest must be the last element
// let [...allButLast, last] = numbers; // !This will cause an error

// Combining arrays using spread operator
let moreNumbers = [...numbers, 6, 7, 8];
console.log(moreNumbers); // [1, 2, 3, 4, 5, 6, 7, 8]

// Creating a copy of an array
let numbersCopy = [...numbers];
console.log(numbersCopy); // [1, 2, 3, 4, 5]

// TODO: Key Points about Destructuring and Rest Operator
/** 
 * @description
 *  1- Destructuring makes it easy to extract values from arrays
 *  2- You can skip elements by leaving empty spaces in the destructuring pattern
 *  3- Default values can be assigned for undefined elements
 *  4- The rest operator must be the last element in destructuring
 *  5- Rest operator can be used to gather remaining elements into a new array
 * 
*/