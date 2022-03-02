const btnPlay = document.getElementById('btnPlay');
const gridSpace = document.body.querySelector('#gridSpace');

window.addEventListener('resize', squareBoxes)

btnPlay.addEventListener('click', createGrid);

function createGrid(){
    let blockNumber = 100;
    for(let i = 1; i <= blockNumber; i++){
        let block = document.createElement('div');
        block.classList.add('box');
        block.innerHTML = `<span>${i}</span>`
        gridSpace.append(block);
    }

    squareBoxes();
}

function squareBoxes(){
    const boxes = document.querySelectorAll('.box');
    const elementBox = document.querySelector('.box');

    const width = elementBox.offsetWidth;

    console.log(width)

    for (i=0; i<boxes.length; i++){
        boxes[i].setAttribute('style', `height: ${width}px`);
    }
}