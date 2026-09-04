// prototype-chain.js
// Demonstrating the prototype chain

// Base object
const base = {
  baseMethod() {
    return 'base method';
  }
};

// Derived object inheriting from base
const derived = Object.create(base);
derived.derivedMethod = function() {
  return 'derived method';
};

// Further derived object
const furtherDerived = Object.create(derived);
furtherDerived.furtherMethod = function() {
  return 'further method';
};

// Walking through the prototype chain
console.log('furtherDerived.furtherMethod():', furtherDerived.furtherMethod()); // own
console.log('furtherDerived.derivedMethod():', furtherDerived.derivedMethod()); // from derived
console.log('furtherDerived.baseMethod():', furtherDerived.baseMethod()); // from base

// Checking the prototype chain
console.log('Object.getPrototypeOf(furtherDerived) === derived:', Object.getPrototypeOf(furtherDerived) === derived);
console.log('Object.getPrototypeOf(derived) === base:', Object.getPrototypeOf(derived) === base);
console.log('Object.getPrototypeOf(base) === Object.prototype:', Object.getPrototypeOf(base) === Object.prototype);
console.log('Object.getPrototypeOf(Object.prototype) === null:', Object.getPrototypeOf(Object.prototype) === null);

// Example with constructor functions
function Animal() {}
Animal.prototype.breathe = function() {
  return 'breathing';
};

function Dog(name) {
  this.name = name;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
  return 'woof';
};

const dog = new Dog('Buddy');
console.log('dog.breathe():', dog.breathe()); // from Animal.prototype
console.log('dog.bark():', dog.bark()); // from Dog.prototype
console.log('dog.name:', dog.name); // own property

// Checking the chain
console.log('Object.getPrototypeOf(dog) === Dog.prototype:', Object.getPrototypeOf(dog) === Dog.prototype);
console.log('Object.getPrototypeOf(Dog.prototype) === Animal.prototype:', Object.getPrototypeOf(Dog.prototype) === Animal.prototype);
console.log('Object.getPrototypeOf(Animal.prototype) === Object.prototype:', Object.getPrototypeOf(Animal.prototype) === Object.prototype);