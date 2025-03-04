'use strict';

function* demo() {
    console.log('Start');
    const a = yield 1;
    console.log('Got:', a);
    const b = yield 2;
    console.log('Got:', b);
}

const gen = demo();
console.log(gen.next().value);          // Prints "Start",        returns 1
console.log(gen.next('hello').value);   // Prints "Got: hello",   returns 2
console.log(gen.next('world').value);   // Prints "Got: world",   returns undefined