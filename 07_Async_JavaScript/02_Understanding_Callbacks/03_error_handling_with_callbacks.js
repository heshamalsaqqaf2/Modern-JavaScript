'use strict';

/*  In real-world scenarios, things can go wrong. 
    Here's how we typically handle errors with callbacks:
*/

function getUser(id, successCallback, errorCallback) {
    console.log(`Fetching users ${id}...`);

    setTimeout(() => {
        // Simulate random error
        if (Math.random() > 0.5) {
            // Success Case
            const user = { id: id, name: 'Hesham' };
            successCallback(user);
        } else {
            // Error Case
            errorCallback(new Error('Failed to fetch users.'));
        }
    }, 1000);
}
// Using the function with error handling
getUser(
    1,
    // Success Callback
    (user) => {
        console.log('Success: ', user);
    },
    // Error Callback
    (error) => {
        console.log('Error: ', error.message);
    }
);
