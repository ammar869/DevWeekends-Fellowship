// iterators.js
// Demonstrating custom iterators using the iterator protocol

// Example 1: Simple counter iterator
function makeCounter(start = 0) {
  let count = start;
  return {
    // The iterator object must have a next method
    next() {
      return {
        value: count++,
        done: false
      };
    }
  };
}

// However, to make it iterable, we need to add Symbol.iterator
function makeCounterIterable(start = 0) {
  let count = start;
  return {
    [Symbol.iterator]() {
      let count = start; // each iterator gets its own count
      return {
        next() {
          return {
            value: count++,
            done: false
          };
        }
      };
    }
  };
}

// Example with a finite sequence
function makeRangeIterator(start, end) {
  let current = start;
  return {
    [Symbol.iterator]() {
      return {
        next() {
          if (current < end) {
            return { value: current++, done: false };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
}

// Using the iterators
console.log('Example 1: Infinite counter (first 5 values):');
const counterIterable = makeCounterIterable(10);
const iterator = counterIterable[Symbol.iterator]();
for (let i = 0; i < 5; i++) {
  const { value, done } = iterator.next();
  console.log(`  value: ${value}, done: ${done}`);
}

// Example 2: Finite range
console.log('\\nExample 2: Range iterator (3 to 7):');
const rangeIterable = makeRangeIterator(3, 8); // 8 exclusive
for (const num of rangeIterable) {
  console.log(`  ${num}`);
}

// Example 3: Iterator over object properties (keys)
function makeObjectKeyIterator(obj) {
  const keys = Object.keys(obj);
  let index = 0;
  return {
    [Symbol.iterator]() {
      return {
        next() {
          if (index < keys.length) {
            return { value: keys[index++], done: false };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
}

const person = { name: 'Alice', age: 30, city: 'Paris' };
console.log('\\nExample 3: Iterating over object keys:');
const keyIterable = makeObjectKeyIterator(person);
for (const key of keyIterable) {
  console.log(`  ${key}: ${person[key]}`);
}

// Example 4: Built-in iterators (for comparison)
console.log('\\nExample 4: Built-in array iterator:');
const arr = [100, 200, 300];
for (const value of arr) {
  console.log(`  ${value}`);
}

// Demonstrating the iterator protocol explicitly
console.log('\\nExample 5: Manual iteration of array:');
const arrIterator = arr[Symbol.iterator]();
let result;
while (!(result = arrIterator.next()).done) {
  console.log(`  ${result.value}`);
}