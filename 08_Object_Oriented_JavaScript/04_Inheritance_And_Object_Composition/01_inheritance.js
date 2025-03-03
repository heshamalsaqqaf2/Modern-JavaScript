'use strict';

// TODO: Understanding Inheritance

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
    // Dog gets everything from Animal plus its own features
    bark() {
        this.energy -= 5;
        console.log(`${this.name} barks: Woof!`);
    }
}
const rex = new Dog('Rex');

console.log(rex.name);       // "Rex"
console.log(rex.energy);     // 100
rex.eat('kibble');           // "Rex eats kibble"
console.log(rex.energy);     // 110
rex.bark();                  // "Rex barks: Woof!"
console.log(rex.energy);     // 105

/** 
 * @summary
 *  When we use extends, we're telling JavaScript that Dog should have everything Animal has, plus any extra features we add.
 *  This is why rex can both eat (from Animal) and bark (from Dog).
*/