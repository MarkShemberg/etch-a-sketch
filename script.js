let color = '#4D4D4D';


const board = document.getElementById('board');
const gridSize = document.getElementById('gridSize')
const slider = document.getElementById('slider')
const colorBtn = document.getElementById('colorBtn')
const blackBtn = document.getElementById('blackBtn')
const randomBtn = document.getElementById('randomBtn')
const eraserBtn = document.getElementById('eraserBtn')
const clearBtn = document.getElementById('clearBtn')
const colorPicker = document.getElementById('colorPicker')

slider.onmousemove = (e) => updateSize(e.target.value)
colorPicker.oninput = (e) => changeColor(e.target.value)
colorBtn.onclick= () => changeColor(colorPicker.value)
blackBtn.onclick = () => changeColor('#4D4D4D')
eraserBtn.onclick = () => changeColor('#DBDBDB')
randomBtn.onclick = () => changeColor('random')
clearBtn.onclick = () => clearBoard()




let mouseDown = false
document.onmousedown = () => (mouseDown = true)
document.onmouseup = () => (mouseDown = false)


function makeBoard(size){
    let box = board.querySelectorAll('div');
    box.forEach((div) => div.remove())
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for (let i= 0; i < amount; i++) {
        let box = document.createElement('div');
        box.addEventListener('mouseover', colorBox)
        box.addEventListener('mousedown', colorBox)
        box.style.backgroundColor = "#DBDBDB";
        board.insertAdjacentElement('beforeend', box);
}
}

function colorBox(e){
    if (e.type === 'mouseover' && !mouseDown) return
    else if (color === 'random'){
        this.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16)
    }
    else this.style.backgroundColor = color
    return
}

function changeSize(input){
    makeBoard(input)
}

function updateSize(input){
    gridSize.textContent = `${input} x ${input}`;
}

function changeColor(choice){
    color = choice
}


function clearBoard(){
    let box = board.querySelectorAll('div');
    box.forEach((div) => div.style.backgroundColor = '#DBDBDB')
}


window.onload = makeBoard(16)