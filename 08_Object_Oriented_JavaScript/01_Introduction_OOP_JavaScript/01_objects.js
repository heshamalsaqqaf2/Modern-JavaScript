'use strict';

// TODO: Objects in JavaScript: A Quick Recap
// ?As we learned in our previous Objects course, JavaScript uses objects as key-value pairs:

// A simple object as we've seen before
const person = {
    name: 'Hesham',
    age: 25,
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};
