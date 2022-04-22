let list = document.querySelector('ol')
let listChild = list.children


const firstLine = listChild[0];
const lastLine = listChild[4];

firstLine.appendChild(lastLine);


console.log(listChild.textContent);