let btnPlay = document.getElementById('btnPlay');
let gridSpace = document.body.querySelector('#gridSpace');

btnPlay.addEventListener('click', createGrid);

function createGrid(){
    let blockNumber = 100;
    for(let i = 1; i <= blockNumber; i++){
        let block = document.createElement('div');
        block.classList.add('box');
        block.innerHTML = `<span>${i}</span>`
        gridSpace.append(block);
    }
}