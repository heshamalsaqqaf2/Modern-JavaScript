'use strict';

// The largest safe integer in JavaScript
console.log(Number.MAX_SAFE_INTEGER);  // 9007199254740991

// What happens when we go beyond?
console.log(9007199254740991 + 1);     // 9007199254740992
console.log(9007199254740991 + 2);     //! 9007199254740992 (Wrong!)

// This is where BigInt comes in
console.log(9007199254740991n + 1n);   // 9007199254740992n
console.log(9007199254740991n + 2n);   //? 9007199254740993n (Correct!)