const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's' + ' ' + '[New Square Created]'
}

const clickOnSquare = (e) => {

  console.log(e.target.classList[1])
  console.log(getElapsedTime())
  let div = document.createElement('div')
  div.className = 'displayedsquare'+ ' ' + e.target.classList[1]
  let main = document.querySelector('main')
  let section = main.children[0]
  section.appendChild(div)

    let list = document.createElement('li')
    let listSection = main.children[2]
    let ulSection = listSection.children[1]
    let chrono = getElapsedTime()
    list.innerHTML = chrono
    ulSection.appendChild(list)




}

const actionSquares = document.querySelectorAll('.actionsquare')


    for (let actionSquare of actionSquares) {


        actionSquare.addEventListener('click', clickOnSquare)

        
    }
    