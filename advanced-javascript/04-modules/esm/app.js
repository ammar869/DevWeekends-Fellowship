// esm/app.js
// Importing the math module

import { add, subtract, multiply, divide, PI } from './math.js';

console.log('ES Module Example:');
console.log(`add(5, 3): ${add(5, 3)}`);
console.log(`subtract(5, 3): ${subtract(5, 3)}`);
console.log(`multiply(5, 3): ${multiply(5, 3)}`);
console.log(`divide(5, 3): ${divide(5, 3).toFixed(2)}`);
console.log(`PI: ${PI}`);

// Example of using the module in a function
function calculateCircleArea(radius) {
  return PI * radius * radius;
}
console.log(`Area of circle with radius 4: ${calculateCircleArea(4).toFixed(2)}`);