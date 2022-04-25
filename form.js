const surName = document.getElementById('firstname')
const spanName = document.getElementById('display-firstname')
const age = document.getElementById('age')
const pwd = document.getElementById('pwd')
const dark = document.getElementById('toggle-darkmode')
const hard = document.getElementById('a-hard-truth')



surName.addEventListener('keyup', (e) => {

    spanName.innerText = surName.value
    surName.appendChild(spanName)
    
   
    
})


age.addEventListener('keyup', (e) => {

  check(age.value);
})

function check(){

    if (age.value >= 18){

        hard.style.visibility = 'visible';

    }
    else if (age.value < 18){

        hard.style.visibility = 'hidden';
    }
    
}