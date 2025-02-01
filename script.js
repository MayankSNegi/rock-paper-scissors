let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playGame(humanChoice) {
    const computerChoice = getComputerChoice();
    let resultText = "";

    if (humanChoice === computerChoice) {
        resultText = `It's a tie! You both chose ${humanChoice}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultText = `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    } else {
        resultText = `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    }

    document.getElementById("result").innerText = resultText;
    document.getElementById("score").innerText = `You: ${humanScore} | Computer: ${computerScore}`;
}
