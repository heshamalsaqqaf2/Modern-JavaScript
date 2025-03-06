// Constants and state variables
const API_URL = 'https://jsonplaceholder.typicode.com/todos';
const STORAGE_KEY = 'todos-app';
let currentFilter = 'all';
let todoState = [];

/*==================================================
  Utility Functions: Local Storage Operations
==================================================*/

/**
 * Save the current todoState to localStorage.
 */
function saveToLocalStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todoState));
}

/**
 * Load todos from localStorage.
 * @returns {Array} Array of todos.
 */
function loadFromLocalStorage() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
}

/*==================================================
  UI Helper Functions: Loading and Error Messages
==================================================*/

/**
 * Show the loading message and hide the error message.
 */
function showLoading() {
    const loadingEl = document.getElementById('loadingMessage');
    const errorEl = document.getElementById('errorMessage');
    if (loadingEl) loadingEl.style.display = 'block';
    if (errorEl) errorEl.style.display = 'none';
}

/**
 * Hide the loading message.
 */
function hideLoading() {
    const loadingEl = document.getElementById('loadingMessage');
    if (loadingEl) loadingEl.style.display = 'none';
}

/**
 * Display an error message for a short period.
 * @param {string} message The error message to display.
 */
function showError(message) {
    const errorElement = document.getElementById('errorMessage');
    if (!errorElement) return;
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    setTimeout(() => {
        errorElement.style.display = 'none';
    }, 3000);
}

/*==================================================
  DOM Update Functions: Creating and Rendering Todos
==================================================*/

/**
 * Create a DOM element for a single todo.
 * @param {Object} todo The todo item.
 * @returns {HTMLElement} The todo element.
 */
function createTodoElement(todo) {
    const todoElement = document.createElement('div');
    todoElement.className = `todo-item ${todo.completed ? 'completed' : ''}`;
    todoElement.id = `todo-${todo.id}`;
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

/**
 * Replace an existing todo element with an updated one.
 * @param {Object} todo The updated todo item.
 */
function updateTodoElement(todo) {
    const todoElement = document.getElementById(`todo-${todo.id}`);
    if (todoElement) {
        const newTodoElement = createTodoElement(todo);
        todoElement.replaceWith(newTodoElement);
    }
}

/**
 * Update the displayed count of active todos.
 */
function updateTodoCount() {
    const countElement = document.getElementById('todoCount');
    if (!countElement) return;
    const activeCount = todoState.filter(todo => !todo.completed).length;
    countElement.textContent = `${activeCount} item${activeCount !== 1 ? 's' : ''} left`;
}

/**
 * Render the list of todos in the UI.
 * @param {Array} todos The array of todos to render.
 */
function renderTodoList(todos = todoState) {
    const todoList = document.getElementById("todoList");
    if (!todoList) return;
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

/*==================================================
  State Update Helper Function
==================================================*/

/**
 * Update the application state by saving to localStorage,
 * updating the todo count, and filtering the todos.
 */
function updateAppState() {
    saveToLocalStorage();
    updateTodoCount();
    filterTodos(currentFilter);
}

/*==================================================
  CRUD Operations: Fetch, Create, Update, Delete Todos
==================================================*/

/**
 * Fetch todos from localStorage or API if not available locally.
 * @returns {Promise<Array>} Promise that resolves with the todo list.
 */
async function fetchTodos() {
    showLoading();
    try {
        let todos = loadFromLocalStorage();
        if (todos.length === 0) {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const fetchedTodos = await response.json();
            todos = fetchedTodos.slice(0, 10);
            todoState = todos;
            saveToLocalStorage();
        } else {
            todoState = todos;
        }
        return todoState;
    } catch (error) {
        showError('Failed to load todos. Please refresh the page.');
        return [];
    } finally {
        hideLoading();
        updateTodoCount();
    }
}

/**
 * Create a new todo via the API and add it to the state.
 * @param {string} todoText The text for the new todo.
 */
async function createTodo(todoText) {
    const submitButton = document.getElementById('submitButton');
    if (!submitButton) return;
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
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTodo)
        });
        if (!response.ok) throw new Error('Failed to create todo');
        const createdTodo = await response.json();
        // Simulate a unique id using Date.now()
        const simulatedTodo = { ...createdTodo, id: Date.now() };
        todoState.unshift(simulatedTodo);
        const todoElement = createTodoElement(simulatedTodo);
        const todoList = document.getElementById('todoList');
        if (todoList) {
            todoElement.style.opacity = '0';
            todoList.insertBefore(todoElement, todoList.firstChild);
            requestAnimationFrame(() => {
                todoElement.style.opacity = '1';
            });
        }
        updateAppState();
    } catch (error) {
        showError('Failed to create todo. Please try again.');
    } finally {
        submitButton.disabled = false;
        submitButton.classList.remove('loading');
    }
}

