function computerPlay() { //returns random computer selection
    let number = Math.floor(Math.random() * 3);
    let computerSelection = "";
    if (number === 0) {
        computerSelection = "Rock";
    }
    else if (number === 1) {
        computerSelection = "Paper";
    }
    else {
        computerSelection = "Scissors";
    }
    return computerSelection;
}

function youLose(playerSelection, computerSelection) { 
    let result = "You lose this round! " + computerSelection + " beats " + playerSelection;
    computerScore++;
    return result;
}

function youWin(playerSelection, computerSelection) {
    let result = "You win this round! " + playerSelection + " beats " + computerSelection;
    playerScore++;
    return result;
}

function tie() {
    let result = "This round is a tie!";
    return result;
}

function playRound(playerSelection, computerSelection) { //outputs results of each round to player
    let result = "";
    if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "Rock") {
        result = tie();
    }
    if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "Paper") {
        result = youLose(playerSelection, computerSelection);
    }
    if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "Scissors") {
        result = youWin(playerSelection, computerSelection);
    }
    if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "Rock") {
        result = youWin(playerSelection, computerSelection);
    }
    if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "Paper") {
        result = tie();
    }
    if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "Scissors") {
        result = youLose(playerSelection, computerSelection);
    }
    if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "Rock") {
        result = youLose(playerSelection, computerSelection);
    }
    if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "Paper") {
        result = youWin(playerSelection, computerSelection); 
    }
    if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "Scissors") {
        result = tie();
    }
    console.log(result);
    console.log("You: " + playerScore);
    console.log("Computer: " + computerScore);
}

let playerScore = 0;
let computerScore = 0;
let rounds = 0;

const container = document.querySelector('.container');
const displayComputerScore = document.createElement('div');
displayComputerScore.classList.add('displayComputerScore')
const displayPlayerScore = document.createElement('div');
displayPlayerScore.classList.add('displayPlayerScore');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
      if (playerScore < 5 && computerScore < 5) {
        playRound(button.id, computerPlay());
        determineWinner();
      }
        displayPlayerScore.textContent = ("You: " + playerScore);
        displayComputerScore.textContent = ("Computer: " + computerScore);
        container.appendChild(displayPlayerScore);
        container.appendChild(displayComputerScore);
    });
});

const displayWinner = document.createElement('div');
displayWinner.classList.add('displayWinner');

function determineWinner() {
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore) {
            displayWinner.textContent = ("Player wins!");
        }
        else {
            displayWinner.textContent = ("Computer wins!");
        }
        container.appendChild(displayWinner);
    }
}




