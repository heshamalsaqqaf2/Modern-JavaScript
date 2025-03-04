'use strict';

// TODO: ------------------------ Keep modules focused ------------------------
// Better: Single responsibility
export class User { }

// Avoid: Too many unrelated things
export class User { }
export class Product { }
export class Order { }

// TODO: ------------------------ Use meaningful file names ------------------------
// Good
import User from './User.js'
import { validateEmail } from './validators.js'

// Avoid
import User from './stuff.js'
import { validateEmail } from './01_utils.js'

// TODO: ------------------------ Prefer named exports for multiple items ------------------------
// Better
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// Instead of
export default {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b
};