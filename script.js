const container = document.querySelector('.container')
const section = document.querySelector('section')


//Creat separate div for the grid
const gridDiv = document.createElement('button')
gridDiv.className = 'grid m-auto grid-div'
container.appendChild(gridDiv)

//Create button for initiating user input




//Display grid in the grid div 
function displayGrid(squares=100){
    container.removeChild(btnDiv)
    gridDiv.innerHTML = ''
    const grid = squares ** 2
    gridDiv.style.gridTemplateColumns = `repeat(${squares},1fr)`
    for(let index = 0; index < grid; index++){
        const div = document.createElement('div')
        div.classList.add('card')
        gridDiv.appendChild(div)

        div.addEventListener('mouseover', ()=>{
            setBackground(div)
        })
    }
}
function draw(event){
    let coordX = event.clientX
    let coordY = event.clientY
    ctx.beginPath()
    ctx.lineWidth = 5
    ctx.lineCap = 'round'
    ctx.strokeStyle = '#ACD3ED'
    ctx.moveTo(coordX,coordY)
    ctx.lineTo(coordX, coordY)
    ctx.stroke()
}
function getRandomValue(min, max){
    let randInt = Math.floor(Math.random() * (max - min) + min)
    return randInt
}
function promptUser(){
    try{
        let squares = parseInt(prompt(`Enter number of squares
        you would like to display`))

        //Keep requesting input if too samll or too large
        while(squares > 100 || squares <=0){
            squares = parseInt(prompt(`Enter a maximum of 100`))
        }
        return squares
    } catch(error){
        
    }
    
}
function setBackground(element){
    let red = getRandomValue(0,255)
    let green = getRandomValue(0,255)
    let blue = getRandomValue(0,255)
    console.log(red, green, blue)
    element.style.background = `rgb(${red},${green},${blue})`
   
}

    const heading = document.createElement('h1')
    heading.className = 'text-centre'
    const btn = document.createElement('button')
    const btnDiv = document.createElement('div')
    btnDiv.className = 'btn-div text-centre m-auto'
    btn.className = 'btn'
    btn.textContent = 'Set Grid'
    btnDiv.appendChild(btn)
    container.appendChild(btnDiv)



btn.addEventListener('click', (e)=>{
    const squares = promptUser()
    if(!squares){
        alert('You entered an invalid number')
        document.location.reload()
    }
    displayGrid(squares)
})
gridDiv.addEventListener('mousemove', draw)