'use strict';

// TODO: Object Destructuring
let user = {
    name: "Mohammed",
    age: 11,
    city: "Turki",
};

// Basic destructuring
let { name, age } = user;
console.log(name); // "Mohammed"
console.log(age); // 11

// Destructuring with different variable names
let { name: userName, age: userAge } = user;
console.log(userName); // "Mohammed"
console.log(userAge); // 11

// Destructuring with default values
let { name3, country = "KSA" } = user;
console.log(country); // "KSA" (default value used)
console.log("\n");

// TODO: Rest Operator with Objects
let userRest = {
    names: "HeshamR",
    ages: 28,
    city: "Taiz",
    country: "Yemen",
};
// Using rest operator
let { names, ages, ...rest } = userRest;
console.log(names); // "John"
console.log(ages); // 30
console.log(rest); // { city: "New York", country: "USA" }