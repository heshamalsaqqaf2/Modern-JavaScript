'use strict';

// TODO: -------------------------- 1- Use descriptive function names --------------------------
// Not clear
async function getData() { }

// Better
async function fetchUserProfile() { }

// TODO: -------------------------- 2- Proper error handling --------------------------
async function processData() {
    try {
        const data = await fetchData();
        return processResult(data);
    } catch (error) {
        logError(error);
        throw new Error('Data processing failed: ' + error.message);
    }
}

// TODO: -------------------------- 3- Run independent operations in parallel --------------------------
// Sequential (slower)
const users2 = await getUsers();
const posts2 = await getPosts();

// Parallel (faster)
const [users3, posts3] = await Promise.all([
    getUsers(),
    getPosts()
]);