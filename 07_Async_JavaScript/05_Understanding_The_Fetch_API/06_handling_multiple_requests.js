'use strict';

// Sometimes you need to make multiple requests:
async function getPostAndComments(postId) {
    try {
        // Get post and its comments in parallel
        const [postResponse, commentsResponse] = await Promise.all([
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`),
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        ]);

        // Parse both responses
        const post = await postResponse.json();
        const comments = await commentsResponse.json();
        return { post, comments, }; // Objects

    } catch (error) {
        console.error('Error fetching post and comments:', error);
        throw error;
    }
}

// Using the function
getPostAndComments(1)
    .then(data => {
        console.log('Post:', data.post);
        console.log('Comments:', data.comments);
    })
    .catch(error => console.error('Error:', error));