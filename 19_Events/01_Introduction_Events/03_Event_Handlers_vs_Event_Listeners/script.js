'use strict';

// TODO: Event Handler (older method):
const button = document.getElementById('clickButton');
// Event handler method
button.onclick = () => {
    showMessage('Clicked using event handler');
};
// If you assign another handler, it replaces the previous one
button.onclick = () => {
    showMessage('New handler replaced the old one');
};
const box = document.getElementById('hoverBox');
const displayArea = document.getElementById('displayArea');
function showMessage(text) {
    displayArea.textContent = text;
}
// Click event
button.addEventListener('click', () => {
    showMessage('Button clicked!');
});
// Mouse over and out
box.addEventListener('mouseover', () => {
    showMessage('Mouse is over the box');
    box.classList.add('highlight');
});
box.addEventListener('mouseout', () => {
    showMessage('Mouse left the box');
    box.classList.remove('highlight');
});

// TODO: Event Listener (modern method):
// Event listeners can have multiple functions
button.addEventListener('click', () => {
    showMessage('First listener');
});
button.addEventListener('click', () => {
    showMessage('Second listener - both will run!');
});
inputField.addEventListener('keydown', (event) => {
    showMessage(`Key pressed: ${event.key}`);
});
inputField.addEventListener('keyup', () => {
    showMessage('Key released');
});
