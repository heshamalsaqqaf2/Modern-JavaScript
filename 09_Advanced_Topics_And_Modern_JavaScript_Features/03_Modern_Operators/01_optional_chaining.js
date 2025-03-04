'use strict';

// TODO: -------------------- Optional Chaining (?.) --------------------
// ? 1- Remember when we had to check deeply nested objects? It used to be painful:
// Old way
const user = {
    profile: {
        address: {
            street: 'Main St'
        }
    }
};

// ! Lots of && checks to avoid errors
// const street = user && user.profile && user.profile.address && user.profile.address.street;

// Or multiple if checks
let street;
if (user) {
    if (user.profile) {
        if (user.profile.address) {
            street = user.profile.address.street;
        }
    }
}

// ? 2- Optional chaining makes this much cleaner:
const street2 = user?.profile?.address?.street;
// If any part is undefined or null, returns undefined instead of throwing an error
const nonExistent = user?.profile?.nonExistent?.whatever;
console.log(nonExistent); // undefined

// TODO: -------------------- Working with Methods --------------------
const user2 = {
    name: 'Hesham',
    getAddress() {
        return '123 Main St';
    }
};
// No error if method doesn't exist
console.log(user2.getAddress?.()); // "123 Main St"
console.log(user2.getNonExistent?.()); // undefined

// TODO: -------------------- Working with Arrays --------------------
const users3 = [
    { name: 'Hesham', age: 25 },
    { name: 'Yassen', age: 20 }
];
// Safe array access
console.log(users3?.[0]?.name); // "Hesham"
console.log(users3?.[9]?.name); // undefined (no error)