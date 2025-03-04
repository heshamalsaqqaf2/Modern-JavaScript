'use strict';

// TODO: --------------------------- Utils File ---------------------------
// ?Basic Export and Import
import { add, subtract } from "./01_utils.js";

console.log(add(5, 3));        // 8
console.log(subtract(5, 3));   // 2

// TODO: --------------------------- Calculator File ---------------------------
// ?Default Exports
import Calculator, { VERSION } from './02_calculator.js';

const calc = new Calculator();
console.log(calc.add(5, 3));        // 8
console.log(calc.subtract(5, 3));   // 2
console.log(VERSION);               // '1.0'

// TODO: --------------------------- Math File ---------------------------
// ?Renaming Imports
import { add as sum, subtract as minus } from './03_math.js';

console.log(sum(5, 3));     // 8
console.log(minus(5, 3));   // 2

// TODO: --------------------------- MathUtils File ---------------------------
// ?Importing Everything
import * as mathUtils from './04_mathUtils.js';

console.log(mathUtils.add(5, 3));      // 8
console.log(mathUtils.multiply(4, 2)); // 8