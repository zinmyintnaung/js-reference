export const person = {
    name: 'Jonh',
    age: 30
}

export function sayHello(){
    return `Hello ${person.name}`;
}

const greeting = 'Hello World';
export default greeting; // if we use default, we don't have to use curly braces while importing