'use strict';

// TODO: -------------------------------forEach Method-------------------------------
let numbersForEach = [1, 2, 3, 4, 5];
numbersForEach.forEach(function (number, index) {
    console.log(`Number at index ${index} is ${number}`);
});
console.log("\n");

// Using arrow function (shorter syntax)
numbersForEach.forEach((number, index) => {
    console.log(`Number at index ${index} is ${number}`);
});
console.log("\n");

// TODO: -------------------------------map Method-------------------------------
let numbersMap = [1, 2, 3, 4, 5];

// Double each number
let doubled = numbersMap.map(function (number) {
    return number * 2;
});
console.log(numbersMap);  // [1, 2, 3, 4, 5]   (original unchanged)
console.log(doubled);  // [2, 4, 6, 8, 10]  (new array)

// Using arrow function
let squared = numbersMap.map(number => number * number);
console.log(squared); // [1, 4, 9, 16, 25]
console.log("\n");

// TODO: -------------------------------filter Method-------------------------------
let numbersFilter = [1, 2, 3, 4, 5, 6];

// Get only even numbers
let evenNumbers = numbersFilter.filter(function (number) {
    return number % 2 === 0;
});
console.log(numbersFilter);     // [1, 2, 3, 4, 5, 6] (original unchanged)
console.log(evenNumbers); // [2, 4, 6]

// Using arrow function
let bigNumbers = numbersFilter.filter(number => number > 3);
console.log(bigNumbers);  // [4, 5, 6]
console.log("\n");

// TODO: -------------------------------reduce Method-------------------------------
let numbersReduce = [1, 2, 3, 4, 5];

// Sum all numbers
let sum = numbersReduce.reduce(function (accumulator, currentNumber) {
    return accumulator + currentNumber;
}, 0);  // 0 is the initial value
console.log(sum); // 15

// Using arrow function
let product = numbersReduce.reduce((acc, curr) => acc * curr, 1);
console.log(product); // 120
console.log("\n");

// TODO: -------------------------------find Method-------------------------------
let numbersFind = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let firstEven = numbersFind.find(number => number % 2 === 0);
console.log(firstEven); // 2 (stops after finding first even number)

// More practical example
let users = [
    { id: 1, name: "Yassen" },
    { id: 2, name: "Hesham" },
    { id: 3, name: "Mohammed" }
];

let user = users.find(user => user.id === 2);
console.log(user); // { id: 2, name: "Hesham" }
console.log("\n");

// TODO: -------------------------------findIndex Method-------------------------------
let numbersFindIndex = [1, 2, 3, 4, 5];

let index = numbersFindIndex.findIndex(number => number > 3);
console.log(index); // 3 (index of first number greater than 3)

// If not found, returns -1
let notFound = numbersFindIndex.findIndex(number => number > 10);
console.log(notFound); // -1
console.log("\n");

// TODO: -------------------------------some Method-------------------------------
let numbersSome = [1, 2, 3, 4, 5];

let hasEven = numbersSome.some(number => number % 2 === 0);
console.log(hasEven); // true (at least one even number exists)

let hasNegative = numbersSome.some(number => number < 0);
console.log(hasNegative); // false (no negative numbers)
console.log("\n");

// TODO: -------------------------------every Method-------------------------------
let numbersEvery = [2, 4, 6, 8, 10];

let allEven = numbersEvery.every(number => number % 2 === 0);
console.log(allEven); // true (all numbersEvery are even)

let allPositive = numbersEvery.every(number => number > 0);
console.log(allPositive); // true (all numbersEvery are positive)
console.log("\n");