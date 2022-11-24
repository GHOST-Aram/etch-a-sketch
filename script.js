const container = document.querySelector('.container')

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

displayIntialGrid()