'use strict';

// TODO: ------------------------- Understanding Iterators -------------------------
// These are all iterable
const array = [1, 2, 3];
const string = "hello";
const set = new Set([1, 2, 3]);
const map = new Map([['a', 1], ['b', 2]]);

// They all work with for...of
for (const item of array) console.log(item);
for (const char of string) console.log(char);
for (const item of set) console.log(item);
for (const [key, value] of map) console.log(key, value);

// TODO: ------------------------- What are Generators? -------------------------
// Here's a simple generator
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = numberGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // undefined

// Or use it in a for...of loop
for (const num of numberGenerator()) {
    console.log(num); // 1, 2, 3
}
