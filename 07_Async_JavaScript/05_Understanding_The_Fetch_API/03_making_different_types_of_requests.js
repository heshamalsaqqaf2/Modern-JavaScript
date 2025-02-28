'use strict';

// TODO: POST Request (Creating Data)
async function createPost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: 'My Post',
                body: 'This is my new post',
                userId: 1,
            }),
        });
        const data = await response.json();
        console.log('Create Post: ', data);

        console.log('Status Post: ', response.status);
        console.log('IS OK Post: ', response.ok);
        console.log('Status Text Post: ', response.statusText);

    } catch (error) {
        console.error('Error: ', error);
    }
}
createPost();