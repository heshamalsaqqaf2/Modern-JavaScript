'use strict';

// Using the n suffix
const bigNumber = 123456789123456789n;

// Using BigInt() function
const alsoBig = BigInt("123456789123456789");
const fromNumber = BigInt(123456789);

// Note: You can't create BigInt from decimal numbers
// This will throw an error:
// const decimal = BigInt(123.45);
