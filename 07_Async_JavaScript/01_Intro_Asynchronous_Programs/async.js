'use strict';

// TODO: --------------- Understanding Synchronous vs Asynchronous Code ---------------
// ?Synchronous operations happen in sequence:
console.log('Starting...');
console.log('Doing something...');
console.log('Finishing Synchronous...\n');

// ?Let's simulate this with setTimeout:
setTimeout(() => {
    console.log('Doing Something...');
}, 2000);
console.log('Finishing Asynchronous...\n');

// TODO: --------------- Why Do We Need Asynchronous Programming? ---------------
// ?Here's a practical example of why synchronous code can be problematic:
function getDataFromServer() {
    // This would freeze your entire program!
    // Wait for 5 seconds...
    const startTime = Date.now();
    while (Date.now() - startTime < 5000) { }
    return 'Data From Server';
}
console.log('Starting to get data...');
const data = getDataFromServer();
console.log('Got data: ', data);
console.log('This message is delayed!\n');

// ?Here's the asynchronous version:
console.log('Starting to get data...');
// Simulating server request with setTimeout
setTimeout(() => {
    console.log('Got data: Data from server');
}, 5000);
console.log('This message appears immediately 1!');
console.log('This message appears immediately 2!');
console.log('This message appears immediately 3!');

// TODO: --------------- Common asynchronous operations ---------------
setTimeout(() => {
    console.log('Timer finished!');
}, 1000);
// !Error User Events (we saw these in the Events module)
button.addEventListener('click', () => {
    console.log('Button clicked!');
});
// !Error Getting data from a server (we'll cover this in detail later)
fetch('<https://api.example.com/data>')
    .then(response => response.json())
    .then(data => console.log(data));
// !Error Reading files (in Node.js)
fs.readFile('file.txt', (error, data) => {
    if (error) console.error(error);
    console.log(data);
});

// TODO: --------------- The JavaScript Event Loop ---------------
console.log('1');                           // Synchronous
setTimeout(() => { console.log('2'); }, 0); // Asynchronous
console.log('3');                           // Synchronous
// Outputs: 1 => 3 => 2
