const container = document.querySelector(`.gamepad`)


//Events
const btnBlack = document.getElementById('black');
const btnRGB = document.getElementById('rgb');
const btnClear = document.getElementById('clear');
const btnChangeSize = document.getElementById('cSize');


//Starting structure of the gamepad
function createDivs(col , rows) {
    for(let i = 0;i < (col * rows); i++) {
        const div = document.createElement('div') 
        div.style.border= '1px solid black'
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add('box')
    }
}
createDivs(16,16)

//Black color
function blackColor(){
    const boxes = container.querySelectorAll('.box');
    btnBlack.addEventListener('click', () => {
        boxes.forEach(box => box.addEventListener('mouseover', () =>{
            box.style.background ='black'
        }))
    })
}
blackColor();

//RGB color
function rgbColor(){
    const boxes = container.querySelectorAll('.box');
    btnRGB.addEventListener('click', () => {
        boxes.forEach(box => box.addEventListener('mouseover', () =>{
            let R = Math.floor(Math.random() * 255)
            let G = Math.floor(Math.random() * 255)
            let B = Math.floor(Math.random() * 255)
            box.style.background = `rgb(${R},${G},${B})`
        }))
    })
}
rgbColor();

//Function to clear the board
function clear() {
 const boxes = container.querySelectorAll('.box');
 btnClear.addEventListener('click', () => {
     boxes.forEach(box => box.style.background='white');
 })
}
clear()


function reset(){
    const boxes = container.querySelectorAll('.box')
    boxes.forEach(box => box.remove());
}

//Changing the size of the gamepad based on an input.
function changeSize(){
    btnChangeSize.addEventListener('click', () => {
        let value = prompt('Size must be a number between 4 and 32');
        if(value >= 4 && value <=32){
            reset()
            createDivs(value,value)
            clear()
            blackColor();
            rgbColor();
        }else{
            alert('Enter a valid number between 4 and 32!')
        }
        }
    )
}
changeSize();

