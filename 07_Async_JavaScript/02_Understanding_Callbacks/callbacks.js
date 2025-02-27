'use strict';

// TODO: --------------- What is a Callback Function? ---------------
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number) {
    console.log(number)
});
// Or with arrow function
numbers.map(number => number * 2);

// Regular function that does something
function greet(myName) {
    console.log(`Hello ${myName}!`);
}
// Function that takes another function as an argument
function executeGreeting(callbackFunctions) {
    callbackFunctions('Hesham');
}
// Pass greet as a callback
executeGreeting(greet); // Outputs: Hello, Hesham!

// TODO: --------------- Moving to Asynchronous Callbacks ---------------
console.log('Starting...');
setTimeout(function () {
    console.log('2 seconds have passed!');
}, 2000);
console.log('Finishing...');