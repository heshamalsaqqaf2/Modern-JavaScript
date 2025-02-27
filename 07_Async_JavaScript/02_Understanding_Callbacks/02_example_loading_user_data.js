'use strict';

// Let's simulate loading user data from a server:
function getUser(id, callback) {
    console.log(`Fetching user ${id} from database...`);

    // Simulate database delay
    setTimeout(() => {
        // Simulate a user object
        const user = {
            id: id,
            name: 'Hesham Alsaqqaf',
            email: 'hesham@example.com'
        };
        // Pass user data to callback
        callback(user);
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

// Using our functions
getUser(1, function (user) {
    console.log('Got user:', user);
    // Now get their posts
    getUserPosts(user.id, function (posts) {
        console.log('Got posts:', posts);

        // What if we needed more data?
        // We'd have to nest another callback...
    });
});