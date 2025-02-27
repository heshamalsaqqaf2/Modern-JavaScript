'use strict';

// TODO: Creating Objects
// Object literal notation (most common way)
let user = {
    name: "Hesham",
    age: 25,
    isAdmin: true,
};

// Empty object
let empty = {};

// Object with different value types
let person = {
    name: "Yassen",
    age: 23,
    hobbies: ["reading", "gaming"],
    address: {
        city: "Taiz",
        country: "Yemen",
    },
};

// TODO: Accessing Object Properties
let user2 = {
    name: "Hesham",
    age: 30,
};

// Dot notation
console.log(user2.name); // Hesham

// Bracket notation
console.log(user2["age"]); // 30

// Dynamic property access
let key = "name";
console.log(user2[key]); // Hesham

// Property that doesn't exist
console.log(user2.height); // undefined

// TODO: Modifying Objects
let user3 = {
    name: "Mohammed",
};

// Adding new properties
user3.age = 40;
user3["isAdmin"] = true;

// Modifying existing properties
user3.name = "Zohir";

// Deleting properties
delete user3.isAdmin;

console.log(user3); // { name: "Zohir", age: 40 }

