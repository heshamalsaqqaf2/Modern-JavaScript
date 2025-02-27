'use strict';

let str1 = "Hello";
let str2 = "World";
let str3 = "!";

let result = str1.concat(" ", str2, str3); // same as str1 + " " + str2 + str3
console.log(result);  // Outputs: Hello World!

// concat() can take multiple arguments
let greeting = "".concat("Hi", " ", "there", "!");
console.log(greeting);  // Outputs: Hi there!