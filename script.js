const container = document.querySelector('.container')
const section = document.querySelector('section')


//Display grid in the grid div 
function displayGrid(squares=16){
    // container.removeChild(btnDiv)
    gridDiv.innerHTML = ''
    const grid = squares ** 2//total number of squares
    gridDiv.style.gridTemplateColumns = `repeat(${squares},1fr)`
    for(let index = 0; index < grid; index++){
        const div = document.createElement('div')
        div.classList.add('card')
       
        div.style.height = `calc((60vw - ${squares}px)/${squares})`
        div.style.height = `calc((60vw - ${squares}px)/${squares})`

        gridDiv.appendChild(div)

        div.addEventListener('mouseover', ()=>{
            setBackground(div)
        })
    }
}

function getRandomValue(min, max){
    let randInt = Math.floor(Math.random() * (max - min) + min)
    return randInt
}
function promptUser(){
    try{
        let squares = parseInt(prompt(`Enter number of squares per side`))

        //Keep requesting input if too samll or too large
        while(squares > 100 || squares <=0){
            squares = parseInt(prompt(`Enter a number btwn 0 'n' 100`))
        }
        return squares
    } catch(error){
        
    }
    
}
function setBackground(element){
    let red = getRandomValue(0,255)
    let green = getRandomValue(0,255)
    let blue = getRandomValue(0,255)
    element.style.background = `rgb(${red},${green},${blue})`
   
}
//Create button for initiating user input

const heading = document.createElement('h1')
heading.className = 'text-centre'
const btn = document.createElement('button')
const btnDiv = document.createElement('div')
btnDiv.className = 'btn-div text-centre m-auto'
btn.className = 'btn'
btn.textContent = 'Set Grid'
btnDiv.appendChild(btn)
container.appendChild(btnDiv)

//Creat separate div for the grid
const gridDiv = document.createElement('button')
gridDiv.className = 'grid m-auto grid-div'
gridDiv.appendChild(heading)
container.appendChild(gridDiv)




displayGrid()//Inital grid
btn.addEventListener('click', (e)=>{
    const squares = promptUser()
    if(!squares){
        alert('You entered an invalid number')
        document.location.reload()
    }
    displayGrid(squares)
})