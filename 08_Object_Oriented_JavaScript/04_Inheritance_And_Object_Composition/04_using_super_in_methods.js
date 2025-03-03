'use strict';

class Animal {
    constructor(name) {
        this.name = name;
        this.energy = 100;
    }
    makeSound() {
        console.log(`${this.name} makes a generic sound`);
        this.energy -= 3;
    }
}

//! Bad approach: Completely replacing the parent's method
class Dog1 extends Animal {
    makeSound() {
        // We lost all the parent's functionality!
        console.log(`${this.name} barks: Woof!`);
        // We even forgot to reduce energy!
    }
}

//? Good approach: Extending the parent's method
class Dog2 extends Animal {
    makeSound() {
        super.makeSound();  // First do what animals normally do
        console.log(`${this.name} barks: Woof!`); // Then add dog-specific behavior
        this.energy -= 2;  // Extra energy cost for barking
    }
}

const rex1 = new Dog1('Rex');
const rex2 = new Dog2('Rex');

rex1.makeSound();
console.log(rex1.energy); // Still 100! The energy reduction was lost

rex2.makeSound();
console.log(rex2.energy); // 95 (100 - 3 - 2)
// Output:
// "Rex makes a generic sound"
// "Rex barks: Woof!" 