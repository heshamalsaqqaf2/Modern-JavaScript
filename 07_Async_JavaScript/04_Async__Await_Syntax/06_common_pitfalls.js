'use strict';

// TODO: -------------------------- Forgetting await: --------------------------
// Wrong
async function example() {
    const result = getData();  // !Oops! Forgot await
    console.log(result);  // !Logs Promise object, not the data
}
// Correct
async function example() {
    const result = await getData();
    console.log(result);  // Logs the actual data
}

// TODO: -------------------------- await in a regular function: --------------------------
// Wrong
function example() {
    // const data = await getData();  // !Error: await only valid in async function
}
// Correct
async function example() {
    const data = await getData();
}

// TODO: -------------------------- Not handling errors: --------------------------
// Wrong
async function example() {
    const data = await riskyOperation();  // Might throw error!
}
// Correct
async function example() {
    try {
        const data = await riskyOperation();
    } catch (error) {
        console.error('Something went wrong:', error);
    }
}