const header = document.querySelector("header");
const score = document.querySelector('.score');

let playerScore = 0;
let computerScore = 0;
let currentResult = "";

function computerPlay() {
    let textArray= ['rock', 'paper', 'scissors'];
    return textArray[Math.floor(Math.random() * textArray.length)]; 
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors' ||
    playerSelection === 'paper' && computerSelection === 'rock' ||
    playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore ++;
        playerScoreDisplay.textContent = `Player: ${playerScore}`;
        scoreInfo.textContent = 'Congratulations, You Win this round!'
    } else if (playerSelection === computerSelection) {
        playerScore === playerScore && computerScore === computerScore;
        scoreInfo.textContent = 'It\'s a tie'
    } else {
        computerScore ++;
        computerScoreDisplay.textContent = `Computer: ${computerScore}`;
        scoreInfo.textContent = 'Sorry, You lose. Try Again'
    }
}

document.querySelectorAll('button').forEach((item) => {
    item.addEventListener('click', (e) => {
        playerSelection = e.target.id;
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        gameWinner();
    })
})

const div = document.createElement("div");
div.classList.add("score");
header.appendChild(div);

const playerScoreDisplay = document.createElement("h2");
div.appendChild(playerScoreDisplay);
playerScoreDisplay.textContent = `Player score: ${playerScore}`;
playerScoreDisplay.classList.add("playerScoreDisplay");

const computerScoreDisplay = document.createElement("h2");
div.appendChild(computerScoreDisplay);
computerScoreDisplay.textContent = `Computer score: ${computerScore}`;
computerScoreDisplay.classList.add("computerScoreDisplay");

let scoreInfo = document.createElement("h3");
score.appendChild(scoreInfo);
scoreInfo.textContent = currentResult;

let winner = document.createElement('h2');

function gameWinner() {
    if (playerScore === 5) {
        div.appendChild(winner);
        winner.textContent = 'Congrats, You win the game!';
        div.removeChild(playerScoreDisplay);
        div.removeChild(computerScoreDisplay);
        score.removeChild(scoreInfo);
    } else if (computerScore === 5) {
        div.appendChild(winner);
        winner.textContent = 'Sorry, Computer wins the game';
        div.removeChild(playerScoreDisplay);
        div.removeChild(computerScoreDisplay);
        score.removeChild(scoreInfo);
    }
}

