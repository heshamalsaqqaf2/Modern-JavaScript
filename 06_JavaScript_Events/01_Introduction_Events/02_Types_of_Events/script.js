'use strict';

// TODO: Mouse Events:
const button = document.getElementById('clickButton');
const box = document.getElementById('hoverBox');
const displayArea = document.getElementById('displayArea');
const inputField = document.getElementById('inputField');

function showMessage(text) {
    displayArea.textContent = text;
}
// Click event
button.addEventListener('click', () => {
    showMessage("Button clicked");
});
box.addEventListener('mouseover', () => {
    showMessage('Mouse is over the box');
    box.classList.add('highlight');
});
box.addEventListener('mouseout', () => {
    showMessage('Mouse left the box');
    box.classList.remove('highlight');
});

// TODO: Keyboard Events
inputField.addEventListener('keydown', (event) => {
    showMessage(`Key pressed: ${event.key}`);
});
inputField.addEventListener('keyup', () => {
    showMessage(`Key released`);
});

// TODO: Form Events
inputField.addEventListener('focus', () => {
    showMessage(`Input Field Is Focused.`);
});
inputField.addEventListener('blur', () => {
    showMessage('Input field lost focus');
});

// TODO: Document Events
document.addEventListener('DOMContentLoaded', () => {
    showMessage(`Document is ready!`);
    console.log(`Document is ready!`);
});
window.addEventListener('load', () => {
    showMessage(`Page is fully loaded!`);
});