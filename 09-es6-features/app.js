// //Iterator Example
// function nameIterator(names){
//     let nextIndex = 0;

//     return {
//         next: function(){
//             return nextIndex < names.length? {value:names[nextIndex++], done:false} : {done:true}
//         }
//     }
// }

// //Create an array of names
// const namesArr = ['Jack', 'Joe', 'John'];

// //Init iterator and pass in the names array
// const names = nameIterator(namesArr);

// console.log(names.next());
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next());

// Generator Example, put asterik after function to make it as generator
// function* sayNames(){
//     yield 'Jack';
//     yield 'Joe';
//     yield 'John';
// }
// const name = sayNames();
// //console.log(name.next());
// console.log(name.next().value);

//ID Creator, it wil continously create ID
function* createIds(){
    let index =0;
    while(true){
        yield index++;
    }
}
const gen = createIds();
console.log(gen.next().value);
console.log(gen.next().value);