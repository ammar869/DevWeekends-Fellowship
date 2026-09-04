// Counter Project - JavaScript Fundamentals Demo
// Demonstrates: Variables, Scope, DOM Manipulation, Event Handling

// Global scope: This variable is accessible throughout the script
let count = 0;

// Function to update the display
function updateDisplay() {
    // DOM Manipulation: Get the element and update its content
    const countElement = document.getElementById('count');
    countElement.textContent = count;
}

// Event listeners for buttons
document.getElementById('increment').addEventListener('click', function() {
    // Function scope: count is accessible here due to closure
    count++;
    updateDisplay();
});

document.getElementById('decrement').addEventListener('click', function() {
    // Function scope: count is accessible here due to closure
    if (count > 0) {
        count--;
        updateDisplay();
    }
});

document.getElementById('reset').addEventListener('click', function() {
    // Function scope: count is accessible here due to closure
    count = 0;
    updateDisplay();
});

// Initial display update
updateDisplay();

// Concept Explanation:
// 1. VARIABLES: We use 'let' for count because it needs to be reassigned
// 2. SCOPE: The count variable is in global scope, but the event listener 
//    functions can access it due to closure (they "remember" the outer scope)
// 3. DOM MANIPULATION: We use getElementById to select elements and 
//    textContent to update the display
// 4. EVENT HANDLING: We use addEventListener to respond to button clicks