const weapons = [{
  id: 'rock',
  name: 'Rock',
  winsOver: ['scissors', 'lizard'],
  iconClassName: 'fa-hand-rock',
},
{
  id: 'paper',
  name: 'Paper',
  winsOver: ['scissors', 'lizard'],
  iconClassName: 'fa-hand-paper',
},
{
  id: 'scissors',
  name: 'Scissors',
  winsOver: ['scissors', 'lizard'],
  iconClassName: 'fa-hand-scissors',
},
{
  id: 'lizard',
  name: 'Lizard',
  winsOver: ['scissors', 'lizard'],
  iconClassName: 'fa-hand-lizard',
},
{
  id: 'spock',
  name: 'Spock',
  winsOver: ['scissors', 'lizard'],
  iconClassName: 'fa-hand-spock',
}
];


//Creating variables
let score = 0;
let rounds = 0;
const scoreSpan = document.getElementById("score-number");
const roundsSpan = document.getElementById("round-number");
const message = document.getElementById("message");
var computerIcon = document.querySelector("#computer-icon");
var playerIcon = document.querySelector("#player-icon");


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

function onWeaponClick(playerChoiceId) {
const computerChoiceId = getComputerChoice();

const playerChoiceData = weapons.find(eachOption => eachOption.id === playerChoiceId);
const computerChoiceData = weapons.find(eachOption => eachOption.id === computerChoiceId);

// Update icons
computerIcon.className = `fas ${computerChoiceData.iconClassName}`;
playerIcon.className = `fas ${playerChoiceData.iconClassName}`;

if (playerChoiceId === computerChoiceId) {
  draw();
} else if (playerChoiceData.winsOver.includes(computerChoiceId)) {
  // Player wins
  win();
} else {
  //Computer wins
  lose();
}
}


function addClickListenersToOptions() {
weapons.forEach(eachOption => {
  const id = eachOption.id;
  document.getElementById(id).addEventListener('click', function() {
    onWeaponClick(id);
  });
});
}


addClickListenersToOptions();
