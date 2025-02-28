'use strict';

// TODO: ---------------------- Always handle errors properly: ----------------------
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

// TODO: ---------------------- Use appropriate HTTP methods: ----------------------
//? GET for retrieving data
//? POST for creating new data
//? PUT/PATCH for updating data
//? DELETE for removing data

// TODO: ---------------------- Set proper headers: ----------------------
const headers = {
    'Content-Type': 'application/json',
    // Add any other required headers
};

// TODO: ---------------------- Handle loading and error states in real applications: ----------------------
async function fetchWithStatus() {
    let isLoading = true;
    try {
        // Show loading state
        console.log('Loading...');

        const response = await fetch(url);
        const data = await response.json();

        // Handle success
        console.log('Data loaded:', data);
    } catch (error) {
        // Handle error
        console.error('Error loading data:', error);
    } finally {
        // Always hide loading state
        isLoading = false;
        console.log('Loading finished');
    }
}