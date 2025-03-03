'use strict';

// TODO: ------------------------------- Constructor Method -------------------------------
class Car {
    // Constructor runs when we create a new Car
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.speed = 0;
    }
    accelerate() {
        this.speed += 10;
        console.log(`Speed: ${this.speed}`);
    }
}
// const car = Car('Toyota', 'Camry'); //! Class constructor Car cannot be invoked without 'new'
const car = new Car('Toyota', 'Camry');
car.accelerate(); // "Speed: 10"

// TODO: ------------------------------- Class Methods -------------------------------
class Calculator {
    constructor() {
        this.value = 0;
    }
    // These methods are automatically added to Calculator.prototype
    add(x) {
        this.value += x;
        return this;  // Allows method chaining
    }
    subtract(x) {
        this.value -= x;
        return this;
    }
    getValue() {
        return this.value;
    }
}
const calc = new Calculator();
calc.add(5).subtract(2);
console.log(calc.getValue()); // 3

// TODO: ------------------------------- Static Methods -------------------------------
class MathHelper {
    // Static methods are called on the class, not instances
    static square(x) {
        return x * x;
    }
    static isPositive(x) {
        return x > 0;
    }
}

// Use static methods without creating an instance
console.log(MathHelper.square(5)); // 25
console.log(MathHelper.isPositive(-3)); // false

// This won't work:
const math = new MathHelper();
// math.square(5); //! Error! math.square is not a function