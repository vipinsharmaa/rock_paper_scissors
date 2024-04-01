// initial scores
let userScore = 0;
let computerScore = 0;


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

// disable buttons when game is won or lost

function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true
    })
}


// Play the game
//-------------------


const buttons = document.querySelectorAll('.button-3');

buttons.forEach((button) => {
    button.addEventListener('click', function () {
        const computerSelection = getComputerChoice();
        const playerSelection = button.value;

        // display result for current round
        const lvlResult = document.querySelector('.lvlResult');
        lvlResult.innerText = playOneRound(playerSelection, computerSelection);

        // display overall game score
        const dispUserScore = document.querySelector('.dispUserScore');
        dispUserScore.innerText = userScore;

        const dispCompScore = document.querySelector('.dispCompScore');
        dispCompScore.innerText = computerScore;

        // if user or computer scores 5 game over and display final result
        if (userScore == 5) {
            disableButtons();
            const finalResult = document.querySelector('.finalResult');
            finalResult.innerText = `Congrats !! You won ${userScore}-${computerScore}`;
        }

        else if (computerScore == 5) {
            disableButtons();
            const finalResult = document.querySelector('.finalResult');
            finalResult.innerText = `On no !! You lost ${userScore}-${computerScore}. Refresh page to play again.`;
        }

    });
});



