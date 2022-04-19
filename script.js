document.title = "Modifying the DOM"

function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
  
  for (var i = 0; i < 10; i++) {
    console.log(getRandomRgb());
  }

  document.body.style.backgroundColor = getRandomRgb() ;

  const myElement = document.getElementById('content');

for (let i = 0; i < myElement.children.length; i++) {
  console.log(myElement.children[i]);
}
