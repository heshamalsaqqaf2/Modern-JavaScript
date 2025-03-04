'use strict';

// Basic operations
console.log(2n + 3n);    // 5n
console.log(3n * 4n);    // 12n
console.log(10n / 3n);   // 3n (rounds down)
console.log(10n % 3n);   // 1n

// Can't mix with regular numbers
try {
    console.log(2n + 3); //! TypeError!
} catch (e) {
    console.log("Can't mix BigInt and regular numbers");
}

// Convert if you need to mix
console.log(2n + BigInt(3));  // 5n
console.log(Number(2n) + 3);  // 5