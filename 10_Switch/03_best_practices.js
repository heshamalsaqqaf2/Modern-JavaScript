/**
 * @Best_Practices
 *    1- Always use break statements unless you specifically intend to fall through to the next case.
 *    2- Use switch statements when you have many conditions to check against a single variable.
 *    3- For complex conditions or when comparing different variables, consider if-else statements or the true switch pattern.
 *    4- Consider readability: sometimes a series of if...else statements might be clearer than a switch.
 *    5- Remember that switch uses strict comparison (===), so be mindful of data types.
 *    6- Use case grouping to avoid repeating code for multiple cases with the same outcome.
 *    7- Compare switch and if/else:
 *
 * @summary
 *    1- The switch statement provides an alternative to multiple if...else checks.
 *    2- It evaluates an expression and executes the matching case.
 *    3- Break statements are crucial to prevent falling through to the next case.
 *    4- Multiple cases can be grouped to execute the same code block.
 *    5- Switch can be used with true as the expression to allow for more complex comparisons in the cases.
 *    6- Choose between switch and if...else based on the specific scenario and code readability.
 *
 *  *In the next section, we'll explore loops in JavaScript.
*/


/** 
 * @description
 *  * Compare switch and if/else:
 *      If you have 10 different conditions: switch is better
 *      If you have heterogeneous conditions: if/else is better
 *  * Example of heterogeneous conditions:
 *      let time = 14;
 *      let isWeekend = false;
 *      if (time < 12 && !isWeekend) {
 *          console.log("Good morning!");
 *      } else if (time >= 12 && time < 18 || isWeekend) {
 *          console.log("Good afternoon!");
 *      } else {
 *          console.log("Good evening!");
 *      }
 * @summary 
 *   * For a practical summary:
 *      ? Use switch when:
 *          1- You have one variable with specific values
 *          2- More than 3 different states
 *          3- You want to group multiple cases for the same output
 *      ? Use if/else when:
 *          1- You have compound conditions (&&, ||)
 *          2- You are dealing with ranges (e.g. 10 < x < 20)
 *          3- Examine different data types or unrelated conditions
 *      ? Always remember:
 *          1- break prevents the following conditions from being executed
 *          2- default handles uncovered conditions
 *          3- Readability is more important than code shortcuts
 * 
*/