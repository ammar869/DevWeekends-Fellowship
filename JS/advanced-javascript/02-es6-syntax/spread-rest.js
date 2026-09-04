// spread-rest.js
// Demonstrating spread operator and rest parameters

// Spread with arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log('Spread with arrays:');
console.log('combined:', combined); // [1,2,3,4,5,6]

// Copying an array
const copy = [...arr1];
console.log('copy:', copy); // [1,2,3]
console.log('copy !== arr1:', copy !== arr1); // true

// Spread with objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObj = { ...obj1, ...obj2, e: 5 };
console.log('\\nSpread with objects:');
console.log('combinedObj:', combinedObj); // {a:1, b:2, c:3, d:4, e:5}

// Overwriting properties
const obj3 = { x: 10, y: 20 };
const modified = { ...obj3, x: 100, z: 300 };
console.log('\\nOverwriting with spread:');
console.log('modified:', modified); // {x:100, y:20, z:300}

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log('\\nRest parameters:');
console.log('sum(1,2,3):', sum(1,2,3)); // 6
console.log('sum(1,2,3,4,5):', sum(1,2,3,4,5)); // 15

// Rest parameters with other parameters
function formatMessage(prefix, ...messages) {
  return messages.map(msg => `${prefix}: ${msg}`).join(' | ');
}
console.log('\\nRest with other params:');
console.log(formatMessage('INFO', 'Hello', 'World', 'How are you?'));

// Rest syntax in destructuring
const [first, second, ...others] = [10, 20, 30, 40, 50];
console.log('\\nRest in destructuring (array):');
console.log('first:', first); // 10
console.log('second:', second); // 20
console.log('others:', others); // [30,40,50]

const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };
console.log('\\nRest in destructuring (object):');
console.log('a:', a); // 1
console.log('b:', b); // 2
console.log('rest:', rest); // {c:3, d:4}