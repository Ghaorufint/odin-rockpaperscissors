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
    let result = "You lose! " + computerSelection + " beats " + playerSelection;
    computerScore++;
    return result;
}

function youWin(playerSelection, computerSelection) {
    let result = "You win! " + playerSelection + " beats " + computerSelection;
    playerScore++;
    return result;
}

function tie() {
    let result = "Tie!";
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

function game() { //play 5 rounds of rock paper scissors
    do {
        let playerSelection = prompt("Rock, paper, or scissors? Type end to end");
        if (playerSelection.toLowerCase() === "end") {
            process.exit(1);
        }
        else {
            playRound(playerSelection, computerPlay());
            rounds++;
        }
        if (rounds === 5) {
            if (playerScore > computerScore) {
                console.log("Player wins!")
            }
            if (playerScore < computerScore) {
                console.log("Computer wins!")
            }
            if (playerScore == computerScore) {
                console.log("Tie! Everybody wins!")
            }
            process.exit(1);
        }
    }
    while (rounds <= 5);
}

game();

