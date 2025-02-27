/**
 * @Best_Practices
 *    ?1- Choose the right method for your needs
 *      1.1- Use find/findIndex when looking for a specific item
 *      2.1- Use some/every for validation
 *      3.1- Use filter when you need all matching items
 *      4.1- Use map for transformations
 *      5.1- Use reduce for computations
 *      6.1- Use forEach if you do not need a return value like side effects (which we will learn about soon!)
 *
 *    ?2- Consider performance:
 *      1.2- Methods like find, findIndex, some, and every stop early
 *      2.2- Methods like map, filter, and forEach always process all elements
 * 
 *    ?2- Chain methods thoughtfully:
 *      *Example of well-organized method chaining
 *        let result = products
 *       .filter(product => product.inStock)        // First, get in-stock items
 *       .map(product => product.price)             // Then, get their prices
 *       .some(price => price < 100);               // Finally, check if any are under $100
 * 
 * @summary
 *    1- forEach: Execute code for each element
 *    2- map: Transform elements into a new array
 *    3- filter: Select elements that pass a test
 *    4- reduce: Compute a single value from an array
 *    5- find: Get the first matching element
 *    6- findIndex: Get the index of first match
 *    7- some: Check if at least one element passes a test
 *    8- every: Check if all elements pass a test
 *
 *  *Understanding these methods and when to use each one will help you write more efficient and readable code when working with arrays.
 *  *These 8 methods are frequently used in the industry, but there are many more to explore.
 *  *Go check the MDN Documentation to find out about more array methods and how they work!,
 *  *You can find them on the left, under the “Instance Methods” part.
 *  
*/