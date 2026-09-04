// destructuring.js
// Demonstrating destructuring with practical examples

// Array destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log('Array destructuring:');
console.log('first:', first); // 1
console.log('second:', second); // 2
console.log('rest:', rest); // [3, 4, 5]

// With default values
const [a = 10, b = 20, c = 30] = [1, 2];
console.log('With defaults:');
console.log('a:', a); // 1
console.log('b:', b); // 2
console.log('c:', c); // 30 (default)

// Object destructuring
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'New York',
    zipcode: '10001'
  }
};

const { firstName, lastName, age } = person;
console.log('\\nObject destructuring:');
console.log('firstName:', firstName);
console.log('lastName:', lastName);
console.log('age:', age);

// With renaming and default values
const { firstName: fName, lastName: lName, age: years = 25, country = 'USA' } = person;
console.log('\\nWith renaming and defaults:');
console.log('fName:', fName);
console.log('lName:', lName);
console.log('years:', years); // 30 (from object)
console.log('country:', country); // USA (default)

// Nested destructuring
const { address: { street, city } } = person;
console.log('\\nNested destructuring:');
console.log('street:', street);
console.log('city:', city);

// Function parameter destructuring
function printUserDetails({ firstName, lastName, age }) {
  console.log(`\\nFunction parameter destructuring:`);
  console.log(`Name: ${firstName} ${lastName}, Age: ${age}`);
}
printUserDetails(person);

// Destructuring in loops
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];
console.log('\\nDestructuring in loops:');
for (const { id, name } of users) {
  console.log(`User ${id}: ${name}`);
}