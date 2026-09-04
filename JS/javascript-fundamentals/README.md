# JavaScript Fundamentals Learning Repository

A comprehensive collection of interactive JavaScript demonstrations covering core fundamentals including scope, closures, hoisting, functions, arrays, objects, DOM manipulation, event handling, promises, and async/await.

## Table of Contents
- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Repository Structure](#repository-structure)
- [JavaScript Concepts Learned](#javascript-concepts-learned)
- [Project Descriptions](#project-descriptions)
- [How to Run the Projects](#how-to-run-the-projects)
- [What I Learned](#what-i-learned)
- [Future Improvements](#future-improvements)
- [Concept Checklist](#concept-checklist)

## Overview

This repository contains five interactive JavaScript projects designed to teach and demonstrate core JavaScript concepts through practical, hands-on examples. Each project focuses on specific fundamentals while building progressively more complex applications.

## Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with Flexbox, transitions, and responsive design
- **JavaScript (Vanilla)** - Core language features without any frameworks or libraries
- **localStorage** - Browser-based data persistence (where applicable)

## Repository Structure

```
javascript-fundamentals/
├── counter/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── todo/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── quiz/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── async-demo/
│   └── script.js
│
�└── README.md
```

## JavaScript Concepts Learned

### Variables
- **let**: Block-scoped, reassignable variable
- **const**: Block-scoped, non-reassignable variable  
- **var**: Function-scoped variable (avoided in favor of let/const)

### Scope
- **Global Scope**: Variables accessible throughout the script
- **Function Scope**: Variables accessible only within functions
- **Block Scope**: Variables accessible only within `{}` blocks
- **Lexical Scope**: Inner functions have access to outer function scope

### Hoisting
- **var declarations**: Hoisted and initialized with `undefined`
- **let/const declarations**: Hoisted but not initialized (Temporal Dead Zone)
- **function declarations**: Fully hoisted and usable before declaration
- **function expressions**: Not hoisted (only the variable declaration is hoisted)

### Closures
- Inner functions retain access to variables from their outer function's scope
- Even after the outer function has returned
- Demonstrated in event listeners accessing outer scope variables

### Functions
- **Function Declaration**: `function name() {}`
- **Function Expression**: `const name = function() {}`
- **Arrow Function**: `const name = () => {}`
- Parameters, return values, default parameters

### Arrays
- Creation: `const arr = []` or `const arr = [1, 2, 3]`
- Methods: `push()`, `pop()`, `map()`, `filter()`, `find()`, `forEach()`
- Iteration and transformation patterns

### Objects
- Creation: `const obj = {}` or `const obj = new Object()`
- Property access: `obj.property` or `obj['property']`
- Property modification: `obj.property = value`
- Arrays of objects for data collections

### DOM Manipulation
- **Selection**: `querySelector()`, `querySelectorAll()`, `getElementById()`
- **Creation**: `createElement()`
- **Insertion**: `appendChild()`, `insertBefore()`
- **Content**: `textContent`, `innerHTML`
- **Attributes**: `setAttribute()`, `getAttribute()`, `classList`
- **Styles**: `style.property`

### Events
- **Registration**: `addEventListener(eventType, callback)`
- **Common Events**: `click`, `input`, `submit`, `change`, `keydown`
- **Event Object**: Access to event details and target element
- **Prevention**: `preventDefault()`, `stopPropagation()`

### Promises
- **Creation**: `new Promise((resolve, reject) => {})`
- **States**: Pending, Fulfilled, Rejected
- **Consumption**: `.then()`, `.catch()`, `.finally()`
- **Chaining**: Sequential asynchronous operations
- **Utilities**: `Promise.all()`, `Promise.race()`, `Promise.allSettled()`

### Async/Await
- **async keyword**: Marks function as returning a Promise
- **await keyword**: Waits for Promise resolution (only in async functions)
- **Error Handling**: try/catch blocks for synchronous-style error handling
- **Cleaner Syntax**: Avoids callback hell and complex promise chaining

## Project Descriptions

### 1. Counter (`/counter`)
A simple interactive counter demonstrating:
- Basic variable manipulation (`let count`)
- DOM updates with `textContent`
- Event handling with `addEventListener('click')`
- Scope and closures in event listener functions
- Basic UI feedback with button styling

### 2. Todo App (`/todo`)
A feature-rich todo application demonstrating:
- Array storage of todo objects
- Object-oriented data structure for todos
- localStorage for data persistence
- Array methods: `push()`, `filter()`, `map()`, `forEach()`
- Dynamic DOM creation and manipulation
- Event handling for form submission, clicks, and checkboxes
- Filtering capabilities (all, active, completed)
- Statistics calculation and display

### 3. Quiz App (`/quiz`)
An interactive multiple-choice quiz demonstrating:
- Arrays of objects for question storage
- Complex state management (current question, score, answers)
- Advanced DOM manipulation with dynamic content creation
- Event handling for navigation and answer selection
- Local storage for progress persistence
- Conditional rendering based on user interaction state
- Results calculation and display

### 4. Async/Await Demo (`/async-demo/script.js`)
A standalone demonstration of asynchronous JavaScript:
- Promise creation with `new Promise()`
- Manual resolve/reject implementations
- `.then()` and `.catch()` for promise handling
- `async/await` syntax for cleaner async code
- `try/catch` blocks for error handling
- `setTimeout` to simulate network delays
- `Promise.all()` for concurrent operations

## How to Run the Projects

1. **Clone or download** this repository to your local machine
2. **Navigate** to any project folder (counter, todo, quiz)
3. **Open** the `index.html` file in your preferred web browser
   - Double-click the file, or
   - Right-click → "Open with" → Choose browser
4. **For the async demo**: 
   - Ensure you have Node.js installed
   - Navigate to the `async-demo` folder
   - Run `node script.js` in your terminal/command prompt

## What I Learned

Through building these projects, I gained practical experience with:

1. **Core Language Fundamentals**: Understanding how variables, scope, and hoisting actually work in practice
2. **Functional Programming Concepts**: Using closures, callbacks, and higher-order functions effectively
3. **Data Structures**: Working with arrays and objects to manage application state
4. **Browser APIs**: Manipulating the DOM and handling user events efficiently
5. **Asynchronous JavaScript**: Moving from callbacks to promises to async/await
6. **State Management**: Tracking and updating application state in response to user actions
7. **Persistence**: Using localStorage to maintain data between sessions
8. **Code Organization**: Structuring code for readability and maintainability
9. **Debugging**: Using browser dev tools to inspect and troubleshoot JavaScript
10. **Best Practices**: Writing clean, readable, and maintainable vanilla JavaScript

## Future Improvements

Potential enhancements for future development:

1. **Counter**:
   - Add step size configuration
   - Implement keyboard arrow key support
   - Add animation effects for count changes

2. **Todo App**:
   - Add due dates and priority levels
   - Implement task categorization/tags
   - Add search and filtering capabilities
   - Improve UI with drag-and-drop reordering
   - Add undo/redo functionality

3. **Quiz App**:
   - Add different question types (true/false, fill-in-the-blank)
   - Implement timed questions
   - Add question shuffling and randomization
   - Show detailed feedback after each question
   - Add progress bar and question navigation
   - Implement result sharing functionality

4. **General Improvements**:
   - Add unit tests for core functionality
   - Improve accessibility (ARIA labels, keyboard navigation)
   - Add dark/light theme toggle
   - Create a unified index page linking all demos
   - Add code comments explaining key concepts in each file

## Concept Checklist

* [x] Scope
* [x] Closures
* [x] Hoisting
* [x] DOM manipulation
* [x] Events
* [x] Arrays
* [x] Objects
* [x] Promises
* [x] Async/await
* [x] Counter
* [x] Todo
* [x] Quiz

---

*Built as a learning exercise to master JavaScript fundamentals through practical application.*