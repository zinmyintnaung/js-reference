// const sayHello = function(){
//     console.log('Hello');
// }

// const sayHello = () => {
//     console.log('Hello');
// }

// One line function doesn't need braces
// sconst sayHello = () => console.log('Hello');

// One line return 
// const sayHello = () => 'Hello';

// Return object
// const sayHello = () => ({msg: 'Hello'}); //must wrap with parenthesis to return the object

// Single param do not need parenthesis 
//const sayHello = name => console.log(`Hello ${name}`);

// Multiple params need parenthesis 
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

//sayHello('Fahim', 'Ansari');

const users = ['Nathan', 'John', 'William'];
// Normal
// const nameLengths = users.map(function(name){
//     return name.length;
// });

// Shorter
// const nameLengths = users.map((name) => {
//     return name.length;
// });

// Shortest
const nameLengths = users.map(name => name.length);
console.log(nameLengths);