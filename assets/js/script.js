//Creating variables
let score = 0;
let rounds = 0;
const scoreSpan = document.getElementById("score-number");
const roundsSpan = document.getElementById("round-number");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const lizard = document.getElementById("lizard");
const spock = document.getElementById("spock");
var computerImage = document.querySelector("#computer-image");
var playerImage = document.querySelector("#player-image");


//Computer choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors", "lizard", "spock"];
  const randomNumber = Math.floor(Math.random() * 5);
  return choices[randomNumber];
 
}

//Counter and pop up windows

function draw() {
  rounds++;
  roundsSpan.innerHTML = rounds;
  alert("Its a draw! Try again!");
}

function win() {
  score++;
  scoreSpan.innerHTML = score;
  rounds++;
  roundsSpan.innerHTML = rounds;
  alert("Congratulations, you won!");
}

function lose() {
  rounds++;
  roundsSpan.innerHTML = rounds;
  alert("Better luck next time!");
}

//Player choice

function game(playerChoice) {
  const computerChoice = getComputerChoice();

  if (playerChoice === computerChoice) {
    draw();
  } else if (computerChoice === "rock") {
    if (playerChoice === "paper") {
      win();
    } else {
      lose();
    }
  } else if (computerChoice === "rock") {
    if (playerChoice === "spock") {
      win();
    } else {
      lose();
    }
  } else if (computerChoice === "paper") {
    if (playerChoice === "lizard") {
      win();
    } else {
      lose();
    }
  } else if (computerChoice === "paper") {
    if (playerChoice === "scissors") {
      win();
    } else {
      lose();
    }
  } else if (computerChoice === "scissors") {
    if (playerChoice === "spock") {
      win();
    } else {
      lose();
    }
  } else if (computerChoice === "scissors") {
    if (playerChoice === "rock") {
      win();
    } else {
      lose();
    }
  } else if (computerChoice === "lizard") {
    if (playerChoice === "scissors") {
      win();
    } else {
      lose();
    }
  } else if (computerChoice === "lizard") {
    if (playerChoice === "rock") {
      win();
    } else {
      lose();
    }
  } else if (computerChoice === "spock") {
    if (playerChoice === "paper") {
      win();
    } else {
      lose();
    }
  } else if (computerChoice === "spock") {
    if (playerChoice === "lizard") {
      win();
    } else {
        lose();
    }
  }
  playerImage.src = `./assets/images/${playerChoice}.jpg`;
  computerImage.src = `./assets/images/${computerChoice}.jpg`;
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