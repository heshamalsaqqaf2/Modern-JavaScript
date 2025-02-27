'use strict';

// TODO: Iterating Over Object Properties

// ?Using for...in Loop
let user = {
    name: "Hesham",
    age: 25,
    city: "Yemen",
};
for (let key in user) {
    console.log(`${key}: ${user[key]}`);
}
// Outputs:
// name: Hesham
// age: 25
// city: Yemen
console.log("\n");

// ?Using Object Methods for Iteration
let product = {
    name: "Laptop",
    price: 999,
    inStock: true,
};

// Using Object.keys()
Object.keys(product).forEach((key) => {
    console.log(`${key}: ${product[key]}`);
});
console.log("\n");

// Using Object.values()
Object.values(product).forEach((value) => {
    console.log(value);
});
console.log("\n");

// Using Object.entries()
Object.entries(product).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});