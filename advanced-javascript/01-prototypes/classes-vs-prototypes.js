// classes-vs-prototypes.js
// Comparing ES6 classes with prototype-based approach

// ES6 class
class PersonClass {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  static createAnonymous() {
    return new PersonClass('Anonymous', 'User');
  }
}

// Equivalent constructor function (pre-ES6)
function PersonFunc(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
PersonFunc.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};
PersonFunc.createAnonymous = function() {
  return new PersonFunc('Anonymous', 'User');
};

// Creating instances
const classInstance = new PersonClass('John', 'Doe');
const funcInstance = new PersonFunc('Jane', 'Smith');

console.log('Class instance getFullName:', classInstance.getFullName());
console.log('Function instance getFullName:', funcInstance.getFullName());

// Static methods
console.log('Class static method:', PersonClass.createAnonymous().getFullName());
console.log('Function static method:', PersonFunc.createAnonymous().getFullName());

// Checking prototypes
console.log('PersonClass.prototype:', PersonClass.prototype);
console.log('PersonFunc.prototype:', PersonFunc.prototype);
console.log('classInstance instanceof PersonClass:', classInstance instanceof PersonClass);
console.log('funcInstance instanceof PersonFunc:', funcInstance instanceof PersonFunc);

// Both have constructor property pointing back
console.log('classInstance.constructor === PersonClass:', classInstance.constructor === PersonClass);
console.log('funcInstance.constructor === PersonFunc:', funcInstance.constructor === PersonFunc);

// Checking the prototype of the class
console.log('Object.getPrototypeOf(classInstance) === PersonClass.prototype:', Object.getPrototypeOf(classInstance) === PersonClass.prototype);
console.log('Object.getPrototypeOf(funcInstance) === PersonFunc.prototype:', Object.getPrototypeOf(funcInstance) === PersonFunc.prototype);

// Adding a method to the class prototype after creation
PersonClass.prototype.sayHello = function() {
  return `Hello, I'm ${this.getFullName()}`;
};
console.log('classInstance.sayHello():', classInstance.sayHello()); // Works
console.log('funcInstance.sayHello:', funcInstance.sayHello); // undefined (not shared)

// However, adding to the function prototype affects all instances
PersonFunc.prototype.sayHello = function() {
  return `Hello, I'm ${this.getFullName()}`;
};
console.log('funcInstance.sayHello():', funcInstance.sayHello()); // Now works
console.log('classInstance.sayHello():', classInstance.sayHello()); // Still works (added earlier)