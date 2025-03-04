'use strict';

class Debuggable {
    constructor() {
        this.debugMode = false;
    }

    enableDebug() {
        this.debugMode = true;
    }

    log(...args) {
        if (this.debugMode) {
            console.log(`[${this.constructor.name}]`, ...args);
        }
    }
}

class UserService extends Debuggable {
    #users = new Map();

    constructor() {
        super();
        this.log('Service initialized');
    }

    addUser(user) {
        this.log('Adding user:', user);

        try {
            this.#validateUser(user);
            this.#users.set(user.id, user);
            this.log('User added successfully');
        } catch (error) {
            this.log('Error adding user:', error.message);
            throw error;
        }
    }

    #validateUser(user) {
        if (!user.id || !user.name) {
            throw new Error('Invalid user data');
        }
    }
}

// Usage with debugging
const userService = new UserService();
userService.enableDebug(); // Turn on debugging

// This will log successfully
userService.addUser({ id: 1, name: 'John' });

// This will log an error
try {
    userService.addUser({ id: 2 });
} catch (error) {
    // Handle error
}