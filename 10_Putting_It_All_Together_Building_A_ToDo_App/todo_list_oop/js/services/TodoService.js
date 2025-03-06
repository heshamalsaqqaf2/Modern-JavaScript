import { API_URL, STORAGE_KEY } from '../constants.js';

export class TodoService {
  constructor() {
    this.todos = [];
    this.loadFromStorage();
  }

  async fetchTodos() {
    try {
      if (this.todos.length === 0) {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('فشل في جلب البيانات');
        const data = await response.json();
        this.todos = data.slice(0, 10);
        this.saveToStorage();
      }
      return this.todos;
    } catch (error) {
      throw new Error('فشل في تحميل المهام: ' + error.message);
    }
  }

  async createTodo(title) {
    // محاكاة تأخير الشبكة
    await new Promise(resolve => setTimeout(resolve, 1000));

    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
      userId: 1
    };
    this.todos.unshift(newTodo);
    this.saveToStorage();
    return newTodo;
  }

  async toggleTodo(id) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      this.saveToStorage();
    }
    return todo;
  }

  async deleteTodo(id) {
    this.todos = this.todos.filter(t => t.id !== id);
    this.saveToStorage();
  }

  async clearCompleted() {
    this.todos = this.todos.filter(t => !t.completed);
    this.saveToStorage();
  }

  getTodos(filter = 'all') {
    switch (filter) {
      case 'active':
        return this.todos.filter(t => !t.completed);
      case 'completed':
        return this.todos.filter(t => t.completed);
      default:
        return this.todos;
    }
  }

  getActiveCount() {
    return this.todos.filter(t => !t.completed).length;
  }

  saveToStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos));
  }

  loadFromStorage() {
    const stored = localStorage.getItem(STORAGE_KEY);
    this.todos = stored ? JSON.parse(stored) : [];
  }
}