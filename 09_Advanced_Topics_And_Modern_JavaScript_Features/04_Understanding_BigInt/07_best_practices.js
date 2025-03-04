'use strict';

// TODO: ------------------------ 1- Use BigInt Only When Needed ------------------------
// Good: Large numbers beyond MAX_SAFE_INTEGER
const largeNumber = 9007199254740993n;

// Unnecessary: Small numbers
const smallNumber = 123; // Use regular number instead of 123n

// TODO: ------------------------ 2- Consistent Type Usage ------------------------
// Good: Convert all numbers to same type
const sum = BigInt(numberValue) + bigIntValue;

// Bad: Mixed types
const sum2 = numberValue + bigIntValue; //! Error!

// TODO: ------------------------ 3- Handle JSON Serialization ------------------------
const data = {
    id: 123456789123456789n
};

// Custom JSON handling
const json = JSON.stringify(data, (key, value) =>
    typeof value === 'bigint' ? value.toString() : value
);

// Parse back
const parsed = JSON.parse(json, (key, value) =>
    /^\\d+$/.test(value) ? BigInt(value) : value
);
