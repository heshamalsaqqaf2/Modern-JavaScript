'use strict';

// TODO: ----------------------- 1- ID Handling -----------------------
class DatabaseRecord {
    constructor(id) {
        this.id = BigInt(id);
    }
    toString() {
        return this.id.toString();  // Convert back to string for display
    }
    equals(other) {
        return this.id === other.id;
    }
}
const record = new DatabaseRecord("9007199254740993");
console.log(record.toString()); // "9007199254740993"

// TODO: ----------------------- 2- Financial Calculations -----------------------
class LargeMoneyAmount {
    // Store cents as BigInt to avoid decimal issues
    constructor(dollars, cents = 0) {
        this.cents = BigInt(dollars) * 100n + BigInt(cents);
    }
    add(other) {
        return new LargeMoneyAmount(0, this.cents + other.cents);
    }
    toString() {
        const wholeDollars = this.cents / 100n;
        const remainingCents = this.cents % 100n;
        return `$${wholeDollars}.${remainingCents.toString().padStart(2, '0')}`;
    }
}
const amount1 = new LargeMoneyAmount(9007199254740991);
const amount2 = new LargeMoneyAmount(1);
console.log(amount1.add(amount2).toString());  // Works with huge numbers

// TODO: ----------------------- 3- Performance Measurements -----------------------
function measureLongOperation() {
    const start = process.hrtime.bigint();

    // Simulate long operation
    for (let i = 0; i < 1000000; i++) {
        // ...
    }
    const end = process.hrtime.bigint();
    const duration = end - start;

    console.log(`Operation took ${duration} nanoseconds`);
}