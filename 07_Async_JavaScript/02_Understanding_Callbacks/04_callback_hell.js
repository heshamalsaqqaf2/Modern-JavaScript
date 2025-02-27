'use strict';

// Let's simulate loading user data from a server:
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
    }, 1500);
}

function getUserPosts(userId, callback) {
    console.log(`Fetching posts for user ${userId}...`);
    setTimeout(() => {
        // Simulate posts
        const posts = [
            { id: 1, title: 'Post 1' },
            { id: 2, title: 'Post 2' }
        ];
        callback(posts);
    }, 1500);
}

function getPostComments(postId, callback) {
    console.log(`Fetching Comment for user ${postId}...`);
    setTimeout(() => {
        // Simulate comment
        const comment = [
            { id: 1, description: 'Comment 1' },
            { id: 2, description: 'Comment 2' }
        ];
        callback(comment);
    }, 1500);
}

function getCommentAuthor(commentId, callback) {
    console.log(`Fetching Author for user ${commentId}...`);
    setTimeout(() => {
        // Simulate Author
        const Author = [
            { id: 1, nameAuthor: 'Hesham 1' },
            { id: 2, nameAuthor: 'Hesham 2' },
        ];
        callback(Author);
    }, 1500);
}




// Using our functions
getUser(1, (user) => {
    getUserPosts(user.id, (posts) => {
        getPostComments(posts[0].id, (comments) => {
            getCommentAuthor(comments[0].id, (author) => {
                console.log('Finally got the author!', author);
                // But what if we need more data?
                // Keep nesting more callbacks?
            }, (error) => {
                console.log('Error getting author:', error.message);
            });
        }, (error) => {
            console.log('Error getting comments:', error.message);
        });
    }, (error) => {
        console.log('Error getting posts:', error.message);
    });
}, (error) => {
    console.log('Error getting user:', error.message);
});