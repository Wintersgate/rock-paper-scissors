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
        return "Game Tied!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! The computer chose " + computerSelection;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! The computer chose " + computerSelection;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! The computer chose " + computerSelection;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! The computer chose " + computerSelection;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! The computer chose " + computerSelection;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! The computer chose " + computerSelection;
    } 
}

//Game loop//

function playGame () {
    let wins = 0;

    for (let i = 0; i < 5; i++) {
        const userInput = prompt("Rock, Paper, or Scissors?", "");
        const playerSelection = userInput.toLowerCase();
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result === "You win! The computer chose " + computerSelection) {
            wins++;
            console.log(wins);
        }
    }

    if (wins >= 3) {
        console.log("Victory Achieved! You won " +wins+ " out of 5 times"); 
    } else {
        console.log("Defeat! You only won " +wins+ " out of 5 times");
    }
}

playGame();
