'use strict';

// TODO: Objects can contain functions as values, which we call "methods".
let user = {
    name: "John",
    age: 30,
    // Method using function declaration
    sayHi: function () {
        console.log("Hi! I'm " + this.name);
    },
    // Shorthand method syntax (ES6+)
    greet() {
        console.log(`Hello! I'm ${this.name} and I'm ${this.age} years old`);
    },
};
user.sayHi(); // Hi! I'm John
user.greet(); // Hello! I'm John and I'm 30 years old

// TODO: The this keyword inside a method refers to the object that owns the method
let calculator = {
    value: 0,
    add(number) {
        this.value += number;
    },
    subtract(number) {
        this.value -= number;
    },
    getCurrentValue() {
        return this.value;
    },
};

calculator.add(5);
console.log(calculator.getCurrentValue()); // 5
calculator.subtract(2);
console.log(calculator.getCurrentValue()); // 3