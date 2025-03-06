import { TodoService } from './services/TodoService.js';
import { TodoUI } from './ui/TodoUI.js';

document.addEventListener('DOMContentLoaded', () => {
    const todoService = new TodoService();
    new TodoUI(todoService);
});