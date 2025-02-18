'use strict';

let firstName = "Hesham";
let lastName = "Alsaqqaf";

// Using the + operator
let fullName = firstName + " " + lastName;
console.log(fullName);  // Outputs: Hesham Alsaqqaf

// Concatenation with non-string values
let age = 25;
let introduction = "My name is " + fullName + " and I am " + age + " years old.";
console.log(introduction);  // Outputs: My name is Hesham Alsaqqaf and I am 25 years old.

// Concatenation with the += operator
let message = "Hello";
message += " World";
console.log(message);  // Outputs: Hello World