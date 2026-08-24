// 05-design-patterns/factory-pattern.js
// Factory Pattern Example

// Vehicle interface (in JavaScript, we use constructor functions or classes)
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.type = 'car';
  }

  start() {
    return `${this.brand} ${this.model} car started.`;
  }

  stop() {
    return `${this.brand} ${this.model} car stopped.`;
  }
}

class Truck {
  constructor(brand, model, capacity) {
    this.brand = brand;
    this.model = model;
    this.capacity = capacity;
    this.type = 'truck';
  }

  start() {
    return `${this.brand} ${this.model} truck started.`;
  }

  stop() {
    return `${this.brand} ${this.model} truck stopped.`;
  }

  load() {
    return `Loading cargo of capacity ${this.capacity} tons.`;
  }
}

// Factory function
function VehicleFactory() {}

VehicleFactory.prototype.createVehicle = function(type, ...args) {
  switch (type) {
    case 'car':
      return new Car(...args);
    case 'truck':
      return new Truck(...args);
    default:
      throw new Error(`Unknown vehicle type: ${type}`);
  }
};

// Using the factory
console.log('Factory Pattern Example:');
const factory = new VehicleFactory();

const car = factory.createVehicle('car', 'Toyota', 'Corolla');
console.log(car.start()); // Toyota Corolla car started.
console.log(car.stop());  // Toyota Corolla car stopped.

const truck = factory.createVehicle('truck', 'Ford', 'F-150', 2);
console.log(truck.start()); // Ford F-150 truck started.
console.log(truck.load());  // Loading cargo of capacity 2 tons.
console.log(truck.stop());  // Ford F-150 truck stopped.

// The factory encapsulates object creation and allows for easy extension
// (e.g., adding new vehicle types without changing the client code).