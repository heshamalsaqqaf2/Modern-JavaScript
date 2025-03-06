export class TodoUI {
    constructor(service) {
        this.service = service;
        this.currentFilter = 'all';
        this.initializeElements();
        this.setupEventListeners();
        this.initializeApp();
    }

    initializeElements() {
        this.elements = {
            form: document.getElementById('todoForm'),
            input: document.getElementById('todoInput'),
            list: document.getElementById('todoList'),
            count: document.getElementById('todoCount'),
            loading: document.getElementById('loadingMessage'),
            error: document.getElementById('errorMessage'),
            filterBtns: document.querySelectorAll('.filter-btn'),
            clearBtn: document.getElementById('clearCompleted'),
            submitBtn: document.getElementById('submitButton'),
        };
    }

    setupEventListeners() {
        this.elements.form.addEventListener('submit', this.handleSubmit.bind(this));
        this.elements.list.addEventListener('click', this.handleTodoAction.bind(this));
        this.elements.filterBtns.forEach(btn => {
            btn.addEventListener('click', () => this.setFilter(btn.dataset.filter));
        });
        this.elements.clearBtn.addEventListener('click', this.handleClearCompleted.bind(this));
    }

    async initializeApp() {
        try {
            this.showLoading();
            await this.service.fetchTodos();
            this.render();
        } catch (error) {
            this.showError(error.message);
        } finally {
            this.hideLoading();
        }
    }

    render() {
        const todos = this.service.getTodos(this.currentFilter);
        this.elements.list.innerHTML = todos.length > 0 ?
            todos.map(todo => this.createTodoHTML(todo)).join('') :
            '<p class="no-tasks">لا توجد مهام لعرضها</p>';

        this.updateCount();
        this.updateFilters();
    }

    createTodoHTML(todo) {
        return `
            <div class="todo-item ${todo.completed ? 'completed' : ''}" id="todo-${todo.id}">
                <span class="todo-text">${todo.title}</span>
                <div class="todo-actions">
                    <button class="btn btn-toggle" data-action="toggle">
                        ${todo.completed ? 'تراجع' : 'إكمال'}
                    </button>
                    <button class="btn btn-delete" data-action="delete">
                        حذف
                    </button>
                </div>
            </div>
        `;
    }

    async handleSubmit(e) {
        e.preventDefault();
        const text = this.elements.input.value.trim();

        if (text.length < 3) {
            alert('يجب أن يحتوي النص على 3 أحرف على الأقل');
            return;
        }

        try {
            this.toggleLoadingState(true);
            const newTodo = await this.service.createTodo(text);
            this.elements.input.value = '';

            const newTodoElement = this.createTodoElement(newTodo);
            this.elements.list.prepend(newTodoElement);
            this.animateAdd(newTodoElement);

            this.updateCount();
        } catch (error) {
            this.showError('فشل في إضافة المهمة');
        } finally {
            this.toggleLoadingState(false);
        }
    }

    createTodoElement(todo) {
        const div = document.createElement('div');
        div.innerHTML = this.createTodoHTML(todo);
        return div.firstElementChild;
    }

    animateAdd(element) {
        element.classList.add('slide-in');
        setTimeout(() => element.classList.remove('slide-in'), 300);
    }

    async handleTodoAction(e) {
        const button = e.target.closest('button');
        if (!button) return;

        const action = button.dataset.action;
        const todoElement = button.closest('.todo-item');
        const todoId = parseInt(todoElement.id.split('-')[1]);

        try {
            this.showLoading();
            button.disabled = true;

            if (action === 'toggle') {
                const updatedTodo = await this.service.toggleTodo(todoId);
                this.animateToggle(todoElement, button);
            } else if (action === 'delete') {
                await this.service.deleteTodo(todoId);
                this.animateDelete(todoElement);
            }

            this.updateCount();
        } catch (error) {
            this.showError(`فشل في ${action === 'toggle' ? 'تحديث' : 'حذف'} المهمة`);
            button.disabled = false;
        } finally {
            this.hideLoading();
        }
    }

    animateToggle(element, button) {
        element.classList.toggle('completed');
        button.textContent = element.classList.contains('completed') ? 'تراجع' : 'إكمال';
        element.style.transform = 'scale(1.05)';
        setTimeout(() => element.style.transform = 'scale(1)', 200);
    }

    animateDelete(element) {
        element.classList.add('slide-out');
        setTimeout(() => {
            element.remove();
            if (this.elements.list.children.length === 0) {
                this.elements.list.innerHTML = '<p class="no-tasks">لا توجد مهام لعرضها</p>';
            }
        }, 300);
    }

    async handleClearCompleted() {
        try {
            this.showLoading();
            const completedElements = [...this.elements.list.querySelectorAll('.completed')];

            completedElements.forEach(el => {
                el.style.opacity = '0.5';
                el.style.transform = 'scale(0.95)';
            });

            await this.service.clearCompleted();

            setTimeout(() => {
                completedElements.forEach(el => el.remove());
                if (this.service.getTodos().length === 0) {
                    this.elements.list.innerHTML = '<p class="no-tasks">لا توجد مهام لعرضها</p>';
                }
            }, 300);

            this.updateCount();
        } catch (error) {
            this.showError('فشل في حذف المهام المكتملة');
        } finally {
            this.hideLoading();
        }
    }

    setFilter(filter) {
        this.currentFilter = filter;
        this.render();
    }

    updateCount() {
        const count = this.service.getActiveCount();
        this.elements.count.textContent = `${count} ${count === 1 ? 'مهمة متبقية' : 'مهام متبقية'}`;
    }

    updateFilters() {
        this.elements.filterBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === this.currentFilter);
        });
    }

    showLoading() {
        this.elements.loading.style.display = 'block';
        this.elements.error.style.display = 'none';
    }

    hideLoading() {
        this.elements.loading.style.display = 'none';
    }

    showError(message) {
        this.elements.error.textContent = message;
        this.elements.error.style.display = 'block';
        setTimeout(() => {
            this.elements.error.style.display = 'none';
        }, 3000);
    }

    toggleLoadingState(isLoading) {
        this.elements.submitBtn.disabled = isLoading;
        this.elements.submitBtn.classList.toggle('loading', isLoading);
    }

    animateAdd(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(-20px)';
        requestAnimationFrame(() => {
            element.style.transition = 'all 0.3s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        });
    }

    animateDelete(element) {
        element.classList.add('removing');
        setTimeout(() => {
            element.remove();
            if (this.elements.list.children.length === 0) {
                this.elements.list.innerHTML = '<p class="no-tasks">لا توجد مهام لعرضها</p>';
            }
        }, 300);
    }
}