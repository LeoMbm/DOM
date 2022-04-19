const testDom = document.querySelectorAll('.important')
let allImg = document.querySelectorAll('img')

for (let index = 0; index < testDom.length; index++) {
    const element = testDom[index];
    element.setAttribute("title", "This is an important item");
 console.log(testDom)
    
}


for (let index = 0; index < allImg.length; index++) {
    const element = allImg[index];
    
    if(element.className !== 'important' ) {
        element.style.display = 'none';
    }

    console.log("ImgImportant")
}



