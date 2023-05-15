// Utility Logic
function diceRoll() {
  min = Math.ceil(1);
  max = Math.floor(6);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Business Logic for GameObject
function GameObject() {
  this.playerInfo = {};
  this.playerId = 0;
}

GameObject.prototype.addPlayer = function(player) {
  player.id = this.assignPlayerId();
  this.playerInfo[player.id] = player;
};

GameObject.prototype.assignPlayerId = function() {
  this.playerId += 1;
  return this.playerId;
};

GameObject.prototype.findPlayerInfo = function(id) {
  if (this.playerInfo[id] !== undefined) {
    return this.playerInfo[id];
  }
  return false;
};

// Business Logic
function PlayerInfo(playerName) {
  this.playerName = playerName;
  this.playerScore = 0;
}

function ScoreObject() {
  this.turnScore = 0;
}

ScoreObject.prototype.rollForScore = function() {
  if (diceRoll() != 1) {
  this.turnScore = this.turnScore + diceRoll();
  console.log(this.turnScore);
  } else {
  return this.turnScore = 0;
  }
};

// UI Logic








