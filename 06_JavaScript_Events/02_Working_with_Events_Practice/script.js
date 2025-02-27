'use strict';

// TODO: --------------------------- 01 Understanding The Event Object ---------------------------

const nameInput = document.getElementById('nameInput');
nameInput.addEventListener('keydown', (event) => {
    // Let's look at what's inside the event object
    console.log('Event object:', event);
    // Most commonly used properties:
    console.log('Key pressed:', event.key);
    console.log('Target element:', event.target);
    console.log('Type of event:', event.type);
    // Getting input value
    console.log('Current input value:', event.target.value);
});

// ?Getting input values is particularly important. There are two ways
nameInput.addEventListener('input', (event) => {
    // These do the same thing:
    const value1 = event.target.value;
    const value2 = nameInput.value;
    console.log('User typed:', value1);
});

// TODO: --------------------------- 02 Preventing Default Behaviors ---------------------------

// ?Form Submission
const form = document.getElementById('myForm');
const emailInput = document.getElementById('emailInput');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
// !const nameInput = document.getElementById('nameInput');
form.addEventListener('submit', (event) => {
    let isValid = true;
    // Prevent the form from submitting immediately
    event.preventDefault();
    // Clear previous errors
    nameError.style.display = 'none';
    emailError.style.display = 'none';
    // Check name
    if (nameInput.value.trim() === '') {
        nameError.style.display = 'block';
        isValid = false;
    }
    // Basic email validation
    if (!emailInput.value.includes('@')) {
        emailError.style.display = 'block';
        isValid = false;
    }
    if (isValid) {
        console.log('Form is valid, sending data...');
        // Here you would typically send the data to a server
    }
});

// ?Custom Right-Click Menu
const customMenu = document.getElementById('customMenu');
document.addEventListener('contextmenu', (event) => {
    event.preventDefault(); // Prevent default context menu
    // Position and show our custom menu
    customMenu.style.display = 'block';
    customMenu.style.left = event.clientX + 'px';
    customMenu.style.top = event.clientY + 'px';
});
// Hide menu when clicking elsewhere
document.addEventListener('click', () => {
    customMenu.style.display = 'none';
});


// TODO: --------------------------- 03 Event Bubbling and When to Stop It---------------------------

// ?Understanding Bubbling
const modal = document.getElementById('simpleModal');
const container = document.getElementById('mainContainer');
modal.addEventListener('click', (event) => {
    console.log('Modal clicked');
});
container.addEventListener('click', () => {
    console.log('Container clicked');
});
document.body.addEventListener('click', () => {
    console.log('Body clicked');
});
/*Clicking the modal will log:
"Modal clicked"
"Container clicked"
"Body clicked"
*/

// ? When to Stop Bubbling
// 01- Modal Windows
// const modal = document.getElementById('simpleModal');
modal.addEventListener('click', (event) => {
    // Stop the click from reaching the document
    // (which might have a handler to close the modal)
    event.stopPropagation();
    console.log('Modal clicked, event stopped here');
});
// This won't run when clicking the modal
document.addEventListener('click', () => {
    console.log('Document clicked - modal should close');
});
// 02- Nested Interactive Elements
// !const container = document.getElementById('mainContainer');
// Using event delegation and adding the event listener to the container that holds 2 items
container.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        // Stop the event from triggering the item's click handler.
        event.stopPropagation();
        event.target.parentElement.remove();
        return;
    }
    if (event.target.classList.contains('item')) {
        // This wont run when delete button is clicked because propagation stops at the child level.
        console.log('Item clicked');
    }
});

// TODO: --------------------------------- 04 Working with Input Values ---------------------------------

// !const nameInput = document.getElementById("nameInput");
// !const form = document.getElementById("myForm");
// Real-time input handling
nameInput.addEventListener("input", (event) => {
    // event.target.value holds the current input value
    console.log("Current value:", event.target.value);
    // You can also use the input element directly
    console.log("Same value:", nameInput.value);
    // Common tasks:
    // 1. Validation
    if (event.target.value.length < 3) {
        nameError.textContent = "Name must be at least 3 characters";
        nameError.style.display = "block";
    } else {
        nameError.style.display = "none";
    }
    // 2. Transform input
    event.target.value = event.target.value.toUpperCase();
});

// Different events for different purposes
nameInput.addEventListener("change", (event) => {
    // 'change' fires when input loses focus
    console.log("Final value:", event.target.value);
});
nameInput.addEventListener("keyup", (event) => {
    // Handle specific keys
    if (event.key === "Enter") {
        console.log("Enter pressed, value is:", event.target.value);
    }
});
form.addEventListener("submit", (event) => {
    // Preventing default behavior of the submit event so that the page does not reload. Remove this and submit/press enter again to see the difference.
    event.preventDefault();
});