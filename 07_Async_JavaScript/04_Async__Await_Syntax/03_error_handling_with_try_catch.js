'use strict';

// TODO: One of the best features of async/await is that we can use regular try/catch blocks for error handling:

function getUserData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id < 0) {
                reject(new Error('Invalid ID'));
            } else {
                resolve({ id: id, name: 'Hesham' });
            }
        }, 1000);
    });
}

async function fetchUserData(id) {
    try {
        console.log('Fetching user data...');
        const user = await getUserData(id);
        console.log('User:', user);
    } catch (error) {
        console.log('Error:', error.message);
    } finally {
        console.log('Operation complete');
    }
}

// Try with valid and invalid IDs
fetchUserData(1);    // Works
fetchUserData(-1);   // Throws error