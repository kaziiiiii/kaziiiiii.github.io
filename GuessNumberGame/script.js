'use strict';
// Gobal Varibales 
const message = document.querySelector('.message'); // ready the text contain 

let bodyStyle = document.querySelector("body");
let scredNumber = document.querySelector('.number');
let body = document.querySelector("body");
let randomNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Function for Display 
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}



document.querySelector('.check').addEventListener('click', () => {
    let guessNumber = Number(document.querySelector('.guess').value);
    /// No Input 
    if (!guessNumber) {
        displayMessage("Enter A Number");
        message.style.color = "red";
        message.style.fontSize = '4rem';
    }
    // When player win 
    else if (guessNumber == randomNumber) {
        displayMessage(" RIGHT  GUESS ");

        scredNumber.textContent = randomNumber;
        bodyStyle.style.backgroundColor = 'green';
        scredNumber.style.width = '35rem';

        if (score > highScore) {
            highScore = score; //score is grater than highScore
            document.querySelector(".highscore").textContent = highScore;
        }
    }
    // When user guess number is less than random Number
    else if (guessNumber < randomNumber) {
        if (score > 1) {
            displayMessage(" Too Less ");

            score--;
            document.querySelector('.score').textContent = score;
            message.style.color = 'yellow';
        } else {
            displayMessage(` You Loose the GAME`);

            document.querySelector('.score').textContent = 0;
            message.style.color = 'red';
        }
        /// When user guess number is greater than random number
    } else if (guessNumber > randomNumber) {
        if (score > 0) {
            displayMessage(`Too high`);

            score--;
            document.querySelector('.score').textContent = score;
            message.style.color = 'orange';
        } else {
            displayMessage(`You LOSSE THE GAME`);

        }
    }
    if (guessNumber > 21) {
        message.textContent = " Need A Number Between 1 to 20 ";
        message.style.color = "red";
        message.style.fontSize = '3rem';
    }
});
// for the again button 
document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    /// Clear the Guess Box 
    let guessNumber = Number(document.querySelector('.guess').value = "");
    document.querySelector('.guess').value;
    message.style.color = 'white';
    scredNumber.textContent = "?";

    displayMessage(`Start guessing...`);


    document.querySelector('.score').textContent = score;
    bodyStyle.style.backgroundColor = 'rgb(0, 0, 0)';
});