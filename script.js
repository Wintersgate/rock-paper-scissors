const buttons = document.querySelectorAll('button');

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
        });
    });
}

playGame();