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
  if (this.gameOver != true) {
  this.switchPlayer();
  }
};

GameObject.prototype.victoryCheck = function() {
  if (this.playerInfo[this.currentPlayerId].totalScore >= 100) {
    this.gameOver = true;
    this.playerInfo[this.currentPlayerId].timesWon += 1
  }
}

GameObject.prototype.resetScore = function() {
  this.gameOver = false;
  this.playerInfo[1].totalScore = 0;
  this.playerInfo[2].totalScore = 0;
  this.currentScore = 0;
  this.currentPlayerId = 1;
}

// Player Constructor
function Player(name) {
  this.name = name;
  this.totalScore = 0;
  this.timesWon = 0;
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
      console.log(gameState.playerInfo[gameState.currentPlayerId])
      gameState.currentScore += dice;
    } else {
      gameState.currentScore = 0;
      gameState.endTurn();
    }
  }
  updateUI();
}

function holdEvent() {
  gameState.endTurn();
  updateUI();
}

function scoreUi() {
  document.querySelector("#score-1").innerText = gameState.playerInfo[1].totalScore;
  document.querySelector("#score-2").innerText = gameState.playerInfo[2].totalScore;
  document.querySelector("#current-score").innerText = gameState.currentScore;
}

function initializeUI() {
  playerNameChangeEvent();
  document.querySelector("#player1Name").innerText = gameState.playerInfo[1].name;
  document.querySelector("#player2Name").innerText = gameState.playerInfo[2].name;
  scoreUi();
  document.querySelector("#start-area").classList.add("hidden");
  document.querySelector("#play-area").classList.remove("hidden");
}

function updateUI() {
  if (gameState.currentPlayerId === 1) {
  document.querySelector("#player1Name").classList.add("current-player");
  document.querySelector("#player2Name").classList.remove("current-player");
  } else if (gameState.currentPlayerId === 2) {
  document.querySelector("#player2Name").classList.add("current-player");
  document.querySelector("#player1Name").classList.remove("current-player");
  }
  scoreUi(); 
  if (gameState.gameOver === true) {
    victoryEvent();
  }
}

function victoryEvent() {
  document.querySelector("#play-area").classList.add("hidden");
  document.querySelector("#victory-area").classList.remove("hidden");
  if (gameState.currentPlayerId === 1) {
    document.querySelector("#player-victor").innerText = gameState.playerInfo[1].name;
  } else if (gameState.currentPlayerId === 2) {
    document.querySelector("#player-victor").innerText = gameState.playerInfo[2].name;
  }
}

function newGame() {
  document.querySelector("#victory-area").classList.add("hidden");
  document.querySelector("#play-area").classList.remove("hidden");
  gameState.resetScore();
  updateUI();
}

window.addEventListener("load", function() {
  this.document.querySelector("#btn-new").addEventListener("click", startGame);
  this.document.querySelector("#btn-roll").addEventListener("click", rollEvent);
  this.document.querySelector("#btn-hold").addEventListener("click", holdEvent);
  this.document.querySelector("#btn-reset").addEventListener("click", newGame);
});

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Stylize start area
//  + create custom button
//  + customize heading
// Stylize play area

// --- create victory screen
// create play again feature
// create number of times won
// --- Add player name input event and submit check
// Pun Dan (Highest Level of Importance!!)
// --- Switch Player function
// --- UI update FUNction
// --- hold event function
// --- Finish rollEvent Functionality
// --- Write game victory check
// Finish UI
// --- Apply current score to total score
// --- UI dynamically change player name

// Code Graveyard ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------





