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
        // Statistic Data
        console.log('Status Post: ', response.status);
        console.log('IS OK Post: ', response.ok);
        console.log('Status Text Post: ', response.statusText);
    } catch (error) {
        console.error('Error: ', error);
    }
}
createPost();

// TODO: PUT Request (Updating Data)
async function updatePost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: 1,
                title: 'Updated Title',
                body: 'Updated content',
                userId: 1
            })
        });

        const data = await response.json();
        console.log('Updated post:', data);
    } catch (error) {
        console.error('Error updating post:', error);
    }
}
updatePost();

// TODO: DELETE Request (DELETE Data)
async function deletePost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/pots/1', {
            method: 'DELETE'
        });

        if (response.ok) {
            console.log('Post deleted successfully');
        } else {
            console.log('Failed to delete post');
        }
    } catch (error) {
        console.error('Error deleting post:', error);
    }
}
deletePost();
