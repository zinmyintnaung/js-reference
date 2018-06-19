let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
//console.log(val);
val = list;
//console.log(val);

// Get child nodes
val = list.childNodes;
//console.log(val);
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType;
//console.log(val);

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get children element nodes
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';
// Children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

// First child
val = list.firstChild;
//console.log(val);
val = list.firstElementChild;
//console.log(val);

// Last child
val = list.lastChild;
val = list.lastElementChild;

// Count child elements
val = list.childElementCount;
//console.log(val);

// Get parent node
val = listItem.parentNode;
//console.log(val);
val = listItem.parentElement;
//console.log(val);
val = listItem.parentElement.parentElement;
//console.log(val);

// Get next sibling
val = listItem.nextSibling;
//console.log(val);
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;
//console.log(val);

// Get prev sibling
val = listItem.previousSibling;
//console.log(val);
val = listItem.previousElementSibling;
//console.log(val);