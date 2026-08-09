// Todo App - JavaScript Fundamentals Demo
// Demonstrates: Arrays, Objects, DOM Manipulation, Events, localStorage

// Array to store todo objects
let todos = [];

// Load todos from localStorage on page load
function loadTodos() {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
        todos = JSON.parse(storedTodos);
    }
}

// Save todos to localStorage
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Generate unique ID for each todo
function generateId() {
    return Date.now() + Math.random().toString(36).substr(2, 9);
}

// Add a new todo
function addTodo(text) {
    const todo = {
        id: generateId(),
        text: text,
        completed: false,
        createdAt: new Date()
    };
    todos.push(todo); // Array method: push
    saveTodos();
    renderTodos();
}

// Toggle todo completion status
function toggleTodo(id) {
    todos = todos.map(todo => {
        if (todo.id === id) {
            return {...todo, completed: !todo.completed}; // Object spread operator
        }
        return todo;
    });
    saveTodos();
    renderTodos();
}

// Delete a todo
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id); // Array method: filter
    saveTodos();
    renderTodos();
}

// Clear completed todos
function clearCompleted() {
    todos = todos.filter(todo => !todo.completed); // Array method: filter
    saveTodos();
    renderTodos();
}

// Filter todos based on status
function filterTodos(filter) {
    switch (filter) {
        case 'active':
            return todos.filter(todo => !todo.completed);
        case 'completed':
            return todos.filter(todo => todo.completed);
        default:
            return [...todos]; // Array method: spread operator
    }
}

// Count remaining (active) todos
function getActiveCount() {
    return todos.filter(todo => !todo.completed).length; // Array methods: filter + length
}

// Render todos to the DOM
function renderTodos() {
    const todoList = document.getElementById('todo-list');
    const filter = document.querySelector('.filters button.active').id.replace('filter-', '');
    const filteredTodos = filterTodos(filter);
    
    // Clear the list
    todoList.innerHTML = '';
    
    // Render each todo
    filteredTodos.forEach(todo => { // Array method: forEach
        const li = document.createElement('li');
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        li.innerHTML = `
            <input type="checkbox" class="todo-checkbox" ${todo.completed ? 'checked' : ''}>
            <span class="todo-text">${todo.text}</span>
            <div class="todo-actions">
                <button class="edit-btn" title="Edit">��✏��️</button>
                <button class="delete-btn" title="Delete">���🗑��️</button>
            </div>
        `;
        
        // Add event listeners to the checkbox and delete button
        const checkbox = li.querySelector('.todo-checkbox');
        const deleteBtn = li.querySelector('.delete-btn');
        
        checkbox.addEventListener('change', () => toggleTodo(todo.id));
        deleteBtn.addEventListener('click', () => deleteTodo(todo.id));
        
        todoList.appendChild(li); // DOM Manipulation: appendChild
    });
    
    // Update task count
    document.getElementById('task-count').textContent = `${getActiveCount()} tasks remaining`;
}

// Event listeners
document.getElementById('todo-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    const input = document.getElementById('todo-input');
    const text = input.value.trim();
    
    if (text) {
        addTodo(text);
        input.value = ''; // Clear input
        input.focus();
    }
});

// Filter buttons
document.getElementById('filter-all').addEventListener('click', function() {
    setActiveFilter(this);
    renderTodos();
});

document.getElementById('filter-active').addEventListener('click', function() {
    setActiveFilter(this);
    renderTodos();
});

document.getElementById('filter-completed').addEventListener('click', function() {
    setActiveFilter(this);
    renderTodos();
});

// Clear completed button
document.getElementById('clear-completed').addEventListener('click', clearCompleted);

// Helper function to set active filter button
function setActiveFilter(button) {
    document.querySelectorAll('.filters button').forEach(btn => {
        btn.classList.remove('active');
    });
    button.classList.add('active');
}

// Initialize the app
loadTodos();
renderTodos();

// Concept Explanation:
// 1. ARRAYS: We use arrays to store todos and methods like push, filter, map, forEach
// 2. OBJECTS: Each todo is an object with properties (id, text, completed, createdAt)
// 3. DOM MANIPULATION: createElement, appendChild, innerHTML, querySelector, etc.
// 4. EVENTS: addEventListener for form submission, clicks, and checkbox changes
// 5. LOCALSTORAGE: Persist data between page reloads using JSON.stringify and JSON.parse
// 6. SCOPE & CLOSURES: Functions access the todos array from outer scope
// 7. ARROW FUNCTIONS & SPREAD: Used in map and filter for concise syntax