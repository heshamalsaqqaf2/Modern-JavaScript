'use strict';

// Often you'll need to add query parameters to your URLs
async function getPostsWithParams() {
    // Creating URL with parameters
    const baseUrl = '<https://jsonplaceholder.typicode.com/posts>';
    const params = new URLSearchParams({
        userId: 1,
        _limit: 5
    });

    try {
        const response = await fetch(`${baseUrl}?${params}`);
        const data = await response.json();
        console.log('Posts:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}