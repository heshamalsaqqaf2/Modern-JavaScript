'use strict';

// TODO: --------------------------- 01 Understanding Form Validation ---------------------------

// ? ______________________ Regular Expressions (Regex) ______________________
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
    phone: /^\\d{10}$/,
};

// ? ______________________ Setting Up Our Form Elements ______________________
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

// ? ______________________ Validation Helper Functions ______________________
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

// ? ______________________ Individual Validation Functions ______________________
// Each validation function returns true if input is valid, false otherwise
function validateUsername(value) {
    // First check if there's any value at all
    if (!value) {
        showError('username', 'Username is required');
        return false;
    }
    // Test the value against our username pattern
    // .test() is a regex method that returns true if the string matches the pattern
    if (!patterns.username.test(value)) {
        showError('username', 'Username must be 5-12 characters, letters and numbers only');
        return false;
    }
    hideError('username');
    return true;
}
function validateEmail(value) {
    if (!value) {
        showError('email', 'Email is required');
        return false;
    }
    if (!patterns.email.test(value)) {
        showError('email', 'Please enter a valid email address');
        return false;
    }
    hideError('email');
    return true;
}
function validatePassword(value) {
    if (!value) {
        showError('password', 'Password is required');
        return false;
    }
    if (!patterns.password.test(value)) {
        showError('password',
            'Password must be at least 8 characters long and contain at least one letter and one number');
        return false;
    }
    hideError('password');
    return true;
}
function validateConfirmPassword(value) {
    if (!value) {
        showError('confirmPassword', 'Please confirm your password');
        return false;
    }
    // Check if it matches the password field
    if (value !== formElements.password.input.value) {
        showError('confirmPassword', 'Passwords do not match');
        return false;
    }
    hideError('confirmPassword');
    return true;
}
function validatePhone(value) {
    // Phone is optional, so empty value is OK
    if (!value) {
        hideError('phone');
        return true;
    }
    if (!patterns.phone.test(value)) {
        showError('phone', 'Please enter a valid 10-digit phone number');
        return false;
    }
    hideError('phone');
    return true;
}

// ? ______________________ Setting Up Event Listeners ______________________
// Input event fires whenever the input value changes (typing, pasting, etc.)
formElements.username.input.addEventListener('input', (event) => {
    validateUsername(event.target.value);
    validateForm(); // Check if entire form is valid
});
formElements.email.input.addEventListener('input', (event) => {
    validateEmail(event.target.value);
    validateForm();
});
formElements.password.input.addEventListener('input', (event) => {
    validatePassword(event.target.value);
    // Also validate confirm password if it has a value
    // (in case user goes back to change password)
    if (formElements.confirmPassword.input.value) {
        validateConfirmPassword(formElements.confirmPassword.input.value);
    }
    validateForm();
});
formElements.confirmPassword.input.addEventListener('input', (event) => {
    validateConfirmPassword(event.target.value);
    validateForm();
});
formElements.phone.input.addEventListener('input', (event) => {
    validatePhone(event.target.value);
    validateForm();
});

// ? ______________________ Checking Overall Form Validity ______________________
// Checks if all required fields are valid
function validateForm() {
    const isValid =
        validateUsername(formElements.username.input.value) &&
        validateEmail(formElements.email.input.value) &&
        validatePassword(formElements.password.input.value) &&
        validateConfirmPassword(formElements.confirmPassword.input.value) &&
        validatePhone(formElements.phone.input.value);
    // Enable/disable submit button based on form validity
    submitButton.disabled = !isValid;
}

// ? ______________________ Handling Form Submission ______________________
form.addEventListener('submit', (event) => {
    event.preventDefault();
    // In a real application, you would send the data to a server here
    console.log('Form submitted with data:', {
        username: formElements.username.input.value,
        email: formElements.email.input.value,
        password: formElements.password.input.value,
        phone: formElements.phone.input.value || 'Not provided'
    });
    // Reset the form
    form.reset();
    // Reset validation classes
    Object.values(formElements).forEach(element => {
        element.input.classList.remove('valid', 'invalid');
    });
    // Disable submit button until form is valid again
    submitButton.disabled = true;
});