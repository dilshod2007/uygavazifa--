//  const form = document.querySelector('#form');
//  const btn = form.querySelector('#registerBtn');

//  form.addEventListener("submit", (e) =>{
//      e.preventDefault();
//      console.log(nameInput.value);
//  })

const $box = document.querySelector('.box');

console.log($box.firstElementChild); // 1-element child
console.log($box.lastElementChild); // oxirgi last element child
console.log($box.firstchild);  //1-node child
console.log($box.lastchild); // oxirgi node child

console.log(Array.from($box.children)); //elementlarni
console.log(Array.from($box.childNodes)); //nodelarni



//node element 

// node => Comment,text,Element