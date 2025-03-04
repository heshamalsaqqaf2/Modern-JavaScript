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
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    bark() {
        console.log(`${this.name} barks!`);
        this.energy -= 5;
    }
}

class PoliceDog extends Dog {
    constructor(name, breed, badgeNumber) {
        super(name, breed);  // Calls Dog's constructor, which calls Animal's
        this.badgeNumber = badgeNumber;
        this.trained = true;
    }
    trackSuspect(suspectName) {
        if (this.energy < 30) {
            console.log(`${this.name} is too tired to track!`);
            return;
        }
        console.log(`${this.name} is tracking ${suspectName}...`);
        this.energy -= 25;
    }
}

const max = new PoliceDog('Max', 'German Shepherd', 'K9-123');

// Max has access to all methods up the chain:
max.eat('special K9 food');     // From Animal
max.bark();                     // From Dog
max.trackSuspect('suspect');    // From PoliceDog

console.log(max);
/**
 * @Output
    PoliceDog {
        name: "Max",F
        energy: 85,
        breed: "German Shepherd",
        badgeNumber: "K9-123",
        trained: true
    }
 * 
*/