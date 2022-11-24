const container = document.querySelector('.container')
const section = document.querySelector('section')


//Creat separate div for the grid
const gridDiv = document.createElement('button')
gridDiv.className = 'grid m-auto grid-div'
container.appendChild(gridDiv)

//Create button for initiating user input
const btn = document.createElement('button')
const btnDiv = document.createElement('div')
btnDiv.className = 'btn-div text-centre m-auto'
btn.className = 'btn'
btn.textContent = 'Set Grid'
btnDiv.appendChild(btn)
section.insertBefore(btnDiv, container)

//Display a 16 * 16 grid in the container div 
function displayGrid(squares=100){
    gridDiv.innerHTML = ''
    const grid = squares
    gridDiv.style.gridTemplateColumns = `repeat(${Math.floor(Math.sqrt(squares))},1fr)`
    for(let index = 0; index < grid; index++){
        const div = document.createElement('div')
        div.classList.add('card')
        gridDiv.appendChild(div)
    }
}

function promptUser(){
    const squares = parseInt(prompt(`Enter number of squares
    you would like to display`))
    while(squares > 100 && squares <=0){
        const squares = parseInt(prompt(`Enter a maximum of 100`))
    }
    return squares
}
// displayGrid(squares=80)


btn.addEventListener('click', (e)=>{
    const squares = promptUser()
    displayGrid(squares)
})