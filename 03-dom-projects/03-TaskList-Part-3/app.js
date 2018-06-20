// Define UI Vars

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners(){
    
    // DOM Load event
    document.addEventListener('DOMContentLoaded', getTasks);
    
    // Add task event 
    form.addEventListener('submit', addTask);

    // Remove task event
    taskList.addEventListener('click', removeTask);

    // Clear all tasks
    clearBtn.addEventListener('click', clearTasks);

    // Filter tasks event
    filter.addEventListener('keyup', filterTasks);

}

// Get Task from Local Storage
function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks')); //local storage will only accept string
    }

    tasks.forEach(function(task){
        // Create li element
        const li = document.createElement('li');
        // Add class
        li.className = 'collection-item';
        // Create text node and append to li
        li.appendChild(document.createTextNode(task));
        // Create new link element
        const link = document.createElement('a');
        // Add link class
        link.className = 'delete-item secondary-content';
        // Add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>';
        // Append the link to li
        li.appendChild(link);
        //console.log(li);
        
        // Append li to ul
        taskList.appendChild(li);
    });
}

// Add Task
function addTask(e){
    if(taskInput.value === ''){
        alert('Add a task');
    }

    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    // Add link class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);
    //console.log(li);
    
    // Append li to ul
    taskList.appendChild(li);

    //Store in Local Storage
    storeTaskInLocalStorage(taskInput.value);

    // Clear input
    taskInput.value = '';

    e.preventDefault();
}

function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks')); //local storage will only accept string
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        //console.log(e.target);
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();
            //Remove from local stroage as well
            removeTaskFromLocalStorage(e.target.parentElement.parentElement); //we only have actual li tag
        }
    }
}

function removeTaskFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks')); //local storage will only accept string
    }
    tasks.forEach(function(task, index){ //we can pass index param inside forEach loop
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearTasks(e){
    //taskList.innerHTML = ''; //we can just assign empty value to our element

    //Faster way of doing is using while loop
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
    //Clear all tasks from local storage
    clearTasksFromLocalStorage();
}

function clearTasksFromLocalStorage(){
    localStorage.clear();
}

function filterTasks(e){
    const text = e.target.value.toLowerCase();
    //console.log(text);

    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){ //if no match will return negative one
            task.style.display = 'block';
        }else{
            task.style.display = 'none';
        }
    });

}