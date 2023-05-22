// Business Logic for GameObject
function GameObject(player1Object, player2Object) {
  this.playerInfo = {1: player1Object, 2: player2Object};
  this.currentPlayerId = 1;
  this.currentScore = 0;
  this.playing = false;
  this.gameOver = false;
}

GameObject.prototype.switchPlayer = function() {
  // if (this.currentPlayerId === 1) {
  //   this.currentPlayerId = 2;
  // } else {
  //   this.currentPlayerId = 1;
  // }
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

// Business Logic
function Player(name) {
  this.name = name;
  this.totalScore = 0;
}

// UI Logic
let player1 = new Player("Me said I");
let player2 = new Player("?");
const gameState = new GameObject(player1, player2);

function startGame() {
  gameState.playing = true;
  console.log("game started");
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
  document.querySelector("#player1Name").innerText = gameState.playerInfo[1].name;
  document.querySelector("#player2Name").innerText = gameState.playerInfo[2].name;
  document.querySelector("#current-score").innerText = gameState.currentScore;
}

function updateUI() {
  document.querySelector("#current-score").innerText = gameState.currentScore;  
  document.querySelector("#score-1").innerText = gameState.playerInfo[1].totalScore;
  document.querySelector("#score-2").innerText = gameState.playerInfo[2].totalScore;
  if (gameState.gameOver === true) {
    window.alert("Game Over!")
  }
}

window.addEventListener("load", function() {
  this.document.querySelector("#btn-new").addEventListener("click", startGame);
  this.document.querySelector("#btn-roll").addEventListener("click", rollEvent);
  this.document.querySelector("#btn-hold").addEventListener("click", holdEvent);
  initializeUI();
});

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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




