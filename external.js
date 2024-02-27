// generate computer choices
//----------------------------

function getComputerChoice() {
    let random = Math.floor((Math.random() * 3) + 1);
    if (random === 1) {
        return 'rock';
    }
    else if (random === 2) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}


// Play one round of the game
//------------------------------

function playOneRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "Tie!";
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        userScore++;
        return "You won! paper beats rock!";
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        return "You Lose! scissors beat paper"
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        userScore++;
        return "You won! rock beats scissors";
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        return "You Lose! paper beats rock";
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        return "You Loose! rock beats scissors";
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        userScore++;
        return "You Won! scissors beat paper";
    }
    else {
        return "Enter correct option!"
    }

}


// Play the game
//-------------------

function playGame() {

    do {
        let playerSelection = prompt("Enter your choice: ");
        playerSelection = playerSelection.toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playOneRound(playerSelection, computerSelection));

        if (userScore === 5) {
            console.log(`You won ${userScore}-${computerScore}`);

        }
        else if (computerScore === 5) {
            console.log(`You lost ${userScore}-${computerScore}`);
        }
    } while (userScore < 5 && computerScore < 5)
}

// initial scores
let userScore = 0;
let computerScore = 0;

playGame();
