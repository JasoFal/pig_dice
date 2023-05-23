// Business Logic for GameObject
function GameObject(player1Object, player2Object) {
  this.playerInfo = {1: player1Object, 2: player2Object};
  this.currentPlayerId = 1;
  this.currentScore = 0;
  this.playing = false;
  this.gameOver = false;
}

GameObject.prototype.switchPlayer = function() {
  // If Else Conditional
  // if (this.currentPlayerId === 1) {
  //   this.currentPlayerId = 2;
  // } else {
  //   this.currentPlayerId = 1;
  // }
  // ------------------------------------------------
  // Ternary
  this.currentPlayerId === 1 ? this.currentPlayerId = 2 : this.currentPlayerId = 1;
};

GameObject.prototype.endTurn = function() {
  this.playerInfo[this.currentPlayerId].totalScore += this.currentScore;
  this.currentScore = 0;
  this.victoryCheck();
  this.switchPlayer();
};

GameObject.prototype.victoryCheck = function() {
  if (this.playerInfo[this.currentPlayerId].totalScore >= 100) {
    this.gameOver = true;
    console.log(this.gameOver);
  }
}

// Player Constructor
function Player(name) {
  this.name = name;
  this.totalScore = 0;
}

// UI Logic
let player1 = new Player("Player 1");
let player2 = new Player("Player 2");
const gameState = new GameObject(player1, player2);

function playerNameChangeEvent() {
  let player1NameInput = document.querySelector("input#player-1-name-input").value;
  let player2NameInput = document.querySelector("input#player-2-name-input").value;
  if (player1NameInput != "") {
    gameState.playerInfo[1].name = player1NameInput;
  }
  if (player2NameInput != "") {
    gameState.playerInfo[2].name = player2NameInput;
  }
}

function startGame() {
  initializeUI();
  gameState.playing = true;
}

function rollEvent() {
  if (gameState.playing === true) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    if (dice !== 1) {
      gameState.currentScore += dice;
    } else {
      gameState.currentScore = 0;
      gameState.endTurn();
    }
  }
  console.log(gameState.currentScore);
  updateUI();
}

function holdEvent() {
  gameState.endTurn();
  updateUI();
}

function initializeUI() {
  playerNameChangeEvent();
  document.querySelector("#player1Name").innerText = gameState.playerInfo[1].name;
  document.querySelector("#player2Name").innerText = gameState.playerInfo[2].name;
  document.querySelector("#current-score").innerText = gameState.currentScore;
  document.querySelector("#start-area").classList.add("hidden");
}

function updateUI() {
  document.querySelector("#current-score").innerText = gameState.currentScore;  
  document.querySelector("#score-1").innerText = gameState.playerInfo[1].totalScore;
  document.querySelector("#score-2").innerText = gameState.playerInfo[2].totalScore;
  if (gameState.gameOver === true) {
    window.alert("Game Over!");
  }
}

window.addEventListener("load", function() {
  this.document.querySelector("#btn-new").addEventListener("click", startGame);
  this.document.querySelector("#btn-roll").addEventListener("click", rollEvent);
  this.document.querySelector("#btn-hold").addEventListener("click", holdEvent);
});

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// --- Add player name input event and submit check
// Pun Dan (Highest Level of Importance!!)
// --- Switch Player function
// --- UI update FUNction
// --- hold event function
// --- Finish rollEvent Functionality
// --- Write game victory check
// Finish UI
// --- Apply current score to total score
// UI dynamically change player name

// Code Graveyard ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// GameObject.prototype.addPlayer = function(player) {
//   player.id = this.assignPlayerId();
//   this.playerInfo[player.id] = player;
// };

// GameObject.prototype.assignPlayerId = function() {
//   this.playerId += 1;
//   return this.playerId;
// };

// GameObject.prototype.findPlayerInfo = function(id) {
//   if (this.playerInfo[id] !== undefined) {
//     return this.playerInfo[id];
//   }
//   return false;
// };




