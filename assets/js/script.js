//Creating consts
const score = 0;
const rounds = 0;
const scoreSpan = document.getElementById("score-number");
const roundsSpan = document.getElementById("round-number");
const scoreArea = document.querySelector(".score-area");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const lizard = document.getElementById("lizard");
const spock = document.getElementById("spock");

//Computer choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors", "lizard", "spock"];
  const randomNumber = Math.floor(Math.random() * 5);
  return choices[randomNumber];
}

//Player choice
function game(playerChoice) {
  const computerChoice = getComputerChoice();

  if (playerChoice === computerChoice) {
    console.log("Its a draw");
  } else if (computerChoice === "rock") {
    if (playerChoice === "paper") {
      console.log("You win");
    } else {
      console.log("The computer wins!");
    }
  } else if (computerChoice === "rock") {
    if (playerChoice ==="spock") {
      console.log("You win");
    } else {
      console.log("The computer wins!");
    }
  } else if (computerChoice === "paper") {
    if (playerChoice === "lizard") {
      console.log("You win");
    } else {
      console.log("The computer wins!");
    }
  } else if (computerChoice === "paper") {
    if (playerChoice === "scissors") {
      console.log("You win");
    } else {
      console.log("The computer wins!");
    }
  } else if (computerChoice === "scissors") {
    if (playerChoice === "spock") {
      console.log("You win");
    } else {
      console.log("The computer wins!");
    }
  } else if (computerChoice === "scissors") {
    if (playerChoice === "rock") {
      console.log("You win");
    } else {
      console.log("The computer wins!");
    }
  } else if (computerChoice === "lizard") {
    if (playerChoice === "scissors") {
      console.log("You win");
    } else {
      console.log("The computer wins!");
    }
  } else if (computerChoice === "lizard") {
    if (playerChoice === "rock") {
      console.log("You win");
    } else {
      console.log("The computer wins!");
    }
  } else if (computerChoice === "spock") {
    if (playerChoice === "paper") {
      console.log("You win");
    } else {
      console.log("The computer wins!");
    }
  } else if (computerChoice === "spock") {
    if (playerChoice === "lizard") {
      console.log("You win");
    } else {
      console.log("The computer wins!");
    }
}
}

function buttons() {
  rock.addEventListener('click', function() {
    game("rock");
  })
  paper.addEventListener('click', function() {
    game("paper");
  })
  scissors.addEventListener('click', function() {
    game("scissors");
  })
  lizard.addEventListener('click', function() {
    game("lizard");
  })
  spock.addEventListener('click', function() {
    game("spock");
  })
}

buttons();
