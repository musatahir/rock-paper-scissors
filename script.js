function getComputerChoice() {
    const num = Math.floor(Math.random() * 3);
    switch (num) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    const validChoices = ['rock', 'paper', 'scissors'];
    let input = prompt("Rock, Paper, or Scissors?").toLowerCase();

    while (!validChoices.includes(input)) {
        input = prompt("Invalid Choice. Rock, Paper, or Scissors?").toLowerCase();
    }
    return input
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log(`It's a tie! Both choose ${humanChoice}`);
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        ((humanChoice == "paper" && computerChoice == "rock")) ||
        (humanChoice == "scissors" && computerChoice == "paper")) {
        humanScore += 1;
        console.log(`You win! You chose ${humanChoice}, which beats ${computerChoice}`);
    }
    else {
        computerScore += 1;
        console.log(`You lose! The computer chose ${computerChoice}, which beats ${humanChoice}`);
    }


}

let round = 0;
let humanScore = 0;
let computerScore = 0;
const numRounds = 5;


function playGame() {


    while (round < numRounds) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        round += 1;
    }

    if (humanScore > computerScore) {
        console.log(`Congrats!\nYour final score: ${humanScore}\nComputer final score: ${computerScore}`);
    }
    else if (humanScore == computerScore) {
        console.log(`Tie!\nYour final score: ${humanScore}\nComputer final score: ${computerScore}`);
    }
    else {
        console.log(`Better luck next time!\nYour final score: ${humanScore}\nComputer final score: ${computerScore}`);
    }

}

playGame();