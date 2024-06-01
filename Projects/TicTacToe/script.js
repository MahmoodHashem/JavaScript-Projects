

const cells = document.querySelectorAll('.cell');
const modal = document.getElementById('result-dialog');
const welcomModal = document.getElementById('welcome-dialog');
const startbtn = document.getElementById('start-game');
const btn = document.getElementById('btn');
const winner = document.getElementById('winner');
const player1Turn = document.querySelector('.p1-turn');
const player2Turn = document.querySelector('.p2-turn');
const input1 = document.querySelector('#player1-input');
const input2 = document.querySelector('#player2-input');
const player1Name = document.querySelector(".player1-name");
const player2Name = document.querySelector(".player2-name");

let currentPlayer = 'X';
let gameOver = false;


window.onload = function () {
    welcomModal.showModal();
}

startbtn.addEventListener('click', function () {
    if (input1.value !== '') {
        player1Name.insertAdjacentText("beforeend", input1.value); 
    }else{
        player1Name.insertAdjacentText("beforeend", "Player 1"); 

    }
    if (input2.value !== '') {
        player2Name.insertAdjacentText("beforeend", input2.value); 
    }else{
        player2Name.insertAdjacentText("beforeend", 'Player 2'); 

    }
    player1Turn.classList.remove('hide');
})



btn.addEventListener('click', function () {
    modal.close();
    resetGame();
})



function checkWin() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (let combo of winningCombos) {
        if (
            cells[combo[0]].textContent === currentPlayer &&
            cells[combo[1]].textContent === currentPlayer &&
            cells[combo[2]].textContent === currentPlayer
        ) {
            return true;
        }
    }

    if (Array.from(cells).every(cell => cell.textContent !== '')) {
        return 'tie';
    }

    return false;
}

function handleCellClick(event) {

    if (event.target.textContent !== '') {
        return;
    }

    if (currentPlayer === 'X') {
        event.target.style.color = 'red';

    } else {
        event.target.style.color = 'green';
    }
    if (event.target.textContent === '' && !gameOver) {
        event.target.textContent = currentPlayer;
        const result = checkWin();
        if (result === true) {
            modal.showModal();
            winner.textContent = `${currentPlayer} Won!`
            gameOver = true;
        } else if (result === 'tie') {
            modal.showModal();
            winner.textContent = 'It is a tie'
            gameOver = true;
        } else {
            if (currentPlayer === 'X') {
                currentPlayer = 'O';
                player1Turn.classList.add('hide');
                player2Turn.classList.remove('hide');
            }else{
                currentPlayer = 'X';
                player2Turn.classList.add('hide');
                player1Turn.classList.remove('hide');
            }
        }
    }
}

function resetGame() {
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
    gameOver = false;
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));


