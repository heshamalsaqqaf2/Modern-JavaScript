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
console.log('Finishing...\n');

// ?Let's make this more practical with multiple steps:
function makeBreakfast() {
    console.log('Starting breakfast preparation...');
    setTimeout(() => {
        console.log('1. Toasting bread...');
        setTimeout(() => {
            console.log('2. Bread is toasted! Adding butter...');
            setTimeout(() => {
                console.log('3. Butter added! Making eggs...');
                setTimeout(() => {
                    console.log('4. Eggs are ready! Breakfast is served!');
                }, 2000);  // Cooking eggs
            }, 1000);  // Adding butter
        }, 2000);  // Toasting
    }, 1000);  // Initial preparation
}
makeBreakfast();
/**  
 * @summary
 *  1- Run this code and you'll see each step happen in sequence, 
 *      but notice how the code is starting to nest deeply. 
 *  2- This is a preview of what we call "callback hell" - we'll talk about that soon.
*/