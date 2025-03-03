'use strict';

// TODO: --------------------- Constructor Method ---------------------
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
const car = new Car('Toyota', 'Camry');
car.accelerate(); // "Speed: 10"