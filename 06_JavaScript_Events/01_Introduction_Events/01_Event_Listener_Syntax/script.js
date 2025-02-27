'use strict';

// TODO: Adding Event Listeners
element.addEventListener(eventType, handlerFunction);
// Named function
function handleClick() {
    showMessage('Button clicked!');
}
button.addEventListener('click', handleClick);
// Anonymous function
button.addEventListener('click', () => {
    showMessage('Button clicked!');
});

// TODO: Removing Event Listeners
const removeButton = document.getElementById('removeButton');
function handleClick() {
    showMessage('Regular button clicked!');
}
// Add the listener
button.addEventListener('click', handleClick);
// Remove the listener when removeButton is clicked
removeButton.addEventListener('click', () => {
    button.removeEventListener('click', handleClick);
    showMessage('Event listener removed!');
});

// TODO: Passing Parameters to Event Handlers
function showCustomMessage(message) {
    showMessage(`Custom message: ${message}`);
}
button.addEventListener('click', () => {
    showCustomMessage('Hello from parameter!');
});
