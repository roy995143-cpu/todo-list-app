class TodoApp {
  constructor() {
    this.todos = this.loadFromLocalStorage() || [];
    this.currentFilter = 'all';
    this.init();
  }

  init() {
    this.cacheElements();
    this.attachEventListeners();
    this.render();
  }

  cacheElements() {
    this.todoInput = document.getElementById('todoInput');
    this.addBtn = document.getElementById('addBtn');
    this.todoList = document.getElementById('todoList');
    this.filterBtns = document.querySelectorAll('.filter-btn');
    this.clearBtn = document.getElementById('clearBtn');
    this.totalTasks = document.getElementById('totalTasks');
    this.completedTasks = document.getElementById('completedTasks');
  }

  attachEventListeners() {
    this.addBtn.addEventListener('click', () => this.addTodo());
    this.todoInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.addTodo();
    });

    this.filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => this.setFilter(e.target.dataset.filter));
    });

    this.clearBtn.addEventListener('click', () => this.clearCompleted());
  }

  addTodo() {
    const text = this.todoInput.value.trim();

    if (text === '') {
      alert('Please enter a task!');
      return;
    }

    const todo = {
      id: Date.now(),
      text: text,
      completed: false,
      createdAt: new Date().toLocaleString()
    };

    this.todos.unshift(todo);
    this.todoInput.value = '';
    this.todoInput.focus();
    this.saveToLocalStorage();
    this.render();
  }

  toggleTodo(id) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      this.saveToLocalStorage();
      this.render();
    }
  }

  deleteTodo(id) {
    this.todos = this.todos.filter(t => t.id !== id);
    this.saveToLocalStorage();
    this.render();
  }

  clearCompleted() {
    const completedCount = this.todos.filter(t => t.completed).length;
    if (completedCount === 0) {
      alert('No completed tasks to clear!');
      return;
    }

    if (confirm(`Clear ${completedCount} completed task(s)?`)) {
      this.todos = this.todos.filter(t => !t.completed);
      this.saveToLocalStorage();
      this.render();
    }
  }

  setFilter(filter) {
    this.currentFilter = filter;
    this.filterBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.filter === filter);
    });
    this.render();
  }

  getFilteredTodos() {
    switch (this.currentFilter) {
      case 'active':
        return this.todos.filter(t => !t.completed);
      case 'completed':
        return this.todos.filter(t => t.completed);
      case 'all':
      default:
        return this.todos;
    }
  }

  updateStats() {
    const total = this.todos.length;
    const completed = this.todos.filter(t => t.completed).length;
    this.totalTasks.textContent = `Total: ${total}`;
    this.completedTasks.textContent = `Completed: ${completed}`;
  }

  render() {
    this.todoList.innerHTML = '';
    const filteredTodos = this.getFilteredTodos();

    if (filteredTodos.length === 0) {
      this.todoList.innerHTML = '<div class="empty-state">No tasks yet. Add one to get started!</div>';
      this.updateStats();
      return;
    }

    filteredTodos.forEach(todo => {
      const li = document.createElement('li');
      li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
      li.innerHTML = `
        <input 
          type="checkbox" 
          ${todo.completed ? 'checked' : ''}
          onchange="app.toggleTodo(${todo.id})"
        />
        <span class="todo-text">${this.escapeHtml(todo.text)}</span>
        <button class="delete-btn" onclick="app.deleteTodo(${todo.id})">Delete</button>
      `;
      this.todoList.appendChild(li);
    });

    this.updateStats();
  }

  escapeHtml(text) {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
  }

  saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  loadFromLocalStorage() {
    const data = localStorage.getItem('todos');
    return data ? JSON.parse(data) : null;
  }
}

// Initialize the app when DOM is ready
let app;
document.addEventListener('DOMContentLoaded', () => {
  app = new TodoApp();
});