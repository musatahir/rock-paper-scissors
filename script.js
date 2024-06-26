function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    const playerDisplay = document.getElementById("player-choice");
    const computerDisplay = document.getElementById("computer-choice");
    const playerDisplayScore = document.getElementById("player-score");
    const computerDisplayScore = document.getElementById("computer-score");
    const resultMessage = document.getElementById("result");


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


    function updateScores() {
        playerDisplayScore.textContent = humanScore;
        computerDisplayScore.textContent = computerScore;
    }

    function playRound(humanChoice, computerChoice) {
        playerDisplay.textContent = humanChoice;
        computerDisplay.textContent = computerChoice;
        if (humanChoice == computerChoice) {
            res = "Tie";
        }

        else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            ((humanChoice == "paper" && computerChoice == "rock")) ||
            (humanChoice == "scissors" && computerChoice == "paper")) {
            humanScore += 1;
            if (humanScore === 5) res = "You won the game!"
            else res = "You win the round!";
        }
        else {
            computerScore += 1;
            if (computerScore === 5) res = "You lost the game to the computer!"
            else res = "You lost the round to the computer!";
        }

        resultMessage.textContent = res;
        updateScores();
    }


    function checkWinner() {
        if (humanScore === 5 || computerScore === 5) {
            buttons.forEach(button => {
                button.removeEventListener('click', getPlayerChoice);
            });
        }

    }

    function getPlayerChoice(e) {
        let playerSelection = e.target.id;
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        checkWinner();
    }



    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", getPlayerChoice);
    })
}


playGame();






// function getHumanChoice() {
//     const validChoices = ['rock', 'paper', 'scissors'];
//     let input = prompt("Rock, Paper, or Scissors?").toLowerCase();

//     while (!validChoices.includes(input)) {
//         input = prompt("Invalid Choice. Rock, Paper, or Scissors?").toLowerCase();
//     }
//     return input
// }



// while (round < numRounds) {
//



//     const computerSelection = getComputerChoice();
//     playRound(humanSelection, computerSelection);
//     round += 1;
// }

// if (humanScore > computerScore) {
//     console.log(`Congrats!\nYour final score: ${humanScore}\nComputer final score: ${computerScore}`);
// }
// else if (humanScore == computerScore) {
//     console.log(`Tie!\nYour final score: ${humanScore}\nComputer final score: ${computerScore}`);
// }
// else {
//     console.log(`Better luck next time!\nYour final score: ${humanScore}\nComputer final score: ${computerScore}`);
// }
