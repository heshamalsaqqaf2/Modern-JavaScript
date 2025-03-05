/** 
 * @description
 * 
 **   1- What We'll Be Building:
 *        - Fetches todo data from an API
 *        - Displays todo in a user-friendly way
 *        - Allows creating new todo
 *        - Allows marking todo as complete/incomplete
 *        - Allows deleting todo
 * 
 **   2- What We'll Be Using:
 *        - DOM manipulation (creating/modifying elements)
 *        - Event handling
 *        - Fetch API for HTTP requests
 *        - JSONPlaceholder API as our backend
 *        - Async/await for handling asynchronous operations
 * 
 **   3- Development Approach:
 *        - Start by understanding our data
 *        - Build features incrementally
 *        - Refactor and improve our code as we go
 *        - Follow real-world development practices
 * 
 **   4- Why This Approach?:
 *        - Understand your data before building UI
 *        - Start simple and add complexity gradually
 *        - Test each piece as you build it
 *        - Think about user experience
 *        - Handle errors appropriately
 * 
 * @Understanding_The_Data_Structure
 * 
 *    todo-app/
 *       ├── index.html
 *       ├── styles.css
 *       ├── app.js
 *
 **    Add This Basic HTML:

 **    Add this to your app js:

 **    When you run this on Live Server, open your browser's console (F12) and you'll see:
 *          1- The full array of todo
 *          2- What a single todo looks like
 *          3- Various statistics about our data
 * 
 **    Looking at the console, we can see that each todo has these properties:
 *          - 'id': A unique identifier for the todo
 *          - 'title': The actual text of the todo item
 *          - 'completed': A boolean (true/false) indicating if it's done
 *          - 'userId': An ID representing which user the todo belongs to
 * 
 **    This understanding is crucial because it tells us:
 *          1- What data we can display
 *          2- What actions we can take (like toggling completion)
 *          3- How we might want to structure our UI
 * 
 **    Next Steps:
 *          - Now that we understand our data, we can start thinking about how to display it in a more user-friendly way
 *          - We'll want to create UI elements that show the todo text and completion status
 *          - We can plan for features like toggling completion and deleting todo
 *          - We might want to add filtering by completion status
 * 
*/




// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>ToDo App</title>
//     <link rel="stylesheet" href="styles.css">
// </head>

// <body>
//     <div class="container">
//         <h1>Understanding Our Todo Data</h1>
//         <div id="root"></div>
//     </div>
//     <script src="app.js"></script>
// </body>

// </html> 

