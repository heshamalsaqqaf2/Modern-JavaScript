'use strict';

// TODO: Async/await really shines when dealing with multiple Promises:
async function getDataSequentially() {
    console.log('Starting sequential operations...');

    // These run one after another
    const result1 = await operation1();
    console.log('Result 1:', result1);

    const result2 = await operation2(result1);
    console.log('Result 2:', result2);

    const result3 = await operation3(result2);
    console.log('Result 3:', result3);

    return result3;
}

async function getDataParallel() {
    console.log('Starting parallel operations...');

    // These run at the same time
    const results = await Promise.all([
        operation1(),
        operation2(),
        operation3()
    ]);

    console.log('All results parallel:', results);
    return results;
}

// Helper functions for the example
function operation1() {
    return new Promise(resolve =>
        setTimeout(() => resolve('Result 1'), 1000));
}
function operation2() {
    return new Promise(resolve =>
        setTimeout(() => resolve('Result 2'), 1000));
}
function operation3() {
    return new Promise(resolve =>
        setTimeout(() => resolve('Result 3'), 1000));
}

// Run these functions separately to see the difference
getDataSequentially();
getDataParallel();

/** 
 * @Output
 *  Starting parallel operations...
 *  Starting sequential operations...
        Result 1: Result 1
        All results: [ 'Result 1', 'Result 2', 'Result 3' ]
        Result 2: Result 2
        Result 3: Result 3
*/