console.log("Hello World");
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}
console.log(getComputerChoice()); // Should print "rock", "paper", or "scissors"
function getHumanChoice() {
    let choice = prompt("Enter Rock, Paper, or Scissors:").toLowerCase();
    while (!["rock", "paper", "scissors"].includes(choice)) {
        choice = prompt("Invalid choice! Enter Rock, Paper, or Scissors:").toLowerCase();
    }
    return choice;
}
console.log(getHumanChoice()); // Should prompt user for input
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return;
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win!");
        humanScore++;
    } else {
        console.log("You lose!");
        computerScore++;
    }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
    }

    console.log("Game Over!");
    if (humanScore > computerScore) {
        console.log("🎉 You win the game!");
    } else if (humanScore < computerScore) {
        console.log("😞 Computer wins the game!");
    } else {
        console.log("It's a tie!");
    }
}
playGame();
