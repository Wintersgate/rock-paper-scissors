//Generate Computers Answer (R/P/S)//

function getComputerChoice () {
    const randomNumber = (Math.floor(Math.random() * 3))
    if (randomNumber === 0) {
        return "Rock";
    } else if (randomNumber === 1) {
        return "Paper";
    } else if (randomNumber === 2) {
        return "Scissors";
    }
}

//Game loop//

const playerSelection = prompt("Rock, Paper, or Scissors?", "");
const computerSelection = getComputerChoice();

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Game Tied!";
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You lose! Paper beats Rock";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You win! Rock beats Scissors";
    } else if (PlayerSelection === "Paper" && computerSelection === "Rock") {
        return "You win! Paper beats Rock";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "You lose! Scissors beats Paper";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "You lose! Rock beats Scissors";
    } else if (PlayerSelection === "Scissors" && computerSelection === "Paper") {
        return "You win! Scissors beats Paper";
    } 
}



console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));

