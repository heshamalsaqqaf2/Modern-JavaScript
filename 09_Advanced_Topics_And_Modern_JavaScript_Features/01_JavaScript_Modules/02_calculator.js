'use strict';

// Default Exports
export default class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }
}

// You can also have regular exports alongside default
export const VERSION = '1.0';