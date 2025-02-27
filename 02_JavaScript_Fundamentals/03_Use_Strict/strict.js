'use strict';

/** 
 * @description
 * *Benefits of Using Strict Mode
 *   1- Prevents accidental globals: Without strict mode, assigning a value to an undeclared variable creates a global variable.Strict mode throws an error instead.
 *   2- Eliminates silent errors: Some developer errors that are silently ignored in non-strict mode will generate errors in strict mode.
 *   3- Improves performance: In some cases, strict mode code can be optimized to run faster than identical code not in strict mode.
 *   4- Prohibits some unsafe features: Strict mode throws errors when certain unsafe actions are taken, like deleting a variable.
*/

// x = 3.14;  //! This will cause an error
let x = 3.14;
console.log(x);

function strictFunction() {
    'use strict';
    let y = 3.14;  // This is fine
    z = 42;  //! This will cause an error
}
strictFunction();
