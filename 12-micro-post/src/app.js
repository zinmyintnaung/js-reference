// This is CommonJS module syntax
//const person = require('./mymodule1');

// ES2015 Module syntax
//import { person, sayHello } from './mymodule2';

//import * as mod from './mymodule2';

//console.log(mod.person.name);

//console.log(mod.sayHello());

// import greeting from './mymodule2';

// console.log(greeting); 

// Babel-webpack starter pack at https://github.com/bradtraversy/babel_webpack_starter
// For fake JSON RESTAPI https://github.com/typicode/json-server

import { http } from './http';
import { ui } from './ui';

// Get all the posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

// Listen for add post
document.querySelector('.post-submit').addEventListener('click', submitPost);

// Listen for delete
document.querySelector('#posts').addEventListener('click', deletePost);

// Listen for edit state
document.querySelector('#posts').addEventListener('click', enableEdit);

// Listen for cancel
document.querySelector('.card-form').addEventListener('click', cancelEdit);

function getPosts(){
    http.get('http://localhost:3000/posts')
        .then(data => ui.showPosts(data))
        .catch(err => console.log(err));
}

function submitPost(){
    
    
    // Get the form data first
    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;
    const id = document.querySelector('#id').value;
    
    // Validate the form data
    if(title === '' || body === ''){
        ui.showAlert('Please fill in all fields', 'alert alert-danger');
    }else{
        const data = {
            title,
            body
        }
        // Check for ID
        if(id === ''){
            // Create POST request
            http.post('http://localhost:3000/posts', data)
            .then(data => {
                ui.showAlert('Post added', 'alert alert-success');
                ui.clearFields();
                getPosts();
            })
            .catch(err=>console.log(err));
        }else{
            // Update post, PUT REQUEST
            http.put(`http://localhost:3000/posts/${id}`, data)
            .then(data => {
                ui.showAlert('Post updated', 'alert alert-success');
                ui.changeFormState('add'); //add state will call clearFields()
                getPosts();
            })
            .catch(err=>console.log(err));
        }
    }
    
}

// Delete Post
function deletePost(e) {
    if(e.target.parentElement.classList.contains('delete')) {
        const id = e.target.parentElement.dataset.id;
        if(confirm('Are you sure?')) {
        http.delete(`http://localhost:3000/posts/${id}`)
            .then(data => {
            ui.showAlert('Post removed', 'alert alert-success');
            getPosts();
            })
            .catch(err => console.log(err));
        }
    }
    e.preventDefault();
}

// Enable Edit State
function enableEdit(e){
    if(e.target.parentElement.classList.contains('edit')){
        //console.log(e.target.parentElement.dataset.id);
        const id = e.target.parentElement.dataset.id;
        const body = e.target.parentElement.previousElementSibling.textContent;
        const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
        const data = {
            id,
            title,
            body
        }

        // Fill form with current post
        ui.fillForm(data);
    }
    e.preventDefault();
}

// Cancel Edit state
function cancelEdit(e){
    if(e.target.classList.contains('post-cancel')){
        ui.changeFormState('add');
    }
    e.preventDefault();
}