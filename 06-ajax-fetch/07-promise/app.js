const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'},
];

function createPost(post){

    // using promise instead of callback (refer 04-callback-function)
    // Promise took two params: resolve and reject
    // resolve: to call what we will do after completing current task
    // reject: to call if there is some error we want to throw

    return new Promise(function(resolve, reject){
        setTimeout(function(){
            posts.push(post);
            const error = true; // mockup just to show using 'reject' upon error
            if(!error){
                resolve();
            }else{
                reject('Error: Something went wrong..');
            }
            
        }, 2000);
    });
}

function getPosts(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({title: 'Post Three', body: 'This is post three'})
.then(getPosts)
.catch(function(err){
    console.log(err);
});