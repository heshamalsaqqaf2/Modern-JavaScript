'use strict';

// Todo: let [+ES6]
let age = 25;
console.log(age); // Outputs: 25

age = 26; // We can change the value
console.log(age); // Outputs: 26

let name = "Alice";
console.log(name); // Outputs: Alice

name = "Bob"; // We can also change string values
console.log(name); // Outputs: Bob
console.log("\n");

// Todo: const [+ES6]
const PI = 3.14159;
console.log(PI); // Outputs: 3.14159

// PI = 3.14; //! This would cause an error: Assignment to a constant variable

const person = { name: "Charlie", age: 30 };
person.age = 31; // We can modify properties of a const object
console.log(person); // Outputs: {name: "Charlie", age: 31}
// person = { name: "David", age: 25 }; //! This would cause an error: Assignment to a constant variable
console.log("\n");

