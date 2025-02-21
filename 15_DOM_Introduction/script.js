// TODO: The Document Object
console.log(document);
console.log(document.title);
console.log(document.body);
console.log(document.head);


// TODO: DOM Tree Structure
// Get the main div
let mainDiv = document.getElementById('main');
// Explore its structure
console.log('Parent element:', mainDiv.parentElement);
console.log('First child:', mainDiv.firstElementChild);
console.log('All children:', mainDiv.children);
console.log('Number of children:', mainDiv.children.length);
console.log("\n");

// TODO: DOM Nodes vs Elements
console.log('Child Nodes:', mainDiv.childNodes);
console.log('Child Elements:', mainDiv.children);
console.log("\n");

// TODO: Live Preview of DOM Changes
// Change the text color of the h1
document.querySelector('h1').style.color = 'blue';

// Change the background of paragraphs with the 'highlight' class
let highlightedPara = document.querySelector('.highlight');
highlightedPara.style.backgroundColor = 'yellow';

// Add some text to the first list item
document.querySelector('li').textContent += ' (modified)';

// TODO: Try this in your console:
// !Select an element in the Elements panel, then try:
// $0.style.color = 'red';
// $0.textContent = 'Changed via console!';