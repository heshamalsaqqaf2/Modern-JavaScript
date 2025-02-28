'use strict';

/**
 * One of the biggest advantages of Promises is that they can be chained.
 * This solves the callback hell problem:
*/
function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: id, name: 'Hesham' });
        }, 1000);
    });
}
function getUserPosts(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { id: 1, title: `${user.name}'s Post 1` },
                { id: 2, title: `${user.name}'s Post 2` },
            ]);
        }, 1000);
    });
}

// Using Promise chains
getUser(1) // get the user
    .then(user => { // and then
        console.log('Got user:', user); // log the user
        return getUserPosts(user);  // Return a new Promise
    })
    .then(posts => { // resolve that promise and get users posts
        console.log('Got posts:', posts); //log the posts
    })
    .catch(error => { // if anything goes wrong
        // This catch handles errors from either Promise
        console.log('Error:', error); // log the error
    });