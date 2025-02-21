'use strict';

// TODO: Built-in Object Methods
let user = {
    name: "Hesham",
    age: 25,
    city: "Yemen",
};

// Get all keys
console.log(Object.keys(user)); // ["name", "age", "city"]

// Get all values
console.log(Object.values(user)); // ["Hesham", 25, "Yemen"]

// Get key-value pairs as arrays
console.log(Object.entries(user)); // [["name", "Hesham"], ["age", 25], ["city", "Yemen"]]