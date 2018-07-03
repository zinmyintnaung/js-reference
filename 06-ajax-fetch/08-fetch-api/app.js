document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

// Get local text file data
function getText(){
    fetch('text.txt')
        .then(function(res){
            return res.text(); //console.log(res.text());
        })
        .then(function(data){
            console.log(data); //data here is res.text() from upper function, we can nest multiple then()
        })
        .catch(function(err){
            console.log(err);
        });
}
// Get local json data
function getJson(){
    fetch('posts.json')
        .then(function(res){
            return res.json(); //console.log(res.text());
        })
        .then(function(data){
            console.log(data); //data here is res.text() from upper function, we can nest multiple then()
            let output = '';
            data.forEach(function(post){
                output += `<li>${post.title}</li>`;
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(function(err){
            console.log(err);
        });
}

// Get external API data
function getExternal(){
    fetch('https://api.github.com/users')
        .then(function(res){
            return res.json(); //console.log(res.text());
        })
        .then(function(data){
            console.log(data); //data here is res.text() from upper function, we can nest multiple then()
            let output = '';
            data.forEach(function(user){
                output += `<li>${user.login}</li>`;
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(function(err){
            console.log(err);
        });
}