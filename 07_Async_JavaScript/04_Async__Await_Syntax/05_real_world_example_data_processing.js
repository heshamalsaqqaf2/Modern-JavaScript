async function processUserData(userId) {
    try {
        // Get user
        const user = await getUser(userId);
        console.log('Got user:', user);

        // Get their posts in parallel with their friends
        const [posts, friends] = await Promise.all([
            getUserPosts(userId),
            getUserFriends(userId)
        ]);

        // Process the data
        const processedData = {
            user,
            posts,
            friends,
            timestamp: new Date()
        };

        // Save the results
        await saveProcessedData(processedData);
        console.log('Data processed and saved!');

        return processedData;

    } catch (error) {
        console.error('Error processing user data:', error);
        throw error;  // Re-throw to handle it in the calling function
    }
}

// Helper functions (simulated)
function getUser(id) {
    return new Promise(resolve =>
        setTimeout(() => resolve({ id, name: 'Hesham' }), 1000));
}

function getUserPosts(userId) {
    return new Promise(resolve =>
        setTimeout(() => resolve(['Post 1', 'Post 2']), 1000));
}

function getUserFriends(userId) {
    return new Promise(resolve =>
        setTimeout(() => resolve(['Friend 1', 'Friend 2']), 1000));
}

function saveProcessedData(data) {
    return new Promise(resolve =>
        setTimeout(() => resolve('Saved'), 1000));
}

// Using the function
processUserData(1)
    .then(result => console.log('Final result:', result))
    .catch(error => console.error('Failed:', error));