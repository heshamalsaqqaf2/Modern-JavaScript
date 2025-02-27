'use strict';

// Todo: Function Declarations and Basic Syntax
function sayHello() {
    console.log("Hello, World!");
}
sayHello(); // Outputs: Hello, World!

// TODO: Function Parameters
function greet(name, time) {
    console.log("Good " + time + ", " + name + "!");
}
greet("Hesham", "morning");     // Good morning, Hesham!
greet("Yassen", "evening");     // Good evening, Yassen!

// We can also set default values for parameters (a feature introduced in ES6):
function greetWithDefault(name = "Guest") {
    console.log("Welcome, " + name + "!");
}
greetWithDefault();        // Welcome, Guest!
greetWithDefault("Zohir"); // Welcome, Hesham!

// TODO: Return Values
function add(a, b) {
    return a + b;
}
let result = add(3, 5);
console.log(result); // Outputs: 8

function gradeScore(score) {
    if (score >= 90) {
        return "A";
    }
    if (score >= 80) {
        return "B";
    }
    return "C";
}
console.log(gradeScore(95)); // Outputs: A
console.log(gradeScore(85)); // Outputs: B
console.log(gradeScore(75)); // Outputs: C

function noReturn() {
    console.log("This function doesn't return anything");
}
let result2 = noReturn();
console.log(result2); // Outputs: undefined


// TODO: Function Scope
let globalVar = "I'm global";

function scopeExample() {
    let localVar = "I'm local";
    console.log(globalVar);  // I'm global
    console.log(localVar);   // I'm local
}
scopeExample();
console.log(globalVar);  // I'm global
// console.log(localVar);   //! Throws an error: localVar is not defined

// TODO: Naming Conventions and Best Practices
// 1- Use descriptive names: Your function name should clearly indicate what the function does.
// *Good
function calculateArea(radius) {
    return Math.PI * radius * radius;
}
// *Avoid
function calc(r) {
    return Math.PI * r * r;
}
// 2- Use camelCase: In JavaScript, it's conventional to use camelCase for function names.
function camelCaseExample() { }

// 3- Start with a verb: Since functions perform actions, it's often helpful to start their names with a verb.
function getUserData() { }
function validateInput() { }
function updateDisplay() { }

// TODO: Function Expressions and Arrow Functions
let greet2 = (name) => {
    console.log("Hello, " + name);
};
greet2("Arrow"); // Outputs: Hello, Arrow

let square = x => x * x;
console.log(square(4)); // Outputs: 16