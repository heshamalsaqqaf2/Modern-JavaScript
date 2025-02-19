'use strict';

// TODO: Adding and Removing Elements from the End: push() and pop()
let fruits = ['apple', 'banana'];

// push() adds elements to the end
let newLength = fruits.push('orange');
console.log(fruits);     // ['apple', 'banana', 'orange']
console.log(newLength);  // 3 (push returns the new array length)

// You can push multiple elements at once
fruits.push('grape', 'kiwi');
console.log(fruits);     // ['apple', 'banana', 'orange', 'grape', 'kiwi']

// pop() removes and returns the last element
let lastFruit = fruits.pop();
console.log(lastFruit);  // 'kiwi'
console.log(fruits);     // ['apple', 'banana', 'orange', 'grape']

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