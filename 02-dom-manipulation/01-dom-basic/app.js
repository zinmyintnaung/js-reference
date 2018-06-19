let val;

val = document;
//console.log(val);
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
//console.log(val);
val = document.body;
//console.log(val);
val = document.doctype;
val = document.domain;
val = document.URL;
//console.log(val);
val = document.characterSet;
val = document.contentType;

val = document.forms;
//console.log(val);
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
//console.log(val);
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;
//console.log(val);

val = document.scripts;
//console.log(val);
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
  //console.log(script.getAttribute('src'));
});

console.log(val);