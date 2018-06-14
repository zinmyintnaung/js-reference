// PRIMITIVE

// String
const name = 'John Doe';
console.log('String- ' + typeof name);

// Number
const age = 45;
console.log('Number- ' + typeof age);

// Boolean
const hasKids = true;
console.log('Boolean- ' + typeof hasKids);

// Null
const car = null;
console.log('Null- ' + typeof car);

// Undefined
let test;
console.log('Not assigned- ' + typeof test);

// Symbol
const sym = Symbol();
console.log('Symbol- ' + typeof sym);

// REFERENCE TYPES - Objects
// Array
const hobbies = ['movies', 'music'];
console.log('Array- ' + typeof hobbies);

// Object literal
const address = {
  city: 'Boston',
  state: 'MA'
}
console.log('Object- ' + typeof address);
const today = new Date();
console.log(today);
console.log('Date Object- ' + typeof today);