'use strict';

// TODO: Using the for Loop
let fruits = ['apple', 'banana', 'orange', 'grape'];

// Basic forward iteration
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}
console.log("\n");

// Backward iteration
for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}
console.log("\n");

// Skipping elements (every second element)
for (let i = 0; i < fruits.length; i += 2) {
    console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}
console.log("\n");

// ?Common patterns with for loops:
let numbers = [1, 2, 3, 4, 5];

// Breaking out of a loop
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 3) {
        break;
    }
    console.log(numbers[i]);
} // Outputs: 1, 2
console.log("\n");

// Skipping elements with continue
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        continue;
    }
    console.log(numbers[i]);
} // Outputs: 1, 3, 5
console.log("\n");

// Modifying array elements
for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * 2;
}
console.log(numbers); // [2, 4, 6, 8, 10]
console.log("\n");

// TODO: Using the while Loop
let colors = ['red', 'green', 'blue'];
let i = 0;
while (i < colors.length) {
    console.log(colors[i]);
    i++;
}
console.log("\n");

// Another pattern using while
let j = colors.length;
while (j--) {
    console.log(colors[j]);
}
console.log("\n");

// TODO: Using the for...of Loop (ES6+)
let numbers2 = [1, 2, 3, 4, 5];
for (let numberNew of numbers2) {
    console.log(numberNew);
}
console.log("\n");
// Note: You can't easily access the index in for...of
// If you need both element and index, use for loop or forEach


// TODO: Common Use Cases and Patterns
// ?Search Elements:
let numbers3 = [1, 2, 3, 4, 5];
let searchValue = 3;
for (let i = 0; i < numbers3.length; i++) {
    if (numbers3[i] === searchValue) {
        console.log(`Found ${searchValue} at index ${i}`);
        break;
    }
}

// ?Transforming Elements:
let prices = [10, 20, 30, 40];
// Adding tax to each price
for (let i = 0; i < prices.length; i++) {
    prices[i] *= 1.2; // Adding 20% tax
}
console.log(prices);

// ?Filtering Elements:
let scores = [75, 90, 85, 65, 95];
let highScores = [];
for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= 90) {
        highScores.push(scores[i]); // Add to highScores array
    }
}
console.log(highScores);
console.log("\n");


// TODO: Performance Considerations
let largeArray = new Array(1000000).fill(1);

// *Good Caching the length can improve performance in very large arrays
let len = largeArray.length;
for (let i = 0; i < len; i++) {
    // Operation
}

// *Bad Versus recalculating length each time
for (let i = 0; i < largeArray.length; i++) {
    // Operation
}

// TODO: Common Mistakes and Gotchas
// ?Off-by-one errors:
let arr = [1, 2, 3];

// Wrong
for (let i = 1; i <= arr.length; i++) { // Starts from 1 and includes length
    console.log(arr[i]); //! Will give undefined for last iteration
}
console.log("\n");

// Correct
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


