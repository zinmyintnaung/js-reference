// Basic structure

// below function will invoke immediately

// (function(){
//     //Declare private vars and function
    
//     return{
//         //Declare public vars and function
//     }
// })();


// Standard Module Pattern
// const UICtrl = (function(){
//     let text = 'Hello World';

//     const changeText = function(){
//         const element = document.querySelector('h1');
//         element.textContent = text;
//     }

//     // what we return will be public, beside that all are private in this design pattern
//     return {
//         callChangeText: function(){
//             changeText();
//             //console.log(text);
//         },
//         text
//     }
// })();

// UICtrl.callChangeText(); // But we cannot call, UICtrl.changeText(); directly here
// console.log(UICtrl.text);

// Revealing Module Pattern
const ItemCtrl = (function(){
    let data = [];
    function add(item){
        data.push(item);
        console.log('Item Addded');
    }
    function get(id){
        return data.find(item => {
            return item.id === id;
        });
    }

    return { //here we have to reveal everything we would like to call
        add: add,
        get: get,
    }
})();

ItemCtrl.add({id:1, name: 'John'});
ItemCtrl.add({id:2, name: 'Mark'});
ItemCtrl.add({id:3, name: 'Thomas'});
console.log(ItemCtrl.get(2));

