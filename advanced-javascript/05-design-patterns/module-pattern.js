// 05-design-patterns/module-pattern.js
// Module Pattern Example

// Using IIFE to create a private scope
const CounterModule = (function() {
  // Private variables and functions
  let count = 0;

  function increment() {
    count++;
  }

  function decrement() {
    count--;
  }

  function getCount() {
    return count;
  }

  // Public API
  return {
    increment,
    decrement,
    getCount,
    reset: function() {
      count = 0;
    }
  };
})();

// Using the module
console.log('Module Pattern Example:');
console.log('Initial count:', CounterModule.getCount()); // 0

CounterModule.increment();
CounterModule.increment();
console.log('After two increments:', CounterModule.getCount()); // 2

CounterModule.decrement();
console.log('After one decrement:', CounterModule.getCount()); // 1

CounterModule.reset();
console.log('After reset:', CounterModule.getCount()); // 0

// Attempting to access private variable (should be undefined)
console.log('Direct access to count:', CounterModule.count); // undefined