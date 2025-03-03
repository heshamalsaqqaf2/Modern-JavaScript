'use strict';

// TODO: Classes: A New Way to Write Constructors
//* Our old constructor way
function User(name, age) {
    this.name = name;
    this.age = age;
}
User.prototype.greet = function () {
    console.log(`Hi, I'm ${this.name}`);
};

//* The new class way - same functionality!
class User2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hi, I'm ${this.name}`);
    }
}
// They work the same way
const user = new User2('Hesham', 30);
user.greet(); // "Hi, I'm Hesham"
