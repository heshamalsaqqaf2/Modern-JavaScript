'use strict';

// TODO: --------------------------- 01 Understanding Form Validation ---------------------------

// ?Regular Expressions (Regex):
// Regular expressions (regex) are patterns that help us check if text follows certain rules
const patterns = {
    // Username pattern breakdown:
    // ^ - start of string
    // [a-zA-Z0-9] - any letter (uppercase or lowercase) or number
    // {5,12} - previous pattern must occur 5 to 12 times
    // $ - end of string
    username: /^[a-zA-Z0-9]{5,12}$/,

    // Email pattern breakdown:
    // [a-zA-Z0-9._%+-]+ - one or more letters, numbers, or allowed special chars
    // @ - literal @ symbol
    // [a-zA-Z0-9.-]+ - domain name (letters, numbers, dots, or hyphens)
    // \\. - literal dot (escaped with \\)
    // [a-zA-Z]{2,} - top level domain (.com, .org, etc) at least 2 chars
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/,

    // Password pattern breakdown:
    // (?=.*[A-Za-z]) - must contain at least one letter
    // (?=.*\\d) - must contain at least one number
    // [A-Za-z\\d]{8,} - must be at least 8 characters long
    password: /^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$/,

    // Phone pattern: exactly 10 digits
    phone: /^\\d{10}$/
};

// ?Setting Up Our Form Elements
// Get all form elements we'll need to work with
const form = document.getElementById('registrationForm');
// Putting form elements in an object for easy access and clean code
const formElements = {
    username: {
        input: document.getElementById('username'),
        error: document.getElementById('usernameError'),
        success: document.getElementById('usernameSuccess')
    },
    email: {
        input: document.getElementById('email'),
        error: document.getElementById('emailError')
    },
    password: {
        input: document.getElementById('password'),
        error: document.getElementById('passwordError')
    },
    confirmPassword: {
        input: document.getElementById('confirmPassword'),
        error: document.getElementById('confirmPasswordError')
    },
    phone: {
        input: document.getElementById('phone'),
        error: document.getElementById('phoneError')
    }
};
const submitButton = document.getElementById('submitButton');

// ?Validation Helper Functions
// Shows error message and adds invalid class to input
function showError(inputName, message) {
    const element = formElements[inputName];

    // Set error message text
    element.error.textContent = message;

    // Show error message (display: block)
    element.error.style.display = 'block';

    // If there's a success message, hide it
    if (element.success) {
        element.success.style.display = 'none';
    }

    // Add visual indicator that input is invalid
    element.input.classList.remove('valid');
    element.input.classList.add('invalid');
}

// Hides error message and adds valid class to input
function hideError(inputName) {
    const element = formElements[inputName];

    // Hide error message
    element.error.style.display = 'none';

    // Remove invalid class and add valid class
    element.input.classList.remove('invalid');
    element.input.classList.add('valid');
}