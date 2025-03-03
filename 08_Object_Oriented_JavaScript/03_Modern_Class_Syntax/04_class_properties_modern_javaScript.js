'use strict';

// TODO: Modern JavaScript allows declaring properties directly in the class:
class Animal {
    // Class properties (not all browsers support this yet)
    species = 'unknown';
    isAlive = true;

    constructor(name) {
        this.name = name;
    }

    describe() {
        console.log(`${this.name} is a ${this.species}`);
    }
}

const animal = new Animal('Rex');
console.log(animal.isAlive); // true