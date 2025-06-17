let color = 'black';
let click = 'true';

function resetBoard() {
    let squares = document.querySelectorAll('.board div');
    squares.forEach(square => {
        square.style.backgroundColor = 'white';
    });
}

function populateBoard(size){
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.display = 'grid';
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = 'white';
        board.appendChild(square);
    }
}
populateBoard(16);

function changeSize(input){
    populateBoard(input);
}

function colorSquare(){
    if (click){
            if (color == "random"){
            this.style.backgroundColor = `hsl(${Math.random() * 360},100%, 50%)`;
        } else{
        this.style.backgroundColor = color;
        }
}
}

function changeColor(choice){
    color = choice;
}

document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.tagName != "BUTTON"){
    click = !click;
    if (click){
        document.querySelector('.mode').textContent = "Mode: Coloring ";
    } else{
        document.querySelector('.mode').textContent = "Mode : Not Coloring";
    }
}
})