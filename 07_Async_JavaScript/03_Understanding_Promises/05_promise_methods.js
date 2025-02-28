'use strict';

// Promises come with several useful static methods:

// TODO:  Promise.all() => Waits for all Promises to resolve
const promise1 = Promise.resolve(3);
const promise2 = new Promise(resolve => setTimeout(() => resolve(42), 1000));
const promise3 = Promise.resolve('foo');

Promise.all([promise1, promise2, promise3])
    .then(value => {
        console.log('All promises completed: ', value);
    });

// TODO:  Promise.race() => Resolves or rejects as soon as one Promise resolves or rejects
const promise4 = new Promise(resolve => setTimeout(() => resolve('Quick'), 1000));
const promise5 = new Promise(resolve => setTimeout(() => resolve('Slow'), 2000));

Promise.race([promise4, promise5])
    .then(result => {

        console.log('Fastest promise was:', result); // Output: Quick
    });

// TODO:  Promise.allSettled() => Waits for all Promises to complete, regardless of success or failure:
const promises6 = [
    Promise.resolve(1),
    Promise.reject('error'),
    new Promise(resolve => setTimeout(() => resolve(3), 1000))
];

Promise.allSettled(promises6)
    .then(results => {
        console.log('All promises settled:', results);
        // Shows status and value/reason for each Promise
    });