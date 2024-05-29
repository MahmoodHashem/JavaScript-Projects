
const btn = document.getElementById("btn");
const dices = document.querySelectorAll('.dice');
const result = document.querySelector('#result'); 
const player1Score = document.getElementById("player1Score"); 
const player2Score = document.getElementById("player2Score"); 

var scores1 = 0; 
var scores2 = 0; 

btn.addEventListener('click', function () {
    let diceNumber = Math.floor((Math.random() * 10) + 1);
    let diceNumber2 = Math.floor((Math.random() * 10) + 1);
    if (diceNumber > 6) {
        diceNumber -= 4;
    }
    if (diceNumber2 > 6) {
        diceNumber2 -= 4;
    }
    dices.forEach(dice => {
        if (dice.className.includes(`player-1-dice-${diceNumber}`) && dice.className.includes('player-1')) {
            dice.classList.remove('hide');
        }

        if (dice.className.includes(`player-2-dice-${diceNumber2}`) && dice.className.includes('player-2')) {
            dice.classList.remove('hide');
        }

        if (!dice.className.includes(`player-1-dice-${diceNumber}`) && !dice.className.includes(`player-2-dice-${diceNumber2}`)) {
            dice.classList.add('hide');
        }

    }); 

    if(diceNumber > diceNumber2){
        result.textContent = 'Player 1 Won!'
        scores1++; 
    }else if(diceNumber === diceNumber2){
        result.textContent = "It's a tie"
    }else{
        result.textContent = 'Player 2 Won!'
        scores2++; 
    }

    player1Score.textContent = `Player 1 scores: ${scores1}`
    player2Score.textContent = `Player 2 scores: ${scores2}`
})
