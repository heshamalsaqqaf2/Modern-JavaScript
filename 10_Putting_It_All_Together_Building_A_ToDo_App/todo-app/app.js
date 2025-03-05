// app.js

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

const STORAGE_KEY = 'todos-app';
let currentFilter = 'all';

let todoState = [];

// Update fetchTodos with loading state
async function fetchTodos() {
    showLoading();
    try {
        // Try loading from localStorage first
        let todos = loadFromLocalStorage();

        // If no stored todos, fetch from API
        if (todos.length === 0) {
            const response = await fetch(API_URL);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            todos = await response.json();
            todos = todos.slice(0, 10);  // Limit initial load
            saveToLocalStorage();  // Save to localStorage
        }

        todoState = todos;
        return todoState;
    } catch (error) {
        showError('Failed to load todos. Please refresh the page.');
        return [];
    } finally {
        hideLoading();
        updateTodoCount();
    }
}

function createTodoElement(todo) {
    const todoElement = document.createElement('div');
    todoElement.className = `todo-item ${todo.completed ? 'completed' : ''}`;
    todoElement.id = `todo-${todo.id}`;

    // Using semantic HTML: span for text, buttons for actions
    todoElement.innerHTML = `
        <span class="todo-text">${todo.title}</span>
        <div class="todo-actions">
            <button class="btn btn-toggle" data-action="toggle">
                ${todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button class="btn btn-delete" data-action="delete">
                Delete
            </button>
        </div>
    `;
    return todoElement;
}

function updateTodoElement(todo) {
    const todoElement = document.getElementById(`todo-${todo.id}`);
    if (todoElement) {
        const newTodoElement = createTodoElement(todo);
        todoElement.replaceWith(newTodoElement);
    }
}
// Update todo count
function updateTodoCount() {
    const activeCount = todoState.filter(todo => !todo.completed).length;
    document.getElementById('todoCount').textContent =
        `${activeCount} item${activeCount !== 1 ? 's' : ''} left`;
}

function renderTodoList(todos = todoState) { // Default to todoState if no argument provided
    const todoList = document.getElementById("todoList");
    todoList.innerHTML = "";

    if (todos.length === 0) {
        todoList.innerHTML = "<p>No todos found.</p>";
        return;
    }

    todos.forEach((todo) => {
        const todoElement = createTodoElement(todo);
        todoList.appendChild(todoElement);
    });
}

function handleTodoAction(event) {
    // Find if a button was clicked
    const button = event.target.closest('button');
    if (!button) return; // If no button was clicked, do nothing

    // Get which action to perform from the button's data attribute
    // <button data-action="toggle">Complete</button>
    // or
    // <button data-action="delete">Delete</button>
    const action = button.dataset.action;
    // Find which todo item this button belongs to
    const todoElement = button.closest('.todo-item');
    // Get the todo ID from the element's ID
    const todoId = parseInt(todoElement.id.replace('todo-', ''));
    // Find the actual todo data from our state
    const todo = todoState.find(t => t.id === todoId);

    if (!todo) return;

    // Perform the appropriate action
    if (action === 'toggle') {
        toggleTodoStatus(todo);
    } else if (action === 'delete') {
        deleteTodo(todo);
    }
}

async function toggleTodoStatus(todo) {
    const todoElement = document.getElementById(`todo-${todo.id}`);
    const toggleButton = todoElement.querySelector('.btn-toggle');
    toggleButton.disabled = true;

    try {
        const response = await fetch(`${API_URL}/${todo.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                completed: !todo.completed
            })
        });

        if (!response.ok) throw new Error('Failed to update todo');

        todo.completed = !todo.completed;
        updateTodoElement(todo);

        saveToLocalStorage();
        updateTodoCount();
        filterTodos();  // Reapply current filter

    } catch (error) {
        showError('Failed to update todo. Please try again.');
        toggleButton.disabled = false;
    }
}

async function deleteTodo(todo) {
    const todoElement = document.getElementById(`todo-${todo.id}`);
    todoElement.classList.add('deleting');

    try {
        const response = await fetch(`${API_URL}/${todo.id}`, {
            method: 'DELETE'
        });

        if (!response.ok) throw new Error('Failed to delete todo');

        todoState = todoState.filter(t => t.id !== todo.id);

        // Fade out and remove
        todoElement.style.opacity = '0';
        setTimeout(() => {
            todoElement.remove();
            if (todoState.length === 0) {
                document.getElementById('todoList').innerHTML =
                    '<p>No todos found.</p>';
            }
        }, 300);
        saveToLocalStorage();
        updateTodoCount();

    } catch (error) {
        showError('Failed to delete todo. Please try again.');
        todoElement.classList.remove('deleting');
    }
}


document.addEventListener('DOMContentLoaded', initializeApp);



async function createTodo(todoText) {
    const submitButton = document.getElementById('submitButton');
    submitButton.disabled = true;
    submitButton.classList.add('loading');

    try {
        const newTodo = {
            title: todoText,
            completed: false,
            userId: 1
        };

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTodo)
        });


        if (!response.ok) {
            throw new Error('Failed to create todo');
        }

        const createdTodo = await response.json();
        const simulatedTodo = {
            ...createdTodo,
            id: Date.now(),
        };

        todoState.unshift(simulatedTodo);

        const todoElement = createTodoElement(simulatedTodo);
        const todoList = document.getElementById('todoList');

        // Add with animation
        todoElement.style.opacity = '0';
        todoList.insertBefore(todoElement, todoList.firstChild);
        requestAnimationFrame(() => {
            todoElement.style.opacity = '1';
        });
        saveToLocalStorage();
        updateTodoCount();
        filterTodos();  // Reapply current filter

    } catch (error) {
        showError('Failed to create todo. Please try again.');
    } finally {
        submitButton.disabled = false;
        submitButton.classList.remove('loading');
    }
}

function showLoading() {
    document.getElementById('loadingMessage').style.display = 'block';
    document.getElementById('errorMessage').style.display = 'none';
}

function hideLoading() {
    document.getElementById('loadingMessage').style.display = 'none';
}

function showError(message) {
    const errorElement = document.getElementById('errorMessage');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    setTimeout(() => {
        errorElement.style.display = 'none';
    }, 3000);  // Hide error after 3 seconds
}

function saveToLocalStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todoState));
}

function loadFromLocalStorage() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
}

function filterTodos(filter = currentFilter) {
    currentFilter = filter;

    // Update filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === filter);
    });

    // Filter todos
    const filteredTodos = todoState.filter(todo => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;  // 'all' filter
    });

    renderTodoList(filteredTodos);
}

function clearCompleted() {
    const completedTodos = todoState.filter(todo => todo.completed);

    // Remove each completed todo with animation
    completedTodos.forEach(async todo => {
        await deleteTodo(todo);
    });
}


function initializeApp() {
    initializeForm();

    // Initialize filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => filterTodos(btn.dataset.filter));
    });

    // Initialize clear completed
    document.getElementById('clearCompleted').addEventListener('click', clearCompleted);

    // Initialize todo list
    document.getElementById('todoList').addEventListener('click', handleTodoAction);

    // Load initial todos
    fetchTodos().then(() => {
        filterTodos('all');
        updateTodoCount();
    });
}

function initializeForm() {
    const form = document.getElementById('todoForm');
    const input = document.getElementById('todoInput');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent form submission

        const todoText = input.value.trim();

        if (todoText.length < 3) {
            alert('Todo must be at least 3 characters long');
            return;
        }

        // Create new todo
        await createTodo(todoText);

        // Clear input
        input.value = '';
    });
}