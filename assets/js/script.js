//Creating variables
let score = 0;
let rounds = 0;
const scoreSpan = document.getElementById("score-number");
const roundsSpan = document.getElementById("round-number");
const message = document.getElementById("message");
var computerImage = document.querySelector("#computer-image");
var playerImage = document.querySelector("#player-image");

const weapons = [{
    id: 'rock',
    name: 'Rock',
    winsOver: ['scissors', 'lizard']
  },
  {
    id: 'paper',
    name: 'Paper',
    winsOver: ['scissors', 'lizard']
  },
  {
    id: 'scissors',
    name: 'Scissors',
    winsOver: ['scissors', 'lizard']
  },
  {
    id: 'lizard',
    name: 'Lizard',
    winsOver: ['scissors', 'lizard']
  },
  {
    id: 'spock',
    name: 'Spock',
    winsOver: ['scissors', 'lizard']
  }
];

//Computer choice
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 5);
  return weapons[randomNumber].id;

}

//Counters and result

function draw() {
  rounds++;
  roundsSpan.innerHTML = rounds;
  message.textContent = "Its a draw! Try again!";
}

function win() {
  score++;
  scoreSpan.innerHTML = score;
  rounds++;
  roundsSpan.innerHTML = rounds;
  message.textContent = "Congratulations, you won!";
}

function lose() {
  rounds++;
  roundsSpan.innerHTML = rounds;
  message.textContent = "You lost! Better luck next time!";
}

//Player choice

function buttons(playerChoiceId) {
  const computerChoiceId = getComputerChoice();

  const playerChoiceWinsOver = weapons.find(eachOption => eachOption.id === playerChoiceId).winsOver;
  if (playerChoiceId === computerChoiceId) {
    draw();
  } else if (playerChoiceWinsOver.includes(computerChoiceId)) {
    // Player wins
    win();
  } else {
    //Computer wins
    lose();
  }

  //Return pictures
  playerImage.src = `./assets/images/${playerChoiceId}.jpg`;
  computerImage.src = `./assets/images/${computerChoiceId}.jpg`;
}


function addClickListenersToOptions() {
  weapons.forEach(eachOption => {
    const id = eachOption.id;
    document.getElementById(id).addEventListener('click', function() {
      buttons(id);
    });
  });
}


addClickListenersToOptions();