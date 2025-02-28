'use strict';

// Let's compare Promise syntax to async/await:

// Using Promises
function getUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: id, name: 'Hesham' });
        }, 1000);
    });
}

// Promise way
getUser(1)
    .then(user => console.log(user));

// Async/await way
async function displayUser() {
    const user = await getUser(1);
    console.log(user);
}

displayUser();