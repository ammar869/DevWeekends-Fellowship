# Advanced JavaScript

## Topics Covered

1. Prototypes
2. Prototype chain
3. Constructor functions
4. ES6 classes and their relationship with prototypes
5. Destructuring
6. Spread operator
7. Rest parameters
8. Optional chaining
9. Nullish coalescing
10. Iterators
11. Generators
12. ES Modules
13. CommonJS
14. ES Modules vs CommonJS
15. Common JavaScript design patterns

## What I Practiced

- **01-prototypes**: Explored object prototypes, constructor functions, prototype inheritance, and the differences between ES6 classes and prototype-based inheritance.
- **02-es6-syntax**: Practiced destructuring (array and object), spread operator, rest parameters, optional chaining, and nullish coalescing with practical examples.
- **03-iterators-generators**: Implemented custom iterators using the iterator protocol and generators for lazy evaluation and practical use cases.
- **04-modules**: Compared ES Modules (import/export) and CommonJS (require/module.exports) with simple math library examples.
- **05-design-patterns**: Implemented the Module, Factory, and Observer patterns to solve common problems.

## Running the Examples

Node.js is required to run these examples.

- For prototype and ES6 syntax examples: `node <file-path>`
- For iterator and generator examples: `node <file-path>`
- For ES Modules: Use `node --experimental-modules <file-path>` or set `"type": "module"` in package.json (see individual examples)
- For CommonJS: `node <file-path>`

## Key Concepts I Learned

- Objects can inherit behavior through prototypes.
- The prototype chain is used when JavaScript cannot find a property directly on an object.
- ES6 classes are syntactic sugar over JavaScript's prototype system.
- Iterators follow the iterator protocol (next() returning {value, done}).
- Generators provide a convenient way to create iterators using function* and yield.
- ES Modules use import/export and are statically analyzed, while CommonJS uses require/module.exports and is dynamic.
- Design patterns like Module, Factory, and Observer help organize code and solve specific problems.