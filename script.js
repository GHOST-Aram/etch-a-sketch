const container = document.querySelector('.container')
const section = document.querySelector('section')
const btn = document.createElement('button')

//Create button for initiating user input
const btnDiv = document.createElement('div')
btnDiv.className = 'btn-div text-centre'
btn.className = 'btn'
btn.textContent = 'Set Grid'
btnDiv.appendChild(btn)
section.insertBefore(btnDiv, container)

//Display a 16 * 16 grid in the container div 
function displayIntialGrid(squares=100){
    const grid = squares
    container.style.gridTemplateColumns = `repeat(${Math.floor(Math.sqrt(squares))},1fr)`
    for(let index = 0; index < grid; index++){
        const div = document.createElement('div')
        div.classList.add('card')
        container.appendChild(div)
    }
}

displayIntialGrid(squares=80)