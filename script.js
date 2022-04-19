let allText = document.querySelectorAll('p');


function getRandomRgb() {
    let num = Math.round(0xffffff * Math.random());
    let r = num >> 16;
    let g = num >> 8 & 255;
    let b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
  
  for (let i = 0; i < 10; i++) {
    console.log(getRandomRgb());
  }



for (let index = 0; index < allText.length; index++) {
    const element = allText[index];
    if(element.className !== 'important') {

        element.style.color = getRandomRgb();
    }


    
}