/**
 * Toggle the completed status of a todo.
 * @param {Object} todo The todo item to update.
 */
async function toggleTodoStatus(todo) {
    const todoElement = document.getElementById(`todo-${todo.id}`);
    if (!todoElement) return;
    const toggleButton = todoElement.querySelector('.btn-toggle');
    if (toggleButton) toggleButton.disabled = true;
    try {
        const response = await fetch(`${API_URL}/${todo.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ completed: !todo.completed })
        });
        if (!response.ok) throw new Error('Failed to update todo');
        // Update local state
        todo.completed = !todo.completed;
        updateTodoElement(todo);
        updateAppState();
    } catch (error) {
        showError('Failed to update todo. Please try again.');
        if (toggleButton) toggleButton.disabled = false;
    }
}

/**
 * Delete a todo from the API and remove it from the state.
 * @param {Object} todo The todo item to delete.
 */
async function deleteTodo(todo) {
    const todoElement = document.getElementById(`todo-${todo.id}`);
    if (!todoElement) return;
    todoElement.classList.add('deleting');
    try {
        const response = await fetch(`${API_URL}/${todo.id}`, {
            method: 'DELETE'
        });
        if (!response.ok) throw new Error('Failed to delete todo');
        todoState = todoState.filter(t => t.id !== todo.id);
        todoElement.style.opacity = '0';
        setTimeout(() => {
            todoElement.remove();
            const todoList = document.getElementById('todoList');
            if (todoState.length === 0 && todoList) {
                todoList.innerHTML = '<p>No todos found.</p>';
            }
        }, 300);
        updateAppState();
    } catch (error) {
        showError('Failed to delete todo. Please try again.');
        todoElement.classList.remove('deleting');
    }
}

/*==================================================
  Filtering Functions
==================================================*/

/**
 * Filter the todos based on the selected filter.
 * @param {string} filter The filter type: 'all', 'active', or 'completed'.
 */
function filterTodos(filter = currentFilter) {
    currentFilter = filter;
    // Toggle active class on filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === filter);
    });
    const filteredTodos = todoState.filter(todo => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
    });
    renderTodoList(filteredTodos);
}

/**
 * Delete all completed todos.
 */
async function clearCompleted() {
    const completedTodos = todoState.filter(todo => todo.completed);
    await Promise.all(completedTodos.map(todo => deleteTodo(todo)));
}

/*==================================================
  Event Handlers and Initialization
==================================================*/

/**
 * Handle click events on todo items (toggle or delete).
 * @param {Event} event The click event.
 */
function handleTodoAction(event) {
    const button = event.target.closest('button');
    if (!button) return;
    const action = button.dataset.action;
    const todoElement = button.closest('.todo-item');
    if (!todoElement) return;
    const todoId = parseInt(todoElement.id.replace('todo-', ''));
    const todo = todoState.find(t => t.id === todoId);
    if (!todo) return;
    if (action === 'toggle') {
        toggleTodoStatus(todo);
    } else if (action === 'delete') {
        deleteTodo(todo);
    }
}

/**
 * Initialize the form for adding a new todo.
 */
function initializeForm() {
    const form = document.getElementById('todoForm');
    const input = document.getElementById('todoInput');
    if (!form || !input) return;
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const todoText = input.value.trim();
        if (todoText.length < 3) {
            alert('Todo must be at least 3 characters long');
            return;
        }
        await createTodo(todoText);
        input.value = '';
    });
}

/**
 * Initialize the application by binding events and loading initial data.
 */
function initializeApp() {
    initializeForm();
    // Bind filter button events
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => filterTodos(btn.dataset.filter));
    });
    // Bind clear completed button event
    const clearCompletedBtn = document.getElementById('clearCompleted');
    if (clearCompletedBtn) {
        clearCompletedBtn.addEventListener('click', clearCompleted);
    }
    // Bind todo list click event for toggle/delete actions
    const todoListEl = document.getElementById('todoList');
    if (todoListEl) {
        todoListEl.addEventListener('click', handleTodoAction);
    }
    // Fetch initial todos
    fetchTodos().then(() => {
        filterTodos('all');
        updateTodoCount();
    });
}

// Initialize the application once the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', initializeApp);
