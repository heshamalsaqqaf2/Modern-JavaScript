'use strict';

// TODO: Adding and Removing Elements from the End: push() and pop()
let fruits = ['apple', 'banana'];
let emptyArrays = [];

// push() adds elements to the end
let newLength = fruits.push('orange');
console.log(fruits);     // ['apple', 'banana', 'orange']
console.log(newLength);  // 3 (push returns the new array length)

// You can push multiple elements at once
fruits.push('grape', 'kiwi');
console.log(fruits);     // ['apple', 'banana', 'orange', 'grape', 'kiwi']

// pop() removes and returns the last element
let lastFruit = fruits.pop();
let lastEmptyArrays = emptyArrays.pop();
console.log(lastFruit);  // 'kiwi'
console.log(fruits);     // ['apple', 'banana', 'orange', 'grape']
console.log(lastEmptyArrays);  // 'undefined'

// TODO: Adding and Removing Elements from the Beginning: unshift() and shift()
let numbers = [2, 3, 4];

// unshift() adds elements to the beginning
let newLength2 = numbers.unshift(1);
console.log(numbers);    // [1, 2, 3, 4]
console.log(newLength2);  // 4 (unshift returns the new array length)

// You can unshift multiple elements at once
numbers.unshift(-1, 0);
console.log(numbers);    // [-1, 0, 1, 2, 3, 4]

// shift() removes and returns the first element
let firstNumber = numbers.shift();
console.log(firstNumber); // -1
console.log(numbers);     // [0, 1, 2, 3, 4]

// TODO: Performance Considerations [shift/unshift] And [push/pop]
// * These shift/unshift methods are generally slower than
// * push/pop because they need to reIndex all elements

let arr = [1, 2, 3, 4, 5];

// push/pop are fast (O(1) operation)
arr.push(6);    // Only affects the end of the array
arr.pop();      // Only affects the end of the array

// shift/unshift are slower (O(n) operation)
arr.unshift(0); // Must reIndex all elements
arr.shift();    // Must reIndex all elements

// TODO: Practical Examples [Stack] And [Queue]
// ?Implementing a Stack (Last-In-First-Out)
let stack = [];

// Adding items (pushing)
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack); // [1, 2, 3]

// Removing items (popping)
let lastItem = stack.pop();
console.log(lastItem);  // 3
console.log(stack);     // [1, 2]

// ?Implementing a Queue (First-In-First-Out)
let queue = [];

// Adding items to the queue
queue.push(1);
queue.push(2);
queue.push(3);
console.log(queue); // [1, 2, 3]

// Removing items from the queue
let firstItem = queue.shift();
console.log(firstItem); // 1
console.log(queue);     // [2, 3]