/**
 * @Best_Practices
 *    1- Use push() and pop() when possible (they're faster than shift() and unshift()).
 *    2- Be mindful that these methods modify the original array.
 *    3- Always consider whether you need to keep the original array unchanged.
 *    4- Check array length before using pop() or shift() if the array might be empty.
 *
 * @summary
 *    1- push() adds to the end, returns new length
 *    2- pop() removes from the end, returns removed element
 *    3- unshift() adds to the beginning, returns new length
 *    4- shift() removes from the beginning, returns removed element
 *    5- All these methods are destructive (they modify the original array)
 *    6- push/pop are faster than unshift/shift
 *    7- These methods form the foundation for implementing various data structures like stacks and queues
 *
 *  *In the next part, we'll explore how to loop over arrays using different types of loops and iteration methods.
 *  
*/