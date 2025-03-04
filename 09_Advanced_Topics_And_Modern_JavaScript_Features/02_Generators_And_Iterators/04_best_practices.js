'use strict';

// TODO: ------------------------ Use Generators for Sequences ------------------------
// Good: Clear sequence generation
function* fibonacci() {
    let prev = 0, curr = 1;
    while (true) {
        yield curr;
        [prev, curr] = [curr, prev + curr];
    }
}

// Avoid: Complex state management
let prev = 0, curr = 1;
function getNextFib() {
    const temp = curr;
    curr = prev + curr;
    prev = temp;
    return curr;
}

// TODO: ------------------------ Consider Memory Usage ------------------------
// Good: Generate values on demand
function* largeRange(max) {
    for (let i = 0; i < max; i++) {
        yield i;
    }
}

// Bad: Store all values in memory
function getLargeRange(max) {
    const numbers = [];
    for (let i = 0; i < max; i++) {
        numbers.push(i);
    }
    return numbers;
}