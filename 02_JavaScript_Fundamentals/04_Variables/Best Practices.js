'use strict';

// TODO: Use descriptive names: Your variable names should explain what the variable represents.
// Bad
let d = new Date().getTime();
// Good
let currentTimestamp = new Date().getTime();

// TODO: Use camelCase for variable names:
let firstName = "John";
let lastLoginDate = new Date();

// TODO: Be consistent in your naming conventions:
// Inconsistent
let user_name = "Hesham";
let userAge1 = 30;
let UserEmail = "Hesham@example.com";

// Consistent
let userName = "Hesham";
let userAge2 = 30;
let userEmail = "Hesham@example.com";

// TODO: Declare variables at the top of their scope:
function calculateCircleProperties(radius) {
    let diameter, circumference, area;

    diameter = radius * 2;
    circumference = 2 * Math.PI * radius;
    area = Math.PI * radius * radius;

    return { diameter, circumference, area };
}

// TODO: Use const by default, and only use let when you know the value will change:
const PI = 3.14159;
const BASE_URL = '<https://api.example.com>';

let currentUser = 'Hesham';
let score = 0;

function updateScore(newScore) {
    score = newScore;  // We use let for score because it changes
}