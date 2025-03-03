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
    sleep() {
        console.log(`${this.name} sleeps`);
        this.energy += 20;
    }
}

class Dog extends Animal {
    // JavaScript automatically creates this constructor:
    // constructor(...args) {
    //     super(...args);
    // }

    bark() {
        this.energy -= 5;
        console.log(`${this.name} barks: Woof!`);
    }
}
