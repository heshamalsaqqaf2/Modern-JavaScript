'use strict';

// Basic GET request
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json()) // Parse JSON response
    .then(data => console.log(data))
    .catch(error => console.log('Error: ', error));

// Same request using async/await
async function getPost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/2');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error: ', error);
    }
}
getPost();

// Important points about the response:
async function examineResponse() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        console.log('Status: ', response.status);
        console.log('OK? : ', response.ok);
        console.log('Status Text: ', response.statusText);
        console.log('Headers: ', response.headers);
    }
    catch (error) {
        console.error('Error: ', error);
    }
}
examineResponse();