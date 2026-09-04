// generators.js
// Demonstrating generators with function* and yield

// Example 1: Simple number generator
function* numberGenerator(start = 0) {
  let num = start;
  while (true) {
    yield num++;
  }
}

// Example 2: Generator for object entries (practical use case)
function* objectEntries(obj) {
  for (const key of Object.keys(obj)) {
    yield [key, obj[key]];
  }
}

// Example 3: Fibonacci sequence generator
function* fibonacci() {
  let a = 0, b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

// Using the generators
console.log('Example 1: Number generator (first 5):');
const gen1 = numberGenerator(5);
for (let i = 0; i < 5; i++) {
  console.log(gen1.next().value);
}

// Example 2: Object entries
console.log('\\nExample 2: Object entries:');
const user = { id: 1, name: 'John', email: 'john@example.com' };
for (const [key, value] of objectEntries(user)) {
  console.log(`${key}: ${value}`);
}

// Example 3: Fibonacci (first 10)
console.log('\\nExample 3: Fibonacci sequence (first 10):');
const fib = fibonacci();
for (let i = 0; i < 10; i++) {
  console.log(fib.next().value);
}

// Generator with early return
console.log('\\nExample 4: Generator with early return:');
function* search(array, target) {
  for (const element of array) {
    if (element === target) {
      yield element;
      return; // early exit
    }
    yield null; // yield null for non-matching elements
  }
}
const numbers = [1, 3, 5, 7, 9];
const searchGen = search(numbers, 5);
for (const value of searchGen) {
  console.log(value); // will output: null, null, 5 then stop
}

// Practical example: Reading a file line by line (simulated)
// Since we can't actually read files in this example, we'll simulate with an array
console.log('\\nExample 5: Practical use - processing batches:');
function* batchProcessor(items, batchSize) {
  let batch = [];
  for (const item of items) {
    batch.push(item);
    if (batch.length === batchSize) {
      yield batch;
      batch = [];
    }
  }
  // Yield remaining items
  if (batch.length > 0) {
    yield batch;
  }
}

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const batchGen = batchProcessor(data, 3);
let batchNumber = 1;
for (const batch of batchGen) {
  console.log(`Batch ${batchNumber}:`, batch);
  batchNumber++;
}

// Demonstrating next() with value and done
console.log('\\nExample 6: Manual next() calls:');
const gen = numberGenerator(100);
console.log(gen.next()); // { value: 100, done: false }
console.log(gen.next()); // { value: 101, done: false }
console.log(gen.next()); // { value: 102, done: false }
// Generators are done only when we explicitly return or the function ends
// Our numberGenerator is infinite, so done is always false unless we break