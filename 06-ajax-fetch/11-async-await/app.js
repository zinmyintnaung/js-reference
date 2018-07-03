// async function myFunc(){ //adding async keyword convert myFunc as promise
//     const promise = new Promise((resolve, reject)=>{
//         setTimeout(()=>resolve('Hello'), 1000);
//     });

//     const error = false; //fabricating the error here

//     if(!error){
//         const res = await promise; //Wait until promise is resolved which will be one second
//         return res;
//     }else{
//         await Promise.reject(new Error('Something went wrong'));
//     }
// }

// myFunc()
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

async function getUsers(){
    // await the response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    // Only proceed once its resolved
    const data = await response.json();

    // Only proceed once second promise is resolved 
    return data;
}

getUsers()
    .then(users => console.log(users));