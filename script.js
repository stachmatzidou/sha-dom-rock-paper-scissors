const selectionButton = document.querySelectorAll(".selection");
const startButton = document.querySelector(".start-game");
const buttonRock = document.getElementById("rock");
const buttonPaper = document.getElementById("paper");
const buttonScissors = document.getElementById("scissors");
const playerSelection = document.querySelector(".player-selection");
const computerSelection = document.querySelector(".computer-selection");
const roundResult = document.querySelector(".round-result");
let playerScore = 0;
let computerScore = 0;

startButton.addEventListener("click", () => {
  selectionButton.forEach((selectionButton) => {
    selectionButton.removeAttribute("disabled", "");
    startButton.textContent = "5 rounds win the game!";
  });
});

function computerPlay() {
  const symbols = ["✊", "✋", "✌️"];
  const randomNumber = Math.floor(Math.random() * symbols.length);
  return symbols[randomNumber];
}

buttonRock.addEventListener("click", function () {
  computerPlay();
  let computerChoice = computerPlay();
  playerSelection.textContent = "✊";

  if (computerChoice === "✊") {
    computerSelection.textContent = "✊";
    roundResult.textContent = "It's a tie.";
  } else if (computerChoice === "✋") {
    computerSelection.textContent = "✋";
    roundResult.textContent = "You lose...";
    computerScore++;
    updateScore();
    finalResult();
  } else {
    computerSelection.textContent = "✌️";
    roundResult.textContent = "You win!";
    playerScore++;
    updateScore();
    finalResult();
  }
});

buttonPaper.addEventListener("click", function () {
  computerPlay();
  let computerChoice = computerPlay();
  playerSelection.textContent = "✋";

  if (computerChoice === "✊") {
    computerSelection.textContent = "✊";
    roundResult.textContent = "You win!";
    playerScore++;
    updateScore();
    finalResult();
  } else if (computerChoice === "✋") {
    computerSelection.textContent = "✋";
    roundResult.textContent = "It's a tie.";
  } else {
    computerSelection.textContent = "✌️";
    roundResult.textContent = "You lose...";
    computerScore++;
    updateScore();
    finalResult();
  }
});

buttonScissors.addEventListener("click", function () {
  computerPlay();
  let computerChoice = computerPlay();
  playerSelection.textContent = "✌️";

  if (computerChoice === "✊") {
    computerSelection.textContent = "✊";
    roundResult.textContent = "You lose...";
    computerScore++;
    updateScore();
    finalResult();
  } else if (computerChoice === "✋") {
    computerSelection.textContent = "✋";
    roundResult.textContent = "You win!";
    playerScore++;
    updateScore();
    finalResult();
  } else {
    computerSelection.textContent = "✌️";
    roundResult.textContent = "It's a tie.";
  }
});

function updateScore() {
  const pScore = document.querySelector(".player-score");
  const cScore = document.querySelector(".computer-score");
  pScore.textContent = playerScore;
  cScore.textContent = computerScore;
}

function finalResult() {
  if (playerScore === 5) {
    startButton.textContent = "You win the game!";
    buttonRock.setAttribute("disabled", "");
    buttonPaper.setAttribute("disabled", "");
    buttonScissors.setAttribute("disabled", "");
  } else if (computerScore === 5) {
    startButton.textContent = "You lose the game...";
    buttonRock.setAttribute("disabled", "");
    buttonPaper.setAttribute("disabled", "");
    buttonScissors.setAttribute("disabled", "");
  }
  startButton.addEventListener("click", () => {
    document.querySelector(".player-score").textContent = 0;
    document.querySelector(".computer-score").textContent = 0;
    playerScore = 0;
    computerScore = 0;
    playerSelection.textContent = "";
    computerSelection.textContent = "";
    roundResult.textContent = "";
  });
}