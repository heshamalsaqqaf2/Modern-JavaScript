'use strict';

// TODO: Inheritance isn't always the best solution. Let's look at a common mistake:
class Vehicle {
    constructor(speed) {
        this.speed = speed;
    }
    move() {
        console.log(`Moving at ${this.speed} mph`);
    }
}
// Seems fine at first...
class Car extends Vehicle {
    constructor(speed) {
        super(speed);
        this.wheels = 4;
    }
}
// But then...
class Boat extends Vehicle {  // Uh oh...
    constructor(speed) {
        super(speed);
        this.propellers = 1;
    }
    // A boat doesn't really need wheels...
}
// And it gets worse...
class Airplane extends Vehicle {  // This is getting messy
    constructor(speed) {
        super(speed);
        this.wings = 2;
        // What about propellers?
        // What about wheels (some planes have them)?
    }
}

// TODO: This is where composition becomes useful.
// TODO: Instead of inheritance, we can compose objects from smaller, focused pieces:
// Create specific behaviors
const canMove = {
    move() {
        console.log(`Moving at ${this.speed} mph`);
    }
};
const canFly = {
    fly() {
        console.log(`Flying at ${this.speed} mph and ${this.altitude} feet`);
    }
};
const canFloat = {
    float() {
        console.log(`Floating in water`);
    }
};
// Now we can mix and match
class Car {
    constructor(speed) {
        this.speed = speed;
        // Add moving capability
        Object.assign(this, canMove);
    }
}
class Boat {
    constructor(speed) {
        this.speed = speed;
        // Add moving AND floating capabilities
        Object.assign(this, canMove, canFloat);
    }
}
class Airplane {
    constructor(speed, altitude) {
        this.speed = speed;
        this.altitude = altitude;
        // Add moving AND flying capabilities
        Object.assign(this, canMove, canFly);
    }
}

const car = new Car(60);
const boat = new Boat(40);
const plane = new Airplane(500, 30000);

car.move();   // "Moving at 60 mph"
boat.move();  // "Moving at 40 mph"
boat.float(); // "Floating in water"
plane.fly();  // "Flying at 500 mph and 30000 feet"
