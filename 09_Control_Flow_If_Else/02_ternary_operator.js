'use strict';

//  condition ? expressionIfTrue : expressionIfFalse
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log("Can vote:", canVote);
// Todo: This is equivalent to:
let age2 = 20;
let canVote2;
if (age2 >= 18) {
    canVote2 = "Yes2";
} else {
    canVote2 = "No2";
}
console.log("Can vote2:", canVote2);


// Multiple Ternary Operators
let age3 = 15;
let category = age3 < 13 ? "Child" : age3 < 18 ? "Teenager" : "Adult";
console.log("Age category:", category);
// Todo: This is equivalent to:
let age4 = 15;
let category4;
if (age4 < 13) {
    category4 = "Child";
} else if (age4 < 18) {
    category4 = "Teenager";
} else {
    category4 = "Adult";
}
console.log("Age category2:", category4);

