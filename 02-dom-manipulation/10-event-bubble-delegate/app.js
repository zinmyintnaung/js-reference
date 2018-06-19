// EVENT BUBBLING

// document.querySelector('.card-title').addEventListener('click', function(){
//   console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function(){
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function(){
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function(){
//   console.log('col');
// });

// EVENT DELGATION - useful when we dynamically added elements on the page, bcoz these elements are not loaded when page reder for the first time

// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e){
  // if(e.target.parentElement.className === 'delete-item secondary-content'){
  //   console.log('delete item');
  // }

  if(e.target.parentElement.classList.contains('delete-item')){
    //console.log('delete item');
    //console.log(e.target.parentElement);
    //console.log(e.target.parentElement.className);
    //console.log(e.target.parentElement.classList);
    //console.log(e.target.parentElement.parentElement);
    e.target.parentElement.parentElement.remove();
  }
}