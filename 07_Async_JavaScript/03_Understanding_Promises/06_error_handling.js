'use strict';

// TODO: -------------------------------- Error Handling --------------------------------
function riskyOperation() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve('Success!');
            } else {
                reject(new Error('Operation failed'));
            }
        }, 1000);
    });
}
// Multiple catch blocks for different parts of the chain
riskyOperation()
    .then(result => {
        console.log('First then:', result);
        throw new Error('Error in first then');  // Simulate error in processing
    })
    .catch(error => {
        console.log('First catch:', error.message);
        return 'Recovered from error';
    })
    .then(result => {
        console.log('Second then:', result);
    })
    .catch(error => {
        console.log('Final catch:', error.message);
    });


// TODO: -------------------------------- Best Practices --------------------------------

// ?Always return values in then() blocks:
// Bad
somePromise().then(result => {
    doSomething(result);
});
// Good
somePromise().then(result => {
    return doSomething(result);
});

// ?Always handle potential errors:
// Bad
somePromise().then(handleSuccess);
// Good
somePromise()
    .then(handleSuccess)
    .catch(handleError);

// ?Chain Promises properly:
// Bad
somePromise().then(result => {
    return anotherPromise().then(newResult => {
        // Nesting Promises
    });
});
// Good
somePromise()
    .then(result => anotherPromise())
    .then(newResult => {
        // Flat Promise chain
    });