const selectionButton = document.querySelectorAll(".selection");
const startButton = document.querySelector(".start-game");
let playerScore = 0;
let computerScore = 0;

startButton.addEventListener("click", () => {
  selectionButton.forEach((selectionButton) => {
    selectionButton.removeAttribute("disabled", "");
    startButton.textContent = "5 rounds win the game!";
  });
});

function computerPlay() {
  const randomNumber = Math.round(Math.random() * 3);
  if (randomNumber === 1) {
    return "✊";
  } else if (randomNumber === 2) {
    return "✋";
  } else {
    return "✌️";
  }
}

const buttonRock = document.getElementById("rock");
const buttonPaper = document.getElementById("paper");
const buttonScissors = document.getElementById("scissors");

buttonRock.addEventListener("click", function () {
  computerPlay();
  let computerSelection = computerPlay();
  document.querySelector(".player-selection").textContent = "✊";

  if (computerSelection === "✊") {
    document.querySelector(".computer-selection").textContent = "✊";
    document.querySelector(".round-result").textContent = "It's a tie.";
  } else if (computerSelection === "✋") {
    document.querySelector(".computer-selection").textContent = "✋";
    document.querySelector(".round-result").textContent = "You lose...";
    computerScore++;
    updateScore();
    finalResult();
  } else {
    document.querySelector(".computer-selection").textContent = "✌️";
    document.querySelector(".round-result").textContent = "You win!";
    playerScore++;
    updateScore();
    finalResult();
  }
});

buttonPaper.addEventListener("click", function () {
  computerPlay();
  let computerSelection = computerPlay();
  document.querySelector(".player-selection").textContent = "✋";

  if (computerSelection === "✊") {
    document.querySelector(".computer-selection").textContent = "✊";
    document.querySelector(".round-result").textContent = "You win!";
    playerScore++;
    updateScore();
    finalResult();
  } else if (computerSelection === "✋") {
    document.querySelector(".computer-selection").textContent = "✋";
    document.querySelector(".round-result").textContent = "It's a tie.";
  } else {
    document.querySelector(".computer-selection").textContent = "✌️";
    document.querySelector(".round-result").textContent = "You lose...";
    computerScore++;
    updateScore();
    finalResult();
  }
});

buttonScissors.addEventListener("click", function () {
  computerPlay();
  let computerSelection = computerPlay();
  document.querySelector(".player-selection").textContent = "✌️";

  if (computerSelection === "✊") {
    document.querySelector(".computer-selection").textContent = "✊";
    document.querySelector(".round-result").textContent = "You lose...";
    computerScore++;
    updateScore();
    finalResult();
  } else if (computerSelection === "✋") {
    document.querySelector(".computer-selection").textContent = "✋";
    document.querySelector(".round-result").textContent = "You win!";
    playerScore++;
    updateScore();
    finalResult();
  } else {
    document.querySelector(".computer-selection").textContent = "✌️";
    document.querySelector(".round-result").textContent = "it's a tie.";
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
    startButton.addEventListener("click", () => {
      document.querySelector(".player-score").textContent = 0;
      document.querySelector(".computer-score").textContent = 0;
      playerScore = 0;
      computerScore = 0;
      document.querySelector(".player-selection").textContent = "";
      document.querySelector(".computer-selection").textContent = "";
      document.querySelector(".round-result").textContent = "";

    });
  } else if (computerScore === 5) {
    startButton.textContent = "You loose the game...";
    buttonRock.setAttribute("disabled", "");
    buttonPaper.setAttribute("disabled", "");
    buttonScissors.setAttribute("disabled", "");
    startButton.addEventListener("click", () => {
      document.querySelector(".player-score").textContent = 0;
      document.querySelector(".computer-score").textContent = 0;
      playerScore = 0;
      computerScore = 0;
      document.querySelector(".player-selection").textContent = "";
      document.querySelector(".computer-selection").textContent = "";
      document.querySelector(".round-result").textContent = "";
    });
  }
}