const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Brad';
const tags = 'web design,web development,programming';

let val;

val = firstName + lastName;
console.log(val);

// Concatenation
val = firstName + ' ' + lastName;
console.log(val);

// Append
val = 'Brad ';
val += 'Traversy';
console.log(val);

val = 'Hello, my name is ' + firstName + ' and I am ' + age;
console.log(val);

// Escaping
val =  'That\'s awesome, I can\'t wait';
console.log(val);

// Length
val = firstName.length;
console.log(val);

// concat()
val = firstName.concat(' ', lastName);
console.log(val);

// Change case
val = firstName.toUpperCase();
console.log(val);
val = firstName.toLowerCase();
console.log(val);

val = firstName[2];
console.log(val);

// indexOf()
val = firstName.indexOf('l');
console.log(val);
val = firstName.lastIndexOf('l');
console.log(val);

// charAt()
val = firstName.charAt('2');
console.log(val);
// Get last char
val = firstName.charAt(firstName.length - 1);
console.log(val);

// substring()
val = firstName.substring(0, 4);
console.log(val);

// slice()
val = firstName.slice(0,4);
console.log(val);
val = firstName.slice(-3);
console.log(val);

// split()
val = str.split(' ');
console.log(val);
val = tags.split(',');
console.log(val);

// replace()
val = str.replace('Brad', 'Jack');
console.log(val);

// includes()
val = str.includes('foo');
console.log(val);