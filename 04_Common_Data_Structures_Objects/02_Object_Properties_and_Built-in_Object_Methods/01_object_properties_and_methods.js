'use strict';

// TODO: Checking if Properties Exist
let user = {
    name: "Hesham",
    age: 25,
};

// Using hasOwnProperty method
console.log(user.hasOwnProperty("name")); // true
console.log(user.hasOwnProperty("height")); // false

// Using Object.hasOwn (modern way)
console.log(Object.hasOwn(user, "name")); // true
console.log(Object.hasOwn(user, "height")); // false

// Using 'in' operator
console.log("name" in user); // true
console.log("height" in user); // false