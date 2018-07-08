// Create a symbol, symbol are primitive data type
const sym1 = Symbol();
const sym2 = Symbol('sym2');

console.log(sym2);
//Symbol can never be the same
console.log(Symbol() === Symbol());
//To treat symbol as string, you must explicitly convert it
console.log(`Hello ${sym1.toString()}`);

//Unique Object Keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');
const myObj = {};

myObj[KEY1] = 'Prop1'; //cannot use myObj.KEY1
myObj[KEY2] = 'Prop2';
myObj.key3 = 'Prop3'; //this is not Symbol, but just a property
myObj.key4 = 'Prop4'; //this is not Symbol, but just a property
console.log(myObj[KEY1]);
console.log(myObj[KEY2]);

//Symbols are not enumerable in for...in loop
for(let i in myObj){
    console.log(`${i}: ${myObj[i]}`);//Only regular property will sho here
}

//Symbols are ignored when using JSON.stringify
console.log(JSON.stringify({key: 'prop'}));
console.log(JSON.stringify({[Symbol('sym1')]: 'prop'}));