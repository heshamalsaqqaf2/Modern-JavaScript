'use strict';

// Let's create a more practical example - simulating a database operation:
function getUser(id) {
    return new Promise((resolve, reject) => {
        console.log('Starting...');

        setTimeout(() => {
            if (Math.random() > 0.5) {
                const user = { id: id, name: 'Hesham' };
                resolve(user);
            } else {
                reject(new Error('Failed to fetch users.'));
            }
        }, 2000);
    }).then((user) => {
        console.log('Success: ', user);
    }).catch((err) => {
        console.log('Error: ', err.message);
    });
}

getUser(1);