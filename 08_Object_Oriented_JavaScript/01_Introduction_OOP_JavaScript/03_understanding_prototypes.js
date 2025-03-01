'use strict';

const car = {
    brand: 'Toyota'
};

// Let's look at car's prototype
console.log(Object.getPrototypeOf(car));
/* You'll see something like:
{
    constructor: ƒ Object()
    hasOwnProperty: ƒ hasOwnProperty()
    toString: ƒ toString()
    ...and more methods
}
*/

// This is why we can call methods like toString() on any object
console.log(car.toString()); // "[object Object]"

// But where did toString() come from? The car object doesn't have it!
console.log(car.hasOwnProperty('toString')); // false