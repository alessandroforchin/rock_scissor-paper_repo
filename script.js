let textArray= [
    'rock',
    'paper',
    'scissors',
];

function computerPlay() {
    return textArray[Math.floor(Math.random() * textArray.length)]; 
    // console.log(randomIndex);
}

function playRound(lowerPlayerSelection, computerSelection) {
    if (lowerPlayerSelection === 'rock' && computerSelection === 'scissors' ||
    lowerPlayerSelection === 'paper' && computerSelection === 'rock' ||
    lowerPlayerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You Win!';
    } else if (lowerPlayerSelection === computerSelection) {
        return 'None';
    } else {
        return 'Sorry, You lose!';
    }
}

// console.log(playRound(playerSelection, computerSelection));

function game() {
    let playerPoints = 0;
    let computerPoints = 0;
    let tie = 0;

    for (let i = 1; i <= 5; i++) {
        let playerSelection = prompt('What\'s your move?');
        let computerSelection = computerPlay();
        let lowerPlayerSelection = playerSelection.toLowerCase();

        console.log(`Round ${i}`);
        console.log(`Player: ${lowerPlayerSelection}, Computer: ${computerSelection}`);

        let play = playRound(lowerPlayerSelection, computerSelection);

        if (play === 'You Win!') {
            playerPoints += 1;
        } else if (play === 'Sorry, You lose!') {
            computerPoints += 1;
        } else {
            tie += 1;
        }
    }

    console.log(`You won ${playerPoints} times.`);
    console.log(`Computer won ${computerPoints} times.`);
    console.log(`Ties: ${tie}`);

    if (playerPoints > computerPoints) {
        console.log('Congrats! You win the game.');
    } else if (playerPoints === computerPoints) {
        console.log('It\'s a tie');
    } else {
        console.log('Oh sorry! The computer wins the game.');
    }
}

console.log(game());

