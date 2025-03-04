/** 
 * @Best_Practices
 **     1- Keep inheritance chains shallow
 *          - Try not to go deeper than 2-3 levels
 *          - If you need more, consider composition
 * 
 **     2- Follow the Liskov Substitution Principle
 *          - If your code works with an Animal, it should work with a Dog
 *          - Child classes should be usable anywhere their parent is used
 * 
 **     3- Favor composition over inheritance when in doubt
 *          - Inheritance creates tight coupling
 *          - Composition is more flexible
 * 
 **     4- Use meaningful names and relationships
 *
*/

// Good - clear relationship
class Animal { }
class Dog extends Animal { }

// Bad - unclear relationship
class Utility { }
class UserProfile extends Utility { }
