'use strict';

// Todo: for...of Loops (ES6+)
let names = "JavaScript";
let countCharacter = 0;

for (let char of names) {
    console.log(`Character: ${char}`);
    countCharacter++;
}
console.log("Count Character:", countCharacter);