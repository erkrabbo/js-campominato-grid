const btnPlay = document.getElementById('btnPlay');

const gridSpaceContainer = document.body.querySelector('#gridSpaceContainer');
const difficultySelector = document.body.querySelector('#level');

let areThereElements = false;
let blockNumber = 0;

window.addEventListener('resize', squareBoxes)
window.addEventListener('load', createGrid)
btnPlay.addEventListener('click', createGrid);

function createGrid(){

    if(areThereElements){
        gridSpaceContainer.removeChild(document.body.querySelector('#gridSpace'));
    }
    
    switch (difficultySelector.value){
        case '0':
            blockNumber =100;
            break;
        case '1':
            blockNumber = 81;
            break;
        case '2':
            blockNumber = 49;
            break;
        default:
            blockNumber = 100;
    }
    
    let gridSpace = document.createElement('div');

    gridSpace.setAttribute('id', 'gridSpace');
    gridSpace.setAttribute('class', 'col d-flex flex-wrap justify-content-center align-content-center')
    gridSpaceContainer.append(gridSpace);

    areThereElements = true;
    
    for(let i = 1; i <= blockNumber; i++){
        let block = document.createElement('div');
        block.classList.add('box');
        block.innerHTML = `<span>${i}</span>`
        if (i % 10 == 1){
            let separator = document.createElement('div');
            separator.classList.add('w-100');
            gridSpace.append(separator);
        }
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


     