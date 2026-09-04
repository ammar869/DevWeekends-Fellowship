// prototype.js
// Demonstrating object prototypes and constructor functions

// Constructor function for Person
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Adding a method to the prototype
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

// Creating instances
const person1 = new Person('John', 'Doe');
const person2 = new Person('Jane', 'Smith');

// Checking own properties
console.log('person1 own properties:', Object.keys(person1)); // ['firstName', 'lastName']
console.log('person1 hasOwnProperty firstName:', person1.hasOwnProperty('firstName')); // true
console.log('person1 hasOwnProperty getFullName:', person1.hasOwnProperty('getFullName')); // false

// Checking inherited properties
console.log('person1.getFullName is from prototype:', person1.getFullName === Person.prototype.getFullName); // true

// Using Object.create
const personPrototype = {
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  greet() {
    return `Hello, I'm ${this.getFullName()}`;
  }
};

const person3 = Object.create(personPrototype);
person3.firstName = 'Alice';
person3.lastName = 'Johnson';
console.log('person3.getFullName:', person3.getFullName()); // Alice Johnson
console.log('person3.greet():', person3.greet()); // Hello, I'm Alice Johnson

// Checking prototype
console.log('Object.getPrototypeOf(person3):', Object.getPrototypeOf(person3) === personPrototype); // true