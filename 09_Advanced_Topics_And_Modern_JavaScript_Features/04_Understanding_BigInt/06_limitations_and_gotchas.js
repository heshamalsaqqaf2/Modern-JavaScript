'use strict';

// Can't use decimals
// const decimal = 1.5n;            //! Error Syntax!

// Can't use Math object methods
// console.log(Math.max(1n, 2n));   //! Error Syntax!

// No unary plus
// console.log(+1n);                //! Error Syntax!

// Division rounds toward zero
console.log(5n / 2n); // 2n, not 2.5n

// JSON doesn't support BigInt by default
const obj = { number: 123n };
try {
    JSON.stringify(obj);            //! Error Syntax!
} catch (e) {
    console.log("Can't JSON stringify BigInts directly");
}