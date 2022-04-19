let allText = document.querySelectorAll('p');


for (let index = 0; index < allText.length; index++) {
    const element = allText[index];
    console.log(element.textContent)

    if (element.className == 'important') {

        console.log(element.className + ' ' + element.textContent)
    }

    
}


// for (let index = 0; index < allText.length; index++) {
//     const element = allText[index];
    
//     if(element.className !== 'important' ) {
//         element.style.display = 'none';
//     }

//     console.log("TextImportant")
// }



