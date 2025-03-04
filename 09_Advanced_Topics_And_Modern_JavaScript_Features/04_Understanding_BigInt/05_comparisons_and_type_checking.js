'use strict';

// Comparing BigInts
console.log(2n > 1n);   // true
console.log(2n === 2n); // true
console.log(2n == 2);   // true (loose equality)
console.log(2n === 2);  // false (strict equality)

// Type checking
const big = 123n;
console.log(typeof big); // "bigint"

function isBigInt(value) {
    return typeof value === 'bigint';
}
