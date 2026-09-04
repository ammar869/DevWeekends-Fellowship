// commonjs/math.js
// CommonJS export example

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

const PI = Math.PI;

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  PI
};