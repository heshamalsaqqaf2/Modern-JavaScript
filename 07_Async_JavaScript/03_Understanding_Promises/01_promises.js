'use strict';

// Remember our breakfast example with callbacks? Let's see how it looks with Promises:
function toastBread() {
    return new Promise((resolve, reject) => {
        console.log('Starting to toast bread...');
        setTimeout(() => {
            // Simulate success case
            resolve('Toasted bread');
            // Could simulate failure with:
            reject('Toasted is broken!');
        }, 2000);
    });
}

// Using the promise
toastBread()
    .then(result => console.log(result))
    .catch(error => console.log('Error: ', error));

console.log("Doing other things while bread is toasting...");