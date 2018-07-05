

try{
    // Produce a RefereceError
    //myFunction();

    // Produce a TypeError
    //null.myFunction();

    // Produce SyntaxError
    //eval('Hello World');

    // Produce a URIError
    //decodeURIComponent('%');

    const user = {email: 'a@b.com'};
    if(!user.name){
        //throw 'User has no name';
        throw new SyntaxError('User has no name');
    }

}catch(e){
    console.log(e);
    //console.log(e.message);
    //console.log(e.name);
    //console.log(e instanceof ReferenceError);
}finally{
    console.log('Finally runs regardless of result...');
}

console.log('Programmer continues..');