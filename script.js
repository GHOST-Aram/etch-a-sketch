const container = document.querySelector('.container')

//Display a 16 * 16 grid in the container div 
function displayIntialGrid(){
    const grid = 16*16
    container.style.gridTemplateColumns = 'repeat(16,1fr)'
    for(let index = 0; index < grid; index++){
        const div = document.createElement('div')
        div.classList.add('card')
        container.appendChild(div)
    }
}

displayIntialGrid()