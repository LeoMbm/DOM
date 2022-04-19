

function randomColors() {
    
    let letters = '0123456789ABCDEF'
    let color = '#'
    
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    
}

console.log(randomColors())

let arr = ["Gilles", "Jamie", "Jason", "Jeremy", "Martin", "Emre", "Rayane", "Rayhan", "Ricardo", "Steffanie", "Sebastien", "Tanguy", "Thibaud", "Zakaria"];


for (let elem of arr) {
    let newSection = document.createElement('section')
    let newText = document.createTextNode(elem)
    let selectArt = document.querySelector('article')
    newSection.appendChild(newText);
    selectArt.appendChild(newSection);
    newSection.style.backgroundColor = randomColors();
    
    console.log("Here's " + elem + "!");
    
    
}


// function addSection() {

//     var tag = document.createElement("p"); // <p></p>
//     var text = document.createTextNode("TEST TEXT"); 
//     tag.appendChild(text); // <p>TEST TEXT</p>
//     var element = document.getElementsByTagName("body")[0];
//     element.appendChild(tag); // <body> <p>TEST TEXT</p> </body>
//     return
// }




