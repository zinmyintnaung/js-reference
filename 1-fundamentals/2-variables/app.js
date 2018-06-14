// var, let, const

var name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);

// // Init var
var greeting;
console.log(greeting);
greeting = 'Hello';
console.log(greeting);

// // letters, numbers, _, $
// // Can not start with number

// // Multi word vars
var firstName = 'John'; // Camel case
var first_name = 'Sara'; // Underscore
var FirstName = 'Tom'; // Pascal case
var firstname;

// LET
let anotherName;
anotherName = 'John Doe';
console.log(anotherName);
anotherName = 'Steve Smith';
console.log(anotherName);

// CONST
const constantName = 'John';
console.log(constantName);
// Can not reassign
// constantName = 'Sara'; //ERROR
// Have to assign a value
// const greeting; //ERROR

// CONST OBJECT - Can change the properties of object but cannot reassign the Const object
const person = {
  name: 'John',
  age: 30
}
person.name = 'Sara';
person.age = 32;
console.log(person);

const numbers = [1,2,3,4,5];
numbers.push(6); // CONST ARRAY - Can mutate it but cannot reassign the Const Array
// numbers = [0]; //ERROR
console.log(numbers);