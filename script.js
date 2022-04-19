const testDom = document.querySelectorAll('.important')

for (let index = 0; index < testDom.length; index++) {
    const element = testDom[index];
    element.setAttribute("title", "This is an important item");
    console.log(testDom)
    
}




