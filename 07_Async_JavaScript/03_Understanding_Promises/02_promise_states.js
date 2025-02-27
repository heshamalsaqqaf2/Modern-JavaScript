'use strict';

/** 
 * A Promise is always in one of three states:
 *      Pending: Initial state, not fulfilled or rejected
 *      Fulfilled: Operation completed successfully
 *      Rejected: Operation failed
*/

const pendingPromise = new Promise((resolve, reject) => {
    // This Promise stays pending because we never call resolve or reject
});

const fullFilledPromise = new Promise((resolve, reject) => {
    resolve("Success!");
});

const rejectPromise = new Promise((resolve, reject) => {
    reject("Something went wrong");
});

console.log('Pending Promise: ', pendingPromise);
console.log('Fulfilled Promise: ', fullFilledPromise);
console.log('Rejected Promise: ', rejectPromise);