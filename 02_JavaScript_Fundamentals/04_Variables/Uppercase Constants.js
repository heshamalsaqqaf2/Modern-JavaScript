'use strict';

const MAX_USERS = 100;
const DEFAULT_LANGUAGE = 'English';
const COMPANY_NAME = 'Acme Corporation';

function createUser(username) {
    if (getCurrentUserCount() < MAX_USERS) {
        // Create user logic here
        console.log(`Creating user ${username} with default language ${DEFAULT_LANGUAGE}`);
    } else {
        console.log(`Cannot create user. ${COMPANY_NAME} has reached the maximum user limit.`);
    }
}
function getCurrentUserCount() {
    // Function body

};

createUser('Alice');
console.log("\n");

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