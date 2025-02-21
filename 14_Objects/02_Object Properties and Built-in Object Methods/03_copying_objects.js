'use strict';

// TODO: Copying Objects
let user = {
    name: "Yassen",
    age: 23,
};

// Creating a copy using spread operator
let userCopy = { ...user };
userCopy.name = "Hesham";

console.log(user.name); // "Yassen"
console.log(userCopy.name); // "Hesham"