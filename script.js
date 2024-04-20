const buttons = document.querySelectorAll('button');
const container = document.querySelector('#container');
const score = document.querySelector('#score');
const winText = document.querySelector('#wins');
const lossText = document.querySelector('#losses');
const finalScore = document.querySelector('#final');

//Generate Computers Answer (R/P/S)//

function getComputerChoice () {
    const randomNumber = (Math.floor(Math.random() * 3))
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else if (randomNumber === 2) {
        return "scissors";
    }
}

//Game round//

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Round Tied!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! " + playerSelection + " beats " + computerSelection;
    } 
}

function playGame () {
    let wins = 0;
    let losses = 0;
    let playerSelection;
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.id === 'rock') {
                playerSelection = 'rock';
            } else if (button.id === 'paper') {
                playerSelection = 'paper';
            } else if (button.id === 'scissors') {
                playerSelection = 'scissors';
            }
            const computerSelection = getComputerChoice();
            const result = playRound(playerSelection, computerSelection);
            console.log(result);
            container.innerText = result;

            if (result === "You win! " + playerSelection + " beats " + computerSelection) {
                wins++;
                winText.innerText = 'Wins: ' + wins;
            }
    
            if (result === "You lose! " + computerSelection + " beats " + playerSelection) {
                losses++;
                lossText.innerText = 'Losses: ' + losses;
            }

            if (wins >= 5) {
                finalScore.textContent = 'Victory! You have won 5 rounds.';
            } else if (losses >= 5) {
                finalScore.textContent = 'Defeat! Your opponent has won 5 rounds.';
            }

        });
    });
}

playGame();