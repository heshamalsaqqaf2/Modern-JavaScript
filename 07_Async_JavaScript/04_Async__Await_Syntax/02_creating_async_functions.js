'use strict';

// Regular function
async function getData() {
    // async function code
}
// Arrow function
const getData2 = async () => {
    // async function code
};
// Method in a class or object
const obj = {
    async getData3() {
        // async function code
    }
};

async function greet() {
    return 'Hello';  // Automatically wrapped in Promise
};

// These are equivalent:
greet().then(message => console.log(message));  // Hello

const result = await greet();
console.log(result);  // Hello

// !console.log(await greet());  // Error
