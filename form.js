const surName = document.getElementById('firstname')
const spanName = document.getElementById('display-firstname')
const age = document.getElementById('age')
const pwd = document.getElementById('pwd')
const pwdConfirm = document.getElementById('pwd-confirm')
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

pwd.addEventListener('keyup', (e) => {

   
pwdCheck()
})


function pwdCheck(){

    if( pwd.value.length < 6){
        pwd.style.border = '5px solid red'

    }

    else if (pwd.value.length >= 6){

        pwd.style.border = '5px solid green'
    }
}


pwdConfirm.addEventListener('keyup', (e) => {


  confirm()
})

function confirm(){

    if (pwdConfirm.value === pwd.value){


        pwdConfirm.style.border = '5px solid green'
    }

    else{

        pwdConfirm.style.border = '5px solid red'
    }

}


dark.addEventListener('change', (e) =>{


    darkmode();
})


function darkmode(){

    if(dark.value === 'dark'){

       
        document.body.style.background = "black"
        document.body.style.color = "white"
        

    }

    else if (dark.value === 'light'){

        document.body.style.background = "white"
        document.body.style.color = "black"
    }
}