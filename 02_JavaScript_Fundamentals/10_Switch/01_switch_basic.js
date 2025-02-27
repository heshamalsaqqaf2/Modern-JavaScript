'use strict';
// The switch statement is another way to control the flow of your program based on different conditions.
// It's particularly useful when you have multiple conditions to check against a single variable or expression.

// Todo: Basic Syntax
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}
console.log(dayName); // Outputs: Wednesday


// Todo: The Importance of Break
let fruit = "apple";
let response;

switch (fruit) {
    case "banana":
        response = "Banana is good!";
        break;
    case "apple":
        response = "How do you like them apples?";
    // No break here!
    case "orange":
        response += " Orange you glad I didn't say banana again?";
        break;
    default:
        response = "I'm not familiar with that fruit.";
}
console.log(response);
// Outputs: How do you like them apples? Orange you glad I didn't say banana again?



// Todo: Grouping of Cases
let grade = "B";
let feedback;

switch (grade) {
    case "A":
    case "B":
        feedback = "Good job!";
        break;
    case "C":
        feedback = "You can do better.";
        break;
    case "D":
    case "F":
        feedback = "You need to study more.";
        break;
    default:
        feedback = "Invalid grade";
}
console.log(feedback); // Outputs: Good job!
