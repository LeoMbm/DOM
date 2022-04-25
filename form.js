const surName = document.getElementById('firstname')
const spanName = document.getElementById('display-firstname')
const age = document.getElementById('age')
const pwd = document.getElementById('pwd')
const dark = document.getElementById('toggle-darkmode')



surName.addEventListener('keyup', (e) => {

    spanName.innerText = surName.value
    surName.appendChild(spanName)
    
    // displayName(spanName);
    
})

