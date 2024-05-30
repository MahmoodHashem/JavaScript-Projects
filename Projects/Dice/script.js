
const btn = document.getElementById("btn");
const dices = document.querySelectorAll('.dice');
const result = document.querySelector('#result'); 
const player1Score = document.getElementById("player1Score"); 
const player2Score = document.getElementById("player2Score"); 

var scores1 = 0; 
var scores2 = 0; 


/**
 * Event listener for a button click that simulates a dice game between two players.
 * Generates random dice numbers, compares them, updates scores, and displays results on the UI.
 */
btn.addEventListener('click', function () {
    let diceNumber = Math.floor((Math.random() * 6) + 1);
    let diceNumber2 = Math.floor((Math.random() * 6) + 1);

    /**
 * Function that handles the logic for displaying the dice based on the player's dice numbers.
 * It toggles the 'hide' class on the dice elements to show/hide them accordingly.
 * 
 * @param {Element} dice - The dice element to be manipulated
 * @param {number} diceNumber - The dice number for player 1
 * @param {number} diceNumber2 - The dice number for player 2
 */
    dices.forEach(dice => {
        const player1Dice = `player-1-dice-${diceNumber}`;
        const player2Dice = `player-2-dice-${diceNumber2}`;

        dice.classList.toggle('hide', !dice.classList.contains(player1Dice) && !dice.classList.contains(player2Dice));
        dice.classList.toggle('hide', !(dice.classList.contains(player1Dice) && dice.classList.contains('player-1')) && !(dice.classList.contains(player2Dice) && dice.classList.contains('player-2')));
    });



    /**
 * Determines the winner between Player 1 and Player 2 based on the dice numbers rolled.
 * Updates the result text content accordingly and increments the scores for the respective players.
 */
    if (diceNumber > diceNumber2) {
        result.textContent = 'Player 1 Won!';
        scores1++;
    } else if (diceNumber === diceNumber2) {
        result.textContent = "It's a tie";
    } else {
        result.textContent = 'Player 2 Won!';
        scores2++;
    }

    player1Score.textContent = `Player 1 scores: ${scores1}`;
    player2Score.textContent = `Player 2 scores: ${scores2}`;
});
