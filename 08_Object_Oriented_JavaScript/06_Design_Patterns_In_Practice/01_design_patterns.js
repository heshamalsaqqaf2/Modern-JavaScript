'use strict';

// TODO: ---------------------------------------- Singleton Pattern ----------------------------------------
class ConfigManager {
    static #instance = null;
    #config = {};

    constructor() {
        // Prevent direct construction
        if (ConfigManager.#instance) {
            throw new Error('Cannot create multiple instances of ConfigManager');
        }
        ConfigManager.#instance = this;
    }

    static getInstance() {
        if (!ConfigManager.#instance) {
            ConfigManager.#instance = new ConfigManager();
        }
        return ConfigManager.#instance;
    }

    setConfig(key, value) {
        this.#config[key] = value;
    }

    getConfig(key) {
        return this.#config[key];
    }
}

// Usage:
const config1 = ConfigManager.getInstance();
const config2 = ConfigManager.getInstance();

config1.setConfig('theme', 'dark');
console.log(config2.getConfig('theme')); // 'dark'
console.log(config1 === config2); // true - same instance
//! This would throw an error:
// const config3 = new ConfigManager();

// TODO: ---------------------------------------- Factory Pattern ----------------------------------------
// Different types of users in a system
class BasicUser {
    constructor(name) {
        this.name = name;
        this.permissions = ['read'];
    }
}

class AdminUser {
    constructor(name) {
        this.name = name;
        this.permissions = ['read', 'write', 'delete'];
    }
}

class ModeratorUser {
    constructor(name) {
        this.name = name;
        this.permissions = ['read', 'write'];
    }
}

// Factory class to create users
class UserFactory {
    static createUser(type, name) {
        switch (type.toLowerCase()) {
            case 'basic':
                return new BasicUser(name);
            case 'admin':
                return new AdminUser(name);
            case 'moderator':
                return new ModeratorUser(name);
            default:
                throw new Error(`User type ${type} not supported`);
        }
    }
}

// Usage:
const user1 = UserFactory.createUser('basic', 'John');
const user2 = UserFactory.createUser('admin', 'Jane');

console.log(user1.permissions); // ['read']
console.log(user2.permissions); // ['read', 'write', 'delete']