// DOM Manipulation

// const title = document.querySelector('#main-heading');
// console.log(title);

// title.style.color = 'red';


const ul = document.querySelector('ul');
const li = document.createElement('li');


//adding elements
ul.append(li);

// modifying text



li.innerText = 'Xmen';


li.setAttribute('id', 'main-heading');