const container = document.querySelector(`.gamepad`)

const btnBlack = document.getElementById('black');
const btnRGB = document.getElementById('rgb');
const btnClear = document.getElementById('clear');

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


function blackColor(){
    const boxes = container.querySelectorAll('.box');
    btnBlack.addEventListener('click', () => {
        boxes.forEach(box => box.addEventListener('mouseover', () =>{
            box.style.background ='black'
        }))
    })
}
blackColor();

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

function clear() {
 const boxes = container.querySelectorAll('.box');
 btnClear.addEventListener('click', () => {
     boxes.forEach(box => box.style.background='white');
 })
}
clear()
