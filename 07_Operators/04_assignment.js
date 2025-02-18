'use strict';

let num = 10; //basic assignment operation

num += 5;  // Same as: num = num + 5
console.log(num);  // 15

num -= 3;  // Same as: num = num - 3
console.log(num);  // 12

num *= 2;  // Same as: num = num * 2
console.log(num);  // 24

num /= 4;  // Same as: num = num / 4
console.log(num);  // 6

num %= 4;  // Same as: num = num % 4
console.log(num);  // 2

// Chained assignment
let x, y, z;
x = y = z = 5;
console.log(x, y, z);  // Outputs: 5 5 5