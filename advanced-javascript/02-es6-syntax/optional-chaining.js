// optional-chaining.js
// Demonstrating optional chaining (?.) and nullish coalescing (??)

// Example data
const userData = {
  id: 1,
  name: 'John Doe',
  address: {
    street: '123 Main St',
    city: 'New York'
    // note: no zipcode
  },
  contacts: {
    email: 'john@example.com'
    // no phone
  }
};

// Without optional chaining (old way)
let zipcode = userData.address && userData.address.zipcode ? userData.address.zipcode : 'Not available';
console.log('Without optional chaining:', zipcode); // Not available

// With optional chaining
zipcode = userData.address?.zipcode ?? 'Not available';
console.log('With optional chaining and nullish coalescing:', zipcode); // Not available

// Accessing nested properties that exist
const city = userData.address?.city ?? 'No city';
console.log('City:', city); // New York

// Accessing non-existing nested property
const phone = userData.contacts?.phone ?? 'No phone';
console.log('Phone:', phone); // No phone

// Optional chaining with function calls
const user = {
  getName() {
    return this.name;
  }
};

console.log('User getName:', user.getName?.()); // John Doe
const nonUser = null;
console.log('Non-user getName:', nonUser?.getName?.()); // undefined (no error)

// Nullish coalescing examples
const foo = null;
const bar = undefined;
const baz = 'hello';
const num = 0;

console.log('\\nNullish coalescing:');
console.log('foo ?? "default":', foo ?? 'default'); // "default" (null)
console.log('bar ?? "default":', bar ?? 'default'); // "default" (undefined)
console.log('baz ?? "default":', baz ?? 'default'); // "hello" (first defined)
console.log('num ?? 42:', num ?? 42); // 0 (0 is not nullish)

// Difference from ||
console.log('\\nDifference from ||:');
console.log('foo || "default":', foo || 'default'); // "default"
console.log('bar || "default":', bar || 'default'); // "default"
console.log('baz || "default":', baz || 'default'); // "hello"
console.log('num || 42:', num || 42); // 42 (because 0 is falsy)
// But with nullish coalescing, 0 is considered valid
console.log('num ?? 42:', num ?? 42); // 0

// Practical example: form validation
const formData = {
  email: '',
  phone: null
};

const email = formData.email ?? 'email not provided';
const phone = formData.phone ?? 'phone not provided';
console.log('\\nForm validation:');
console.log('email:', email); // '' (empty string is not nullish)
console.log('phone:', phone); // 'phone not provided'