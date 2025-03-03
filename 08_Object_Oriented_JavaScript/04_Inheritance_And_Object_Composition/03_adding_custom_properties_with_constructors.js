'use strict';

class Animal {
    constructor(name) {
        this.name = name;
        this.energy = 100;
    }
    eat(food) {
        console.log(`${this.name} eats ${food}`);
        this.energy += 10;
    }
}

class Dog extends Animal {
    constructor(name, breed) {  // Our own constructor
        super(name);            // Call parent constructor first!
        this.breed = breed;     // Then add dog-specific properties
    }
    bark() {
        console.log(`${this.name} the ${this.breed} barks: Woof!`);
    }
}

/**
 * @summary
 *   !If you forget to call super(), you'll get this error:
 *      1- ReferenceError: Must call super constructor in derived class
 *      2- before accessing 'this' or returning from derived constructor
*/

// TODO: Here's what happens step by step when creating a new Dog:
const rex = new Dog('Rex', 'German Shepherd');

/**
 * @description
 *  Under the hood:
 *   1. Dog constructor starts
 *   2. super(name) calls Animal constructor
 *       * Creates the base object
 *       * Sets name and energy
 *   3. Dog constructor continues
 *       * Sets breed
 *   4. Object is fully created
 * 
*/

console.log(rex);
/**
 * @Output
 *   shows the final object:
        Dog {
        name: "Rex",
        energy: 100,
        breed: "German Shepherd"
    }
 * 
*/