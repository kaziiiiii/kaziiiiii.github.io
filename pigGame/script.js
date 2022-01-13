'use strict';
const rollDice = document.querySelector(".btn--roll");
const newGame = document.querySelector(".btn--new");
const holdGame = document.querySelector(".btn--hold");

/// Selected ID 
const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
// score0.textContent = 2;
// score1.textContent = ;
const currentScore0 = document.getElementById("current--0");
const currentScore1 = document.getElementById("current--1");

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const diceImg = document.querySelector(".dice");
diceImg.classList.add('hidden');

// Gobal Variable 
let scores, currentScore, activePlayer, playingGame;


const initGame = function() {

    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playingGame = true;

    score0.textContent = 0;
    score1.textContent = 0;
    currentScore0.textContent = 0;
    currentScore1.textContent = 0;

    diceImg.classList.add('hidden');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.remove('player--active');
    player1.classList.remove('player--active');
}

initGame();




// function to chnage players 
const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0.classList.toggle('player1--active');
    player1.classList.toggle('player1--active');
}


// Roll The Dice Function 
rollDice.addEventListener("click", function() {
    if (playingGame) {
        diceImg.classList.remove('hidden');
        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice);
        /// Generating a random dice roll 
        // display dice 
        diceImg.classList.remove('hidden');
        diceImg.src = `images/dice-${dice}.png`;
        // check for rolled 1: if true, switch to next player
        // if dice is 1 then switch the player 
        if (dice !== 1) {
            // Add dice to Current Score 
            currentScore += dice;
            // currentScore0.textContent = currentScore;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            /// Switch to nest player 
            switchPlayer();
        }
    }
});

holdGame.addEventListener("click", function() {
    if (playingGame) {
        // 1. Add current score to active players score 
        scores[activePlayer] += currentScore; /// player one score will be one  score[1] = score[1] + currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        // 2. Check if player score is >=100 
        if (scores[activePlayer] >= 20) {
            playingGame = false;
            diceImg.classList.add('hidden');
            // Finish the game
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--active');

        } else {
            switchPlayer();
        }
        // Switch the next player 
        switchPlayer();
    }
});

// Reset the Players Score 
newGame.addEventListener("click", initGame); // initGame is a first class functions are simply treated as variables  We can pass them into other functions and return them from functions