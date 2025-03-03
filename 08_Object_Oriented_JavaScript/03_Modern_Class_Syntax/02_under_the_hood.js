'use strict';

class Dog {
    constructor(name) {
        this.name = name;
    }
    bark() {
        console.log('Woof!');
    }
}

const dog = new Dog('Rex');

// These all return true
console.log(typeof Dog); // "function"
console.log(dog instanceof Dog); // true
console.log(dog.bark === Dog.prototype.bark); // true