'use strict';
let globalVar = "I'm visible everywhere";

function scopeExample() {
    let functionVar = "I'm only visible in this function";
    if (true) {
        let blockVar = "I'm only visible in this block";
        console.log(globalVar, functionVar, blockVar); // This works fine
    }
    console.log(globalVar, functionVar); // This works fine
    // console.log(blockVar); //! This would cause an error
}
scopeExample();
console.log(globalVar); // This works fine
// console.log(functionVar); //! This would cause an error
console.log("\n");

